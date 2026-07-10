"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Play, Pause, CheckCircle, Info, Calendar, Clock, PlayCircle, Zap } from 'lucide-react';
import Image from 'next/image';

interface Props {
    videoSrc?: string;
}

const HeroInstagram: React.FC<Props> = ({
    videoSrc = '/assets/video.mp4',
}) => {
    const upcomingEpisode = {
        id: "07",
        title: "PCR Management and 4D Phaco For Cataract Surgery",
        date: "10 July 2026",
        time: "08:00 PM- 09:00 PM  IST",
        image: "/assets/programm/episode7_updated.png",
        // link: "https://youtube.com/live/Tc4TtJUNCbQ",
        // link: "https://us06web.zoom.us/meeting/register/T2UjmxErSZGQRFE_Ww33eA",
        label: "Episode 07",
        type: "upcoming"
    }
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
        const duration = 4800;
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
        const duration = 4800;
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
            className="block pt-24 pb-24 overflow-hidden relative"
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
                        <span className="font-bold">Ophthall Surgical Club</span>
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Explore surgical video discussions, gain insights from expert surgeons, and connect with ophthalmologists worldwide.
                    </p>
                </div>

                {/* Poster (left) + Video (right) Grid with equal heights */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-5 items-center justify-center">
                    {/* Left: Programme-style Upcoming Session Card */}
                    <div className="w-full max-w-4xl mx-auto lg:h-[780px] aspect-auto lg:aspect-[16/14] flex items-center justify-center">
                        <div className="group rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col bg-ophthall-blue relative w-full h-auto lg:h-full">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ophthall-blue/10 to-ophthall-blue/90 z-0"></div>

                            {/* Image Area */}
                            <div className="relative w-full aspect-video lg:aspect-auto lg:flex-1 overflow-hidden">
                                <Image
                                    src={upcomingEpisode.image}
                                    alt={upcomingEpisode.title}
                                    width={1200}
                                    height={800}
                                    className="w-full object-cover opacity-95 transition-all duration-700"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-6 md:p-6 md:pt-8 md:pb-6 flex flex-col relative z-10 bg-gradient-to-t from-ophthall-blue via-ophthall-blue/95 to-transparent">
                                <div className="absolute top-5 left-6 inline-flex items-center gap-1.5 bg-ophthall-orange/20 text-ophthall-orange px-2.5 py-1.5 rounded-md border border-ophthall-orange/30 w-fit">
                                    <span className="w-1 h-1 bg-ophthall-orange rounded-full animate-pulse"></span>
                                    <span className="text-[8px] font-black uppercase tracking-widest">Upcoming Session</span>
                                </div>

                                <div className="flex items-center justify-between mt-6 mb-6">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{upcomingEpisode.label}</h3>
                                    </div>
                                    <div className="px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2 animate-pulse border border-red-500/50">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                        Join Live
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 mb-5">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                                            <Calendar className="w-4 h-4 text-ophthall-orange" />
                                            <span className="text-[12px] font-bold text-white">{upcomingEpisode.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                                            <Clock className="w-4 h-4 text-ophthall-orange" />
                                            <span className="text-[12px] font-bold text-white">{upcomingEpisode.time}</span>
                                        </div>
                                    </div>
                                    <p className="text-xl leading-snug italic text-white/90 font-medium">
                                        "{upcomingEpisode.title}"
                                    </p>
                                </div>

                                {/* <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-auto">
                                    <button
                                        onClick={handleRegister}
                                        className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-ophthall-orange hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl transition-all duration-300 text-[13px]"
                                    >
                                        <span>Register</span>
                                        <CheckCircle className="w-4 h-4" />
                                    </button>
                                    <a
                                        href={upcomingEpisode.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00aeef] hover:bg-[#00a0e3] text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl transition-all duration-300 text-[13px]"
                                    >
                                        <span>Join Now</span>
                                        <PlayCircle className="w-4 h-4" />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Right: Instagram aspect-ratio video centered inside same-height column */}
                    {/* <div className="flex items-center md:items-start justify-center h-[480px] sm:h-[560px] md:h-[640px]">
                        <div className="relative w-full h-full flex items-center justify-center lg:justify-start lg:pl-10">
                            <div className="relative w-auto h-full  bg-black rounded-3xl overflow-hidden shadow-2xl group">
                                {hasVideo ? (
                                    <>
                                        <video
                                            ref={videoRef}
                                            src={videoSrc}
                                            className="h-full w-auto object-cover block mx-auto"
                                            onClick={handleVideoClick}
                                            onPlay={() => setIsPlaying(true)}
                                            onPause={() => setIsPlaying(false)}
                                            poster="/assets/thumbnail.png"
                                        />

                                        <div
                                            onClick={handleVideoClick}
                                            className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center cursor-pointer ${isPlaying ? 'opacity-0' : 'opacity-100'} group-hover:opacity-100`}
                                        >
                                            <div className="bg-slate-950/95 backdrop-blur-md rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-300 border border-white/30">
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
                    </div> */}
                </div>

                {/* Shared CTA Buttons below both poster and video */}
                <div className="mt-16 max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center md:px-4">
                    <button
                        onClick={handleRegister}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 sm:py-5 bg-ophthall-orange hover:bg-orange-600 text-white font-black uppercase tracking-wide rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm whitespace-nowrap hover:scale-105"
                    >
                        Ophthall Surgical Club Register Now
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    </button>
                    {/* <a
                        href="https://us06web.zoom.us/meeting/register/T2UjmxErSZGQRFE_Ww33eA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 sm:py-5 bg-[#00aeef] hover:bg-[#00a0e3] text-white font-black uppercase tracking-wide rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm whitespace-nowrap hover:scale-105"
                    >
                        Upcoming Session Join Now
                        <Play className="w-5 h-5 flex-shrink-0" />
                    </a> */}
                    <button
                        onClick={handleMoreDetails}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 sm:py-5 bg-ophthall-blue hover:bg-ophthall-blue-dark text-white font-black uppercase tracking-wide rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm whitespace-nowrap hover:scale-105"
                    >
                        More Details
                        <Info className="w-5 h-5 flex-shrink-0" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroInstagram;
