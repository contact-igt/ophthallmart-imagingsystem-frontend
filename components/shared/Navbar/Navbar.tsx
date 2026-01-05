'use client';

import React from 'react';
import type { NavbarProps } from '@/types';

const Navbar: React.FC<NavbarProps> = ({ scrollTo }) => {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-[100] h-20">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex justify-between items-center">
                <div className="flex items-center space-x-12">
                    <div className="text-[32px] font-black tracking-tighter text-ophthall-blue cursor-pointer flex items-center">
                        Ophthall<span className="text-ophthall-orange">.</span>
                    </div>
                    <div className="hidden lg:flex space-x-8 text-[12px] font-black text-gray-800 uppercase tracking-widest">
                        {['Home', 'Ophthall VID', 'Ophthall VID Pro', 'Accessories', 'Reviews'].map((link) => (
                            <button
                                key={link}
                                onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, '-'))}
                                className="hover:text-ophthall-orange transition-colors"
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="hidden md:block text-right">
                        <p className="text-[10px] uppercase font-bold text-gray-400">OIS Helpline</p>
                        <p className="text-sm font-black text-ophthall-blue">+91 87545 17944</p>
                    </div>
                    <button
                        onClick={() => scrollTo('demo')}
                        className="bg-ophthall-blue text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest rounded-sm hover:bg-ophthall-orange transition-all shadow-lg"
                    >
                        Book a Demo
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
