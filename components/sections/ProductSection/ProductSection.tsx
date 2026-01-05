'use client';

import React from 'react';
import { CheckCircle2, Camera, Maximize2, PlayCircle, Calendar } from 'lucide-react';
import type { ProductSectionProps } from '@/types';
import Image from 'next/image';

const ProductSection: React.FC<ProductSectionProps> = ({
    id,
    name,
    dark,
    subtitle,
    description,
    features,
    gallery,
    onOpenGallery,
    imageLeft,
    galleryButtonText,
    onScheduleDemo,
    onInstallationVideos
}) => {
    const isPro = id.includes('pro');
    const layoutImageLeft = imageLeft ?? isPro;
    const galleryBtnLabel = galleryButtonText ?? "View Product Gallery";

    const imageSrc = isPro
        ? "/assets/ophthall_vid_pro.png"
        : "/assets/ophthall_vid.png";

    return (
        <section id={id} className={`py-32 ${dark ? 'bg-ophthall-blue text-white' : 'bg-white'}`}>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24 items-center">
                <div className={layoutImageLeft ? 'lg:order-2' : ''}>
                    <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                        {subtitle}
                    </h2>
                    <h3 className={`text-5xl md:text-6xl font-light mb-10 tracking-tighter leading-[1.1] ${dark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Ophthall <span className="font-bold">{name}</span>
                    </h3>
                    <p className={`text-xl font-light leading-relaxed mb-12 ${dark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                        {description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-ophthall-orange rounded-full text-white">
                                    <CheckCircle2 className="w-3 h-3" />
                                </div>
                                <span className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>
                                    {feat}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        {onScheduleDemo && (
                            <button
                                onClick={onScheduleDemo}
                                className={`flex items-center gap-3 px-8 py-4 font-black uppercase text-[11px] tracking-widest rounded transition-all shadow-lg ${dark
                                    ? 'bg-white text-ophthall-blue hover:bg-gray-100'
                                    : 'bg-ophthall-blue text-white hover:bg-ophthall-orange'
                                    }`}
                            >
                                <Calendar className="w-4 h-4" /> Schedule a Demo
                            </button>
                        )}

                        {onInstallationVideos && (
                            <button
                                onClick={onInstallationVideos}
                                className={`flex items-center gap-3 px-6 py-4 font-black uppercase text-[11px] tracking-widest rounded transition-all border ${dark
                                    ? 'border-white text-white hover:bg-white hover:text-ophthall-blue'
                                    : 'border-ophthall-blue text-ophthall-blue hover:bg-blue-50'
                                    }`}
                            >
                                <PlayCircle className="w-4 h-4" /> Installation Videos
                            </button>
                        )}

                        <button
                            onClick={() => onOpenGallery({ name, gallery })}
                            className={`flex items-center gap-3 px-10 py-4 font-black uppercase text-[11px] tracking-widest rounded transition-all border-2 ${dark
                                ? 'border-white text-white hover:bg-white hover:text-ophthall-blue'
                                : 'border-ophthall-blue text-ophthall-blue hover:bg-ophthall-blue hover:text-white'
                                }`}
                        >
                            <Camera className="w-5 h-5" /> {galleryBtnLabel}
                        </button>
                    </div>
                </div>

                <div className={layoutImageLeft ? 'lg:order-1' : ''}>
                    <div className={`relative group cursor-pointer overflow-hidden rounded-3xl bg-gray-100 w-full ${isPro ? 'aspect-[4/3] max-w-[600px] mx-auto' : 'aspect-square max-w-[500px] mx-auto'}`}>
                        <Image
                            src={imageSrc}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            alt={`Ophthall ${name}`}
                            width={800}
                            height={800}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                <Maximize2 className="text-white w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
