"use client";

import { Video, Calendar, Clock, ArrowRight, PlayCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

// Custom Arrow Components for the Carousel
const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    const isDisabled = className?.includes("slick-disabled");
    return (
        <button
            className={`${className} absolute -right-2 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-ophthall-blue text-white shadow-2xl rounded-full p-4 md:p-8 hover:bg-slate-800 transition-all group border border-white/20 flex items-center justify-center ${isDisabled ? 'opacity-10 cursor-not-allowed grayscale' : 'opacity-100 active:scale-90'}`}
            style={{ ...style, display: "flex" }}
            onClick={onClick}
            disabled={isDisabled}
            aria-label="Next Slide"
        >
            <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform" />
        </button>
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    const isDisabled = className?.includes("slick-disabled");
    return (
        <button
            className={`${className} absolute -left-2 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-ophthall-blue text-white shadow-2xl rounded-full p-4 md:p-8 hover:bg-slate-800 transition-all group border border-white/20 flex items-center justify-center ${isDisabled ? 'opacity-10 cursor-not-allowed grayscale' : 'opacity-100 active:scale-90'}`}
            style={{ ...style, display: "flex" }}
            onClick={onClick}
            disabled={isDisabled}
            aria-label="Previous Slide"
        >
            <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform" />
        </button>
    );
};

const episodes = [
    {
        id: "01",
        title: "Topical Phaco in Tough Situations",
        date: "18 Apr 2026",
        image: "/assets/programm/poster.jpeg",
        link: "https://youtu.be/uilYic57Muc?si=aaIjrkZnQ7duIvKz",
        label: "Episode 01",
        type: "previous"
    },
    {
        id: "02",
        title: "Direct Chop in Phaco – It's Advantage in My Bouquet of Cataracts.",
        date: "02 May 2026",
        image: "/assets/programm/poster_2.png",
        link: "https://youtube.com/live/SRQkIHVtLZM",
        label: "Episode 02",
        type: "previous"
    },
    {
        id: "03",
        title: "Phaco Emulsification in Small Pupil using a B Hex Ring",
        date: "16 May 2026",
        time: "08:00 PM IST",
        image: "/assets/programm/episode3.png",
        link: "https://us06web.zoom.us/j/6425854376?pwd=aK9Dpp2U1l8aP3HyQR9kW5okvrplC1.1&omn=87665774836",
        label: "Episode 03",
        type: "upcoming"
    }
];

const ProgrammeSection: React.FC = () => {
    const [initialSlideValue, setInitialSlideValue] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        setInitialSlideValue(isMobile ? episodes.length - 1 : episodes.length - 2);
        setHasMounted(true);
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: initialSlideValue,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: false,
        pauseOnHover: true,
        cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ],
        appendDots: (dots: any) => (
            <div style={{ bottom: "-40px" }}>
                <ul className="flex justify-center gap-1 m-0 list-none p-0"> {dots} </ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-ophthall-orange transition-all duration-300 dot-indicator"></div>
        )
    };

    return (
        <section id="video-club" className="py-24 bg-slate-50/50 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-4 border border-red-100 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Programme</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light text-ophthall-blue tracking-tighter">
                        Ophthall <span className="font-bold">Surgical Video Club</span>
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative px-4 md:px-0">
                    {hasMounted && (
                        <Slider key={`slider-${initialSlideValue}`} {...settings} className="episode-slider pb-12">
                            {episodes.map((episode) => (
                                <div key={episode.id} className="px-3 h-full outline-none">
                                    <div className={`group h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col ${episode.type === 'upcoming' ? 'bg-ophthall-blue border-white/10 shadow-ophthall-blue/20' : 'bg-[#0F172A] border-white/5'}`}>
                                        {/* Image Area */}
                                        <div className="relative w-full overflow-hidden aspect-[23.1/13]">
                                            {episode.type === 'upcoming' ? (
                                                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10 bg-ophthall-orange text-white px-4 py-1.5 rounded-full text-[6px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                                    Upcoming Session
                                                </div>
                                            ) : (
                                                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[6px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 shadow-sm">
                                                    Previous Session
                                                </div>
                                            )}

                                            <Image
                                                src={episode.image}
                                                alt={episode.title}
                                                fill
                                                className="object-contain opacity-90 transition-all duration-700 group-hover:opacity-100"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />

                                               {episode.type === 'previous' && (
                                                   <a
                                                       target='_blank'
                                                       rel='noopener noreferrer'
                                                       href={episode.link}
                                                       className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10"
                                                   >
                                                       <div className="bg-white/20 backdrop-blur-md rounded-full p-2.5 md:p-4 transform scale-75 group-hover:scale-100 transition-all duration-500 border border-white/30">
                                                           <PlayCircle className="w-8 h-8 md:w-12 md:h-12 text-white" />
                                                       </div>
                                                   </a>
                                               )}
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-6 md:p-8 flex-1 flex flex-col">
                                            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight leading-tight flex-1 min-w-[120px]">{episode.label}</h3>
                                                {episode.type === 'upcoming' ? (
                                                    <div className="shrink-0 px-3 py-1.5 bg-ophthall-orange text-white rounded-full text-[9px] font-black uppercase shadow-lg flex items-center gap-1.5">
                                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                                        Join Live
                                                    </div>
                                                ) : (
                                                    <div className="shrink-0 flex items-center gap-2 text-[10px] md:text-[11px] font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                        <Calendar className="w-3.5 h-3.5 text-ophthall-orange" />
                                                        {episode.date}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {episode.type === 'upcoming' && (
                                                <div className="flex flex-wrap items-center gap-2 mb-6">
                                                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-3.5 py-2 md:py-2.5 rounded-xl border border-white/10">
                                                        <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-ophthall-orange" />
                                                        <span className="text-[11px] md:text-[12px] font-bold text-white">{episode.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-3.5 py-2 md:py-2.5 rounded-xl border border-white/10">
                                                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-ophthall-orange" />
                                                        <span className="text-[11px] md:text-[12px] font-bold text-white">{episode.time}</span>
                                                    </div>
                                                </div>
                                            )}

                                            <p className={`text-sm mb-6 md:mb-10 leading-relaxed italic line-clamp-2 flex-1 ${episode.type === 'upcoming' ? 'text-slate-300' : 'text-slate-400'}`}>
                                                "{episode.title}"
                                            </p>

                                            <div className="mt-auto">
                                                {episode.type === 'upcoming' ? (
                                                <div className='flex flex-col md:flex-row items-center gap-3'>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                                                            setTimeout(() => {
                                                                window.dispatchEvent(new CustomEvent('selectInterestedIn', { detail: 'Join Ophthall Video Club Session' }));
                                                            }, 100);
                                                        }}
                                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-ophthall-orange hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300 text-[12px]"
                                                    >
                                                        <span>Register</span>
                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                    </button>
                                                    {/* <a
                                                    href={episode.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00a0e3] hover:bg-[#00a0e3d8] text-white font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300 text-[11px]"
                                                >
                                                    <span>Join Now</span>
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a> */}
                                                </div>
                                            ) : (
                                                <a
                                                    href={episode.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full mt-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0F172A] hover:bg-ophthall-orange hover:text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 text-[12px] shadow-lg transform active:scale-[0.98]"
                                                >
                                                    <Video className="w-4 h-4" />
                                                    Watch Recording
                                                </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-400 text-[11px] uppercase tracking-widest font-medium opacity-60">
                        * Contact our team to submit your videos for feature
                    </p>
                </div>
            </div>

            <style jsx global>{`
                .episode-slider .slick-prev,
                .episode-slider .slick-next {
                    background-color: #0F172A !important;
                    width: 70px !important;
                    height: 70px !important;
                    border-radius: 50% !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    transition: all 0.3s ease !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
                }
                .episode-slider .slick-prev:hover,
                .episode-slider .slick-next:hover {
                    background-color: #1e293b !important;
                    transform: translateY(-50%) scale(1.05) !important;
                }
                .episode-slider .slick-disabled {
                    opacity: 0.4 !important;
                    cursor: not-allowed !important;
                    pointer-events: none !important;
                    filter: grayscale(1) !important;
                    box-shadow: none !important;
                }
                .episode-slider .slick-dots li {
                    margin: 0 2px !important;
                    width: 12px !important;
                    height: 12px !important;
                    transition: all 0.3s ease;
                }
                .episode-slider .slick-dots li.slick-active {
                    width: 32px !important;
                }
                .episode-slider .slick-dots li.slick-active .dot-indicator {
                    background-color: #f58220 !important;
                    width: 30px;
                }
                .episode-slider .slick-list {
                    overflow: visible;
                }
                .episode-slider .slick-prev:before, 
                .episode-slider .slick-next:before {
                    display: none;
                }
                @media (max-width: 768px) {
                    .episode-slider .slick-list {
                        overflow: hidden;
                    }
                    .episode-slider .slick-prev,
                    .episode-slider .slick-next {
                        width: 44px !important;
                        height: 44px !important;
                    }
                    .episode-slider .slick-dots {
                        bottom: -50px !important;
                    }
                }
                .episode-slider .slick-track {
                    display: flex !important;
                    gap: 0;
                }
                .episode-slider .slick-slide {
                    height: inherit !important;
                    display: flex !important;
                }
                .episode-slider .slick-slide > div {
                    width: 100%;
                    display: flex;
                }
            `}</style>
        </section>
    );
};

export default ProgrammeSection;
