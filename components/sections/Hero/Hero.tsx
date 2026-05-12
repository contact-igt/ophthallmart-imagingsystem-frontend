'use client';

import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoSrc = '/assets/video.mp4';
    const scrollToDemo = () => {
        const target = document.getElementById('demo');
        if (!target) return;
        const start = window.scrollY;
        const end = target.offsetTop - 100;
        const duration = 1200;
        let startTime: number | null = null;
        const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, start + (end - start) * ease(progress));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const scrollToLiveSession = (e:any) => {
            e.preventDefault();
        const target = document.getElementById('video-club');
        if (!target) return;
        const start = window.scrollY;
        const end = target.offsetTop - 100;
        const duration = 1200;
        let startTime: number | null = null;
        const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, start + (end - start) * ease(progress));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
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
                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={scrollToDemo}
                            className="bg-ophthall-blue text-white px-12 py-5 font-bold rounded-sm flex items-center hover:bg-ophthall-orange transition-all shadow-2xl group"
                        >
                            Book a Demo{' '}
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button
                            onClick={scrollToLiveSession}
                            className="relative flex items-center gap-2 border-2 border-red-500 text-red-600 px-8 py-5 font-bold rounded-sm hover:bg-red-600 hover:text-white transition-all group"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 group-hover:bg-white"></span>
                            </span>
                            Join Ophthall Video Club Session
                        </button>
                    </div>
                </div>
                
                <div className="flex flex-col gap-6">
                    {/* Video Section */}
                    <div className=" lg:hidden relative group cursor-pointer">
                        {/* <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div> */}
                        <div className="overflow-hidden rounded-3xl border-4 border-white bg-black shadow-2xl">
                            <video
                                ref={videoRef}
                                src={videoSrc}
                                className="w-full h-auto transition-transform duration-700 ease-out"
                                onClick={handleVideoClick}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                poster=""
                            />
                            {/* Play/Pause Overlay */}
                            <div
                                onClick={handleVideoClick}
                                className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                            >
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-300 border border-white/30">
                                    {isPlaying ? (
                                        <Pause className="w-12 h-12 text-white fill-white" />
                                    ) : (
                                        <Play className="w-12 h-12 text-white fill-white" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Image Section */}
                    <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
                        <div className="overflow-hidden rounded-3xlbg-white">
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
            </div>
        </section>
    );
};

export default Hero;
