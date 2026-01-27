'use client';

import React from 'react';
import { GraduationCap, Eye, Video, BookOpen, PlayCircle } from 'lucide-react';

interface SurgeryVideoDetailsProps {
    onClose?: () => void;
}

export const SurgeryVideoDetails: React.FC<SurgeryVideoDetailsProps> = ({ onClose }) => {
    const scrollToSurgeryVideos = () => {
        // Close the popup first
        if (onClose) {
            onClose();
        }

        // Wait for popup close animation, then scroll
        setTimeout(() => {
            const surgerySection = document.getElementById('surgery-videos');
            if (surgerySection) {
                surgerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    };

    const highlights = [
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Real Surgical Cases",
            description: "Expert procedures in HD"
        },
        {
            icon: <Video className="w-6 h-6" />,
            title: "HD Recording",
            description: "Crystal clear quality"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Growing Library",
            description: "Diverse techniques"
        }
    ];

    return (
        <div className="p-8 md:p-10">
            {/* Header Section */}
            <div className="text-center mb-8">
                {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ophthall-orange to-orange-600 rounded-full mb-5 shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-3">
                    Surgical Excellence
                </h2> */}
                <h3 className="text-3xl md:text-4xl font-light text-ophthall-blue tracking-tighter mb-4">
                    Ophthalmic Surgical <span className="font-bold text-ophthall-orange">Education</span>
                </h3>
                <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
                    Learn from real-world ophthalmic procedures recorded in stunning clarity with the Ophthall Imaging System.
                </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {highlights.map((highlight, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-ophthall-orange/30 transition-all hover:shadow-md group text-center"
                    >
                        <div className="text-ophthall-orange mb-3 flex justify-center group-hover:scale-110 transition-transform">
                            {highlight.icon}
                        </div>
                        <h4 className="text-sm font-bold text-ophthall-blue mb-1">
                            {highlight.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                            {highlight.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-ophthall-blue to-blue-900 rounded-2xl p-6 mb-8 text-white">
                <h4 className="text-lg font-bold mb-4 text-center">Master Advanced Techniques</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ophthall-orange rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-white/90">Cataract surgery techniques</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ophthall-orange rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-white/90">Posterior segment procedures</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ophthall-orange rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-white/90">ICL & refractive surgery</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-ophthall-orange rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-white/90">Complex case handling</p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                    <div className="text-3xl font-black text-ophthall-orange mb-1">16+</div>
                    <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Videos</div>
                </div>
                <div className="text-center border-x border-gray-200">
                    <div className="text-3xl font-black text-ophthall-orange mb-1">HD</div>
                    <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Quality</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-black text-ophthall-orange mb-1">24/7</div>
                    <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Access</div>
                </div>
            </div> */}

            {/* CTA Button */}
            <div className="text-center">
                <button
                    onClick={scrollToSurgeryVideos}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-ophthall-orange to-orange-600 hover:from-orange-600 hover:to-ophthall-orange text-white text-sm md:text-base font-black uppercase tracking-widest rounded-full shadow-2xl transition-all hover:scale-105 hover:shadow-ophthall-orange/50"
                >
                    <PlayCircle className="w-6 h-6 group-hover:animate-pulse" />
                    Explore Surgery Videos
                    <span className="text-xl mb-1 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                    Start learning from expert surgeons today
                </p>
            </div>
        </div>
    );
}