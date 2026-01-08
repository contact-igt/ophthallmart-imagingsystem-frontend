import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
    const scrollToDemo = () => {
        const el = document.getElementById('demo');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="bg-white pt-16 pb-32 overflow-hidden border-b border-gray-100">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fade-in">
                    <nav className="text-[10px] text-ophthall-orange mb-8 uppercase font-black tracking-widest">
                        Digital Imaging Solutions
                    </nav>
                    <h1 className="text-gray-900 mb-8">
                        <span className="block text-2xl md:text-3xl font-light text-gray-500 mb-3 tracking-tight">
                            Advanced Ophthalmic
                        </span>
                        <span className="text-6xl md:text-8xl font-black text-ophthall-blue tracking-tighter block leading-[0.9]">
                            IMAGING
                        </span>
                        <span className="text-5xl md:text-7xl font-light text-ophthall-orange tracking-tight">
                            SYSTEMS
                        </span>
                    </h1>
                    <p className="text-2xl text-gray-500 font-light leading-relaxed mb-12 max-w-xl">
                        Convert your existing slit lamp or microscope into a{' '}
                        <span className="text-ophthall-blue font-bold">High-Resolution</span> digital documentation system.
                    </p>
                    <button
                        onClick={scrollToDemo}
                        className="bg-ophthall-blue text-white px-12 py-5 font-bold rounded-sm flex items-center hover:bg-ophthall-orange transition-all shadow-2xl group"
                    >
                        Book a Demo{' '}
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
                <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
                    <div className="overflow-hidden rounded-3xl border-4 border-white bg-white">
                        <Image
                            src="/assets/Imaging_system_1.png"
                            className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                            alt="Imaging System"
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
