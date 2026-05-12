"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Play, Pause, CheckCircle, Info } from 'lucide-react';

interface Props {
    videoSrc?: string;
}

const HeroInstagram: React.FC<Props> = ({
    videoSrc = '/assets/video.mp4',
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasVideo, setHasVideo] = useState(false);
    const [mounted, setMounted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setMounted(true);
        // Check if video exists
        (async () => {
            try {
                const res = await fetch(videoSrc, { method: 'HEAD' });
                setHasVideo(res.ok);
            } catch (err) {
                setHasVideo(false);
            }
        })();
    }, [videoSrc]);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoClick = () => {
        handlePlayPause();
    };

    const handleRegister = (e: React.MouseEvent) => {
        e.preventDefault();
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
        setTimeout(() => {
            window.dispatchEvent(new CustomEvent('selectInterestedIn', { detail: 'Join Ophthall Video Club Session' }));
        }, 100);
    };

    const handleMoreDetails = (e: React.MouseEvent) => {
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

    if (!mounted) return null;

    return (
        <section 
            id="hero-instagram" 
            className="hidden md:block py-24 overflow-hidden relative"
            style={{
                backgroundImage: 'url(/assets/eyebanner.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Centered Title Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-ophthall-blue px-3 py-1.5 rounded-full mb-4 border border-blue-100">
                        <span className="w-2 h-2 bg-ophthall-blue rounded-full"></span>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Surgical Video Discussions</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tighter leading-tight mb-4">
                        Join <span className="font-bold">Ophthall Video Club</span>
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Explore surgical video discussions, gain insights from expert surgeons, and connect with ophthalmologists worldwide.
                    </p>
                </div>

                {/* Video and Content Grid */}
                <div className="flex justify-start ml-10">
                    <div className="w-full max-w-[480px]">
                        {/* Video Container */}
                        <div className="flex flex-col gap-6">
                        {/* Instagram Video Ratio Container (9:16) */}
                        <div className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl group">
                            {hasVideo ? (
                                <>
                                    <video
                                        ref={videoRef}
                                        src={videoSrc}
                                        className="w-full h-full object-cover"
                                        onClick={handleVideoClick}
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                        poster="/assets/thumbnail.jpg"
                                    />
                                    {/* Play/Pause Overlay */}
                                    <div
                                        onClick={handleVideoClick}
                                        className={`absolute inset-0 bg-black/20  transition-opacity duration-300 flex items-center justify-center cursor-pointer ${isPlaying  ? 'opacity-0' : 'opacity-100'} group-hover:opacity-100`}
                                    >
                                        <div className="bg-white/20 backdrop-blur-md rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-300 border border-white/30">
                                            {isPlaying ? (
                                                <Pause className="w-12 h-12 text-white fill-white" />
                                            ) : (
                                                <Play className="w-12 h-12 text-white fill-white" />
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                    <div className="text-center">
                                        <Play className="w-16 h-16 text-white/30 mx-auto mb-4" />
                                        <p className="text-white/50 text-sm">Video not available</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        </div>

                        {/* CTA Buttons Below Video */}
                        <div className="flex flex-col gap-3 mt-3">
                        <button
                            onClick={handleRegister}
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-ophthall-orange hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300 text-sm group/btn"
                        >
                            Register Now
                            <CheckCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <a
                            href="https://us06web.zoom.us/meeting/register/T2UjmxErSZGQRFE_Ww33eA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00aeef] hover:bg-[#00a0e3] text-white font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300 text-sm group/btn"
                        >
                            Join Now
                            <Play className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                        <button
                            onClick={handleMoreDetails}
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-ophthall-blue hover:bg-ophthall-blue-dark text-white font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300 text-sm group/btn"
                        >
                            More Details
                            <Info className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroInstagram;
