'use client';

import React from 'react';
import { CheckCircle2, PlayCircle, Camera, Check, Maximize2, Calendar } from 'lucide-react';
import Image from 'next/image';
import type { Product } from '@/types';

interface ClearViewProps {
    onOpenGallery: (product: Product) => void;
    onInstallationVideos?: () => void;
}

const ClearView: React.FC<ClearViewProps> = ({ onOpenGallery, onInstallationVideos }) => {
    const gallery = [
        { src: '/assets/clear_view_1.png', type: 'image' } as const
        // Add more if available
    ];

    const scrollToDemo = () => {
        document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="clearview" className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
                {/* Content Side */}
                <div>
                    <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-4">
                        DIGITAL IMAGING
                    </h2>
                    <h3 className="text-5xl md:text-6xl font-light text-ophthall-blue mb-6 tracking-tighter">
                        Ophthall <span className="font-bold">Clearview.</span>
                    </h3>
                    <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                        Digital Imaging for Slit Lamps. Convert any slit lamp into a high-resolution anterior segment imaging system.
                    </p>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-12">
                        {[
                            "High-Res Camera", "Universal Mount",
                            "No PC Needed", "Wireless Capture", " Raspberry pi Inbuilt 1.8 GHZ quadcore 2GB Ram processor", "Sony IMX477 Sensor"
                        ].map((feat, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-ophthall-orange rounded-full text-white">
                                    <CheckCircle2 className="w-3 h-3" />
                                </div>
                                <span className="text-sm font-bold text-ophthall-blue">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-gray-500 mb-8 italic">
                        Ideal for tracking cataracts, pterygium, corneal ulcers, and medico-legal records. Improves patient understanding during counseling using clear visuals.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button
                            onClick={scrollToDemo}
                            className="flex items-center gap-3 px-8 py-4 font-black uppercase text-[11px] tracking-widest rounded transition-all shadow-lg bg-ophthall-blue text-white hover:bg-ophthall-orange"
                        >
                            <Calendar className="w-4 h-4" /> Schedule a Demo
                        </button>
                        <button
                            onClick={onInstallationVideos}
                            className="flex items-center gap-3 px-6 py-4 font-black uppercase text-[11px] tracking-widest rounded transition-all border border-ophthall-blue text-ophthall-blue hover:bg-blue-50"
                        >
                            <PlayCircle className="w-4 h-4" /> Installation Videos
                        </button>
                        <button
                            onClick={() => onOpenGallery({ name: 'ClearView', gallery })}
                            className="flex items-center gap-3 px-10 py-4 font-black uppercase text-[11px] tracking-widest rounded transition-all border-2 border-ophthall-blue text-ophthall-blue hover:bg-ophthall-blue hover:text-white"
                        >
                            <Camera className="w-5 h-5" /> Gallery
                        </button>
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative">
                    <div  onClick={() => onOpenGallery({ name: 'ClearView', gallery })} className="bg-gray-100 rounded-3xl group cursor-pointer overflow-hidden aspect-square border border-gray-100">
                        <Image
                            src="/assets/clear_view_1.png"
                            alt="Ophthall ClearView Slit Lamp System"
                            width={800}
                            height={800}
                            className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
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

export default ClearView;
