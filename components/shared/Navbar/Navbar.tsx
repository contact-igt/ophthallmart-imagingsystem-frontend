'use client';

import React from 'react';
import type { NavbarProps } from '@/types';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC<NavbarProps> = ({ scrollTo }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const slowScrollToVideoClub = () => {
        const target = document.getElementById('video-club');
        if (!target) return;
        const start = window.scrollY;
        const sectionBottom = target.offsetTop + target.offsetHeight;
        const end = sectionBottom - window.innerHeight + 20;
        const duration = 3500;
        let startTime: number | null = null;

        const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start + (end - start) * ease(progress));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-[100] h-20">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex justify-between items-center relative">
                <div className="flex items-center space-x-12">
                    <div className="text-[32px] font-black tracking-tighter text-ophthall-blue cursor-pointer flex items-center">
                        <Image className='w-[130px] h-auto sm:w-30 md:w-32 lg:w-40  xl:w-[150px] object-contain' src="/assets/OphthallMart_logo.PNG" width={170} height={170} alt="" />
                    </div>
                    <div className="hidden lg:flex space-x-8 text-[12px] font-black text-gray-800 uppercase tracking-widest">
                        {['Home', 'Clearview', 'Ophthall VID', 'Ophthall VID Pro', 'Accessories', 'Reviews'].map((link) => (
                            <button
                                key={link}
                                onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, '-'))}
                                className="hover:text-ophthall-orange transition-colors"
                            >
                                {link}
                            </button>
                        ))}
                        <button
                            onClick={slowScrollToVideoClub}
                            className="flex items-center gap-1.5 text-red-600 hover:text-red-700 transition-colors"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                            </span>
                           Surgical Video Club 
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block text-right">
                        <p className="text-[10px] uppercase font-bold text-gray-400">OIS Helpline</p>
                        <p className="text-sm font-black text-ophthall-blue">+91 87545 17944</p>
                    </div>
                    <button
                        onClick={() => scrollTo('demo')}
                        className="bg-ophthall-blue text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest rounded-sm hover:bg-ophthall-orange transition-all shadow-lg hidden sm:block"
                    >
                        Book a Demo
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-ophthall-blue hover:text-ophthall-orange transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-[80px] left-0 w-full bg-white shadow-2xl border-b border-gray-100 py-2 lg:hidden flex flex-col animate-in fade-in slide-in-from-top-5 duration-200">
                        {['Home', 'Clearview', 'Ophthall VID', 'Ophthall VID Pro', 'Accessories', 'Reviews'].map((link) => (
                            <button
                                key={link}
                                onClick={() => {
                                    scrollTo(link.toLowerCase().replace(/\s+/g, '-'));
                                    setIsMenuOpen(false);
                                }}
                                className="text-left px-6 py-3 hover:bg-gray-50 text-[12px] font-black text-gray-800 uppercase tracking-widest transition-colors border-b border-gray-50 last:border-none"
                            >
                                {link}
                            </button>
                        ))}
                        
                        <button
                            onClick={() => {
                                slowScrollToVideoClub();
                                setIsMenuOpen(false);
                            }}
                            className="text-left px-6 py-3 hover:bg-red-50 text-[12px] font-black text-red-600 uppercase tracking-widest transition-colors border-b border-gray-50 flex items-center gap-2"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                            </span>
                            Surgical Video Club
                        </button>

                        <div className="px-6 py-3 sm:hidden">
                            <button
                                onClick={() => {
                                    scrollTo('demo');
                                    setIsMenuOpen(false);
                                }}
                                className="w-full bg-ophthall-blue text-white py-3 text-[11px] font-black uppercase tracking-widest rounded-sm hover:bg-ophthall-orange transition-all shadow-md text-center"
                            >
                                Book a Demo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
