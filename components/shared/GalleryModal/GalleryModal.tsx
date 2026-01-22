'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryModalProps } from '@/types';
import { GalleryImages } from '../GalleryImage/GalleryImage';

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, product, isGalleryImages = false, galleryImageData }: any) => {
    const [current, setCurrent] = useState(0);
    
    // Reset current index when modal opens with a new product
    useEffect(() => {
        if (isOpen) {
            setCurrent(0);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, product]);

    const items = product?.gallery || [];
    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items.length]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }, [items.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleNext, handlePrev, onClose]);

    if (!isOpen || !product) return null;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-ophthall-orange transition-colors z-50 p-2"
                aria-label="Close gallery"
            >
                <XCircle className="w-10 h-10" />
            </button>

            {/* Show gallery slider if isGalleryImages is true */}
            {isGalleryImages ? (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <GalleryImages Images={galleryImageData} />
                </div>
            ) : (
                /* Show regular image/video gallery */
                items.length > 0 && (
                    <>
                        {items.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors z-50 hover:scale-110 duration-200"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors z-50 hover:scale-110 duration-200"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
                                </button>
                            </>
                        )}

                        <div
                            className="max-w-6xl w-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full aspect-video md:h-[70vh] flex items-center justify-center mb-6">
                                {items[current]?.type === 'video' ? (
                                    <iframe
                                        className="w-full h-full rounded-xl shadow-2xl"
                                        src={items[current]?.src}
                                        title="Video Player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <img
                                        src={items[current]?.src}
                                        className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
                                        alt={`Gallery image ${current + 1}`}
                                    />
                                )}
                            </div>

                            {items.length > 1 && (
                                <div className="flex gap-3 overflow-x-auto p-2 max-w-full no-scrollbar snap-x">
                                    {items.map((item: any, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrent(idx)}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all snap-center ${current === idx
                                                ? 'border-ophthall-orange opacity-100 scale-105'
                                                : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'
                                                }`}
                                        >
                                            <img
                                                src={item.thumb || item.src}
                                                className="w-full h-full object-cover"
                                                alt={`Thumbnail ${idx + 1}`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                )
            )}
        </div>
    );
};

export default GalleryModal;
