"use client";
import { Video, Calendar, Clock, ArrowRight, PlayCircle, ExternalLink, ChevronLeft, ChevronRight, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Slider from "react-slick";
import { useEffect, useState } from 'react';

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
        link: "https://www.youtube.com/live/a8SlQuddt1I",
        label: "Episode 03",
        type: "previous"
    },
    {
        id: "04",
        title: "CCC in Difficult Situations",
        date: "29 May 2026",
        time: "08:00 PM IST",
        image: "/assets/programm/episode4.png",
        link:"https://www.youtube.com/live/NNi363JX24g?si=AjPYJW2vhnJKrR5J",
        label: "Episode 04",
        type: "previous"
    },
      {
        id: "05",
        title: "Nucleus Dis - Assembly Techniques",
        date: "12 June 2026",
        time: "08:00 PM- 10:00 PM  IST",
        image: "/assets/programm/episode5.png",
        link: "https://youtube.com/live/RxaYgLMsRk8",
        // link: "https://us06web.zoom.us/meeting/register/T2UjmxErSZGQRFE_Ww33eA",
        label: "Episode 05",
        type: "previous"
    },
          {
        id: "06",
        title: "Phaco in Mature & Hypermature Cataracts: From White to Bright",
        date: "26 June 2026",
        time: "08:00 PM- 10:00 PM  IST",
        image: "/assets/programm/episode6.png",
        link: "https://youtube.com/live/Tc4TtJUNCbQ",
        // link: "https://us06web.zoom.us/meeting/register/T2UjmxErSZGQRFE_Ww33eA",
        label: "Episode 06",
        type: "previous"
    },
     {
        id: "07",
        title: "PCR Management and 4D Phaco For Cataract Surgery",
        date: "10 July 2026",
        time: "08:00 PM- 09:00 PM  IST",
        image: "/assets/programm/episode7_updated.png",
        link: "https://youtube.com/live/cTLmehj434c",
        // link: "https://us06web.zoom.us/meeting/register/T2UjmxErSZGQRFE_Ww33eA",
        label: "Episode 07",
        type: "previous"
    }
    //   {
    //     id: "07",
    //     title: "PCR Management and 4D Phaco For Cataract Surgery",
    //     date: "10 July 2026",
    //     time: "08:00 PM- 09:00 PM  IST",
    //     image: "/assets/programm/episode7_updated.png",
    //     // link: "https://youtube.com/live/cTLmehj434c",
    //     // link: "https://us06web.zoom.us/meeting/register/T2UjmxErSZGQRFE_Ww33eA",
    //     label: "Episode 07",
    //     type: "upcoming"
    // }
];

const ProgrammeSection: React.FC = () => {
    const [hasMounted, setHasMounted] = useState(false);
    const [sliderRef, setSliderRef] = useState<any>(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setHasMounted(true);
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const upcomingEpisode = episodes.find(e => e.type === 'upcoming');
    const previousEpisodes = episodes.filter(e => e.type === 'previous');

    const getCurrentSlidesToShow = () => {
        if (windowWidth >= 1024) return 3;
        if (windowWidth >= 768) return 2;
        return 1;
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

    const currentSlidesToShow = getCurrentSlidesToShow();
    console.log(currentSlidesToShow, '====');
    console.log(currentSlide, "==");
    console.log(previousEpisodes.length, "length");

    // Logic for disabling left button
    const isLeftDisabled = () => {
        return previousEpisodes.length <= currentSlidesToShow;
    };

    // Logic for disabling right button
    const isRightDisabled = () => {
        return previousEpisodes.length <= currentSlidesToShow;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
        afterChange: (index: number) => setCurrentSlide(index),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        appendDots: (dots: any) => (
            <div style={{ bottom: "-30px" }}>
                <ul className="flex justify-center gap-1 m-0 list-none p-0"> {dots} </ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div className="w-2 h-2 rounded-full bg-slate-300 hover:bg-ophthall-orange transition-all duration-300 dot-indicator"></div>
        )
    };

    return (
        <section id="video-club" className="py-24 bg-slate-50/50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* Top Section: Centered Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full mb-6 border border-red-100 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Programme</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ophthall-blue tracking-tighter leading-tight">
                        Ophthall <span className="font-bold">Surgical Video Club</span>
                    </h2>
                </div>

                {/* Upcoming Session Section */}
                {upcomingEpisode && <div className="mb-20">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2">
                            <Zap className="w-6 h-6 text-ophthall-orange" />
                            <h3 className="text-lg md:text-xl font-bold text-ophthall-blue uppercase tracking-tight">Upcoming Session</h3>
                            <Zap className="w-6 h-6 text-ophthall-orange" />
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {upcomingEpisode && (
                            <div className="group rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col bg-ophthall-blue relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ophthall-blue/10 to-ophthall-blue/90 z-0"></div>
                                <div className="relative w-full aspect-[23.1/13] overflow-hidden">
                                    <Image
                                        src={upcomingEpisode.image}
                                        alt={upcomingEpisode.title}
                                        fill
                                        className="object-cover opacity-95 transition-all duration-1000"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                    />
                                </div>

                                <div className="p-7 md:p-8 flex flex-col relative z-10 bg-gradient-to-t from-ophthall-blue via-ophthall-blue/95 to-transparent">
                                    <div className="absolute top-5 left-8 inline-flex items-center gap-1.5 bg-ophthall-orange/20 text-ophthall-orange px-2.5 py-1.5 rounded-md border border-ophthall-orange/30 w-fit">
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

                                    <div className="flex flex-col gap-6 mb-8">
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
                                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-ophthall-orange hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl transition-all duration-300 text-[13px] group/btn"
                                        >
                                            <span>Register</span>
                                            <CheckCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                        </button>
                                        <a
                                            href={upcomingEpisode.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#00aeef] hover:bg-[#00a0e3] text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl transition-all duration-300 text-[13px] group/btn"
                                        >
                                            <span>Join Now</span>
                                            <PlayCircle className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </div> */}
                                     <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-auto">
                                        <button
                                            onClick={handleRegister}
                                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-ophthall-orange hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl transition-all duration-300 text-[13px] group/btn"
                                        >
                                            <span>Register</span>
                                            <CheckCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                        </button>
                                        {/* <a
                                            href={upcomingEpisode.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#00aeef] hover:bg-[#00a0e3] text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl transition-all duration-300 text-[13px] group/btn"
                                        >
                                            <span>Join Now</span>
                                            <PlayCircle className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>}

                {/* Previous Sessions Section */}
                <div className="overflow-hidden">
                    {/* Previous Sessions Header with Navigation */}
                    <div className={`flex items-center ${previousEpisodes.length > currentSlidesToShow ? 'justify-between' : 'justify-center'} mb-8 border-b border-slate-200 pb-4 relative`}>
                        <div className="flex items-center gap-3">
                            <Video className="w-5 h-5 text-ophthall-orange" />
                            <h3 className="text-xl font-bold text-ophthall-blue uppercase tracking-tight">Previous Sessions</h3>
                        </div>
                        <div className={`flex gap-2 ${previousEpisodes.length > currentSlidesToShow ? '' : 'hidden'}`}>
                            <button
                                onClick={() => sliderRef?.slickPrev()}
                                disabled={isLeftDisabled()}
                                className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 shadow-sm
                                    ${isLeftDisabled() 
                                        ? 'opacity-30 cursor-not-allowed text-slate-400' 
                                        : 'text-ophthall-blue hover:bg-ophthall-orange hover:text-white hover:border-ophthall-orange active:scale-90'}`}
                                aria-label="Previous Episodes"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => sliderRef?.slickNext()}
                                disabled={isRightDisabled()}
                                className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 shadow-sm
                                    ${isRightDisabled() 
                                        ? 'opacity-30 cursor-not-allowed text-slate-400' 
                                        : 'text-ophthall-blue hover:bg-ophthall-orange hover:text-white hover:border-ophthall-orange active:scale-90'}`}
                                aria-label="Next Episodes"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Slider for Previous Sessions */}
                    <div className="relative pb-10">
                        {hasMounted && (
                            <Slider ref={setSliderRef} {...settings} className="episode-slider">
                                    {previousEpisodes.map((episode) => (
                                        <div key={episode.id} className="px-2 h-full outline-none">
                                            <div className="group h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col bg-[#0F172A]">
                                                {/* Image Area */}
                                                <div className="relative w-full overflow-hidden aspect-[16/9]">
                                                    <Image
                                                        src={episode.image}
                                                        alt={episode.title}
                                                        fill
                                                        className="object-contain opacity-90 transition-all duration-700 group-hover:opacity-100"
                                                        sizes="(max-width: 768px) 100vw, 25vw"
                                                    />
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href={episode.link}
                                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10"
                                                    >
                                                        <div className="bg-white/20 backdrop-blur-md rounded-full p-3 transform scale-75 group-hover:scale-100 transition-all duration-500 border border-white/30">
                                                            <PlayCircle className="w-8 h-8 text-white" />
                                                        </div>
                                                    </a>
                                                </div>

                                                {/* Content Area */}
                                                <div className="p-5 flex-1 flex flex-col">
                                                    <div className="flex items-center justify-between gap-2 mb-4">
                                                        <h3 className="text-sm font-bold text-white uppercase tracking-tight leading-tight">{episode.label}</h3>
                                                        <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                                                            <Calendar className="w-3 h-3 text-ophthall-orange" />
                                                            {episode.date}
                                                        </div>
                                                    </div>
                                                    <p className="text-[12px] leading-relaxed italic text-slate-400 mb-5 line-clamp-2">
                                                        "{episode.title}"
                                                    </p>
                                                    <div className="mt-auto">
                                                        <a
                                                            href={episode.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-4 bg-white text-[#0F172A] hover:bg-ophthall-orange hover:text-white font-black uppercase tracking-widest rounded-xl transition-all duration-300 text-[10px] shadow-md transform active:scale-[0.98]"
                                                        >
                                                            <Video className="w-3.5 h-3.5" />
                                                            Watch recording
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                    ))}
                                </Slider>
                            )}
                        </div>
                    </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-medium opacity-50">
                        * Contact our team to submit your videos for feature
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeSection;
