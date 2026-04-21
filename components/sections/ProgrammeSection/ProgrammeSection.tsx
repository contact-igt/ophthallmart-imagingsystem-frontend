'use client';

import React from 'react';
import Image from 'next/image';
import { Video } from 'lucide-react';

const ProgrammeSection: React.FC = () => {
    return (
        <section id="video-club" className="py-24 bg-ophthall-bg">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-ophthall-blue/10 text-ophthall-blue px-4 py-2 rounded-full mb-4">
                        <Video className="w-4 h-4" />
                        <span className="text-[11px] font-black uppercase tracking-[0.3em]">Programme</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light text-ophthall-blue tracking-tighter">
                        Ophthall <span className="font-bold">Surgical Video Club</span>
                    </h2>
                    <p className="text-gray-500 font-light mt-3 text-base">
                        Online surgical video insights
                    </p>
                </div>

                {/* Poster Card */}
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative w-full">
                        <Image
                            src="/assets/programm/poster_2.png"
                            alt="Ophthall Surgical Video Club — Episode 1 Poster"
                            width={1000}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                    <div className="bg-ophthall-blue py-7 px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <p className="text-white/80 text-sm font-medium">
                            02 May 2026 &nbsp;|&nbsp; 08 – 09 PM
                        </p>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                                setTimeout(() => {
                                    window.dispatchEvent(new CustomEvent('selectInterestedIn', { detail: 'Join Ophthall Video Club Session' }));
                                }, 100);
                            }}
                            className="inline-flex items-center gap-2 px-10 py-4 bg-ophthall-orange hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-full shadow-lg transition-all hover:scale-105 text-sm"
                        >
                            <Video className="w-4 h-4" />
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeSection;
