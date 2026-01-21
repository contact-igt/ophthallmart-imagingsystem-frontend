'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Youtube, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface Video {
    id: string;
    url: string;
    title: string;
}

const formSchema = Yup.object({
    name: Yup.string().required("Name required"),
    clinic: Yup.string().required("Clinic required"),
    city: Yup.string().required("City required"),
    mobile: Yup.string()
        .required("Mobile required")
        .matches(/^[0-9]{10}$/, "Invalid mobile number"),
    interested_in: Yup.string().required("Interested in required"),
    microscope_model: Yup.string().required("Microscope model required"),
});
type FormData = Yup.InferType<typeof formSchema>;

const SurgeryVideos: React.FC = () => {
    const videos: Video[] = [
        {
            id: '1',
            url: 'https://www.youtube.com/embed/sEM7akfqSxs?si=7n5BwgBfAbEHr8S0',
            title: 'Cataract Surgery Steps Recorded'
        },
        {
            id: '2',
            url: 'https://www.youtube.com/embed/cA4MZyq6Ca4?si=Jm8OGMu0t1bvk2GQ',
            title: 'Cataract Surgery Steps Recorded'
        },
        {
            id: '3',
            url: 'https://www.youtube.com/embed/u__aJe2Nkow?si=gXsze4linGq1yJ4w',
            title: 'Perfect Red Glow With Ophthall Microscope'
        },
        {
            id: '4',
            url: 'https://www.youtube.com/embed/f4Svjjk62-M?si=ExNGW4l_vni5jUJI',
            title: 'Two hand co-axial phacoemulsification for deep socket'
        },
        // {
        //     id: '6',
        //     url: 'https://www.youtube.com/embed/OQWRhs5ErwA?si=67e8oA7zJkG7DemD',
        //     title: 'Soft cataract- Topical phaco | Magnificent IOL (CARE Group) '
        // },
        // {
        //     id: '7',
        //     url: 'https://www.youtube.com/embed/OQWRhs5ErwA?si=67e8oA7zJkG7DemD',
        //     title: 'Soft cataract- Topical phaco | Magnificent IOL (CARE Group)'
        // }, 
        {
            id: '8',
            url: 'https://www.youtube.com/embed/DwrMgsrO8Ts?si=d9UOf0o8eXoPcEVU',
            title: 'soft cataract - prolapse & aspirate'
        },
        {
            id: '9',
            url: 'https://www.youtube.com/embed/1VE13qzwz2k?si=M9sj7MctaUnQKyaX',
            title: 'IFIS surprise - soft cataract : Topical phaco'
        },
        // {
        //     id: '10',
        //     url: 'https://www.youtube.com/embed/1VE13qzwz2k?si=M9sj7MctaUnQKyaX',
        //     title: 'IFIS surprise - soft cataract : Topical phaco'
        // },
        // {
        //     id: '11',
        //     url: 'https://www.youtube.com/embed/q-q1jnajZjk?si=2gcxung5rI1802F-',
        //     title: 'Cataract surgery after intravitreal injections (Topical phaco)'
        // },
        // {
        //     id: '12',
        //     url: 'https://www.youtube.com/embed/uPyVC9OUBvw?si=Bnsfy9tPRZBflY5m',
        //     title: 'Small pupil | IFIS | Iris hooks - Topical phacoemulsification'
        // },
        {
            id: '13',
            url: 'https://www.youtube.com/embed/KllIPSUCoow?si=yATTRXmrkXRDrzcw',
            title: '+4D IOL - Topical phaco in High Myope'
        },
        {
            id: '14',
            url: 'https://www.youtube.com/embed/fvK6DRIgPZc?si=JJ7v6I-G3qiL33uw',
            title: 'Sentinel bubble - Topical phaco | Int mat cataract | uncooperative patient'
        },
        {
            id: '15',
            url: 'https://www.youtube.com/embed/kAp5324W0EI?si=L59F-dtWhEHkxGrj',
            title: 'Cataract Surgery With the New Ophthall Microscope'
        },
        {
            id: '16',
            url: 'https://www.youtube.com/embed/QoPuQI1TOWU?si=bOAO5Edf4V-XZbJd',
            title: 'ICL SURGERY WITH THE OPHTHALL PRO MICROSCOPE'
        },
        {
            id: '17',
            url: 'https://www.youtube.com/embed/s8bbWNPZtrM?si=kxukgu4RiN_Kvd8z',
            title: 'Cataract Surgery Recorded'
        },
        // {
        //     id: '18',
        //     url: 'https://www.youtube.com/embed/znpSqBBNjTY?si=S9TLeEmj5tan01CL',
        //     title: 'The most precise surgery in the world Retinal macular hole surgery '
        // },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [hasShownModal, setHasShownModal] = useState(false);
    const playerRef = useRef<any>(null);
    const playbackTimerRef = useRef<any>(null);
    const playbackTimeRef = useRef(0);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: yupResolver(formSchema),
    });

    useEffect(() => {
        // Load the IFrame Player API code asynchronously
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Create YouTube player when API is ready
        (window as any).onYouTubeIframeAPIReady = () => {
            initializePlayer();
        };

        return () => {
            if (playbackTimerRef.current) {
                clearInterval(playbackTimerRef.current);
            }
        };
    }, []);

    // Reinitialize player when video changes
    useEffect(() => {
        if ((window as any).YT && (window as any).YT.Player) {
            initializePlayer();
        }

        // Reset playback time when video changes
        playbackTimeRef.current = 0;
        if (playbackTimerRef.current) {
            clearInterval(playbackTimerRef.current);
        }
    }, [currentIndex]);

    const initializePlayer = () => {
        if (playerRef.current) {
            playerRef.current.destroy();
        }

        playerRef.current = new (window as any).YT.Player(`youtube-player-${currentIndex}`, {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    };

    const onPlayerStateChange = (event: any) => {
        if (event.data === (window as any).YT.PlayerState.PLAYING && !hasShownModal) {
            // Start tracking playback time
            if (!playbackTimerRef.current) {
                playbackTimerRef.current = setInterval(() => {
                    playbackTimeRef.current += 1;

                    if (playbackTimeRef.current >= 15) {
                        setShowDemoModal(true);
                        setHasShownModal(true);
                        clearInterval(playbackTimerRef.current);
                        playbackTimerRef.current = null;
                    }
                }, 1000);
            }
        }
        else if (event.data === (window as any).YT.PlayerState.PAUSED ||
            event.data === (window as any).YT.PlayerState.ENDED) {
            // Pause the timer but keep the accumulated time
            if (playbackTimerRef.current) {
                clearInterval(playbackTimerRef.current);
                playbackTimerRef.current = null;
            }
        }
    };

    const handleCloseModal = () => {
        setShowDemoModal(false);
        setHasShownModal(true);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const onSubmit = async (data: FormData) => {
        try {
            const ipResponse = await fetch("https://api.ipify.org?format=json");
            const ipData = await ipResponse.json();

            const formData = {
                name: data?.name,
                clinic: data?.clinic,
                city: data?.city,
                mobile: data?.mobile,
                interested_in: data?.interested_in,
                microscope_model: data?.microscope_model,
                ip_address: ipData?.ip,
                utm_source: localStorage.getItem("utm_source") || ""
            };

            const params = new URLSearchParams();
            (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
                const value = formData[key];
                params.append(key, value !== null ? String(value) : '');
            });

            await handleGoogleSheetForm(params);
            window.location.href = "/thank-you";
        } catch (error) {
            console.log(error);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        await handleSubmit(onSubmit)(e);
    };

    const handleGoogleSheetForm = async (formData: URLSearchParams) => {
        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycby8nMFdnImR8Hxk1GaBJx90p66U7TaMWwq_FXQT_3PZ9nDUjdfATIXFhRw5yWtkQ7VULA/exec", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formData.toString()
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section id="surgery-videos" className="py-32 bg-white">
            <div className="max-w-[1000px] mx-auto px-12 text-center">
                <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                    Real-World Results
                </h2>
                <h3 className="text-4xl md:text-5xl font-light text-ophthall-blue tracking-tighter mb-12">
                    Surgeries Performed Using <span className="font-bold">OIS.</span>
                </h3>
                <p className="text-lg text-gray-500 font-light mb-16">
                    Witness the clinical and surgical clarity recorded directly through our imaging systems.
                </p>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Enhanced Video Counter Badge - Outside container, top-right corner */}
                    <div className="absolute top-[-38px] left-[-15px] z-20 bg-gradient-to-r from-ophthall-orange to-orange-600 text-white px-6 py-3 rounded-full font-black text-base shadow-2xl border-2 border-white/30 backdrop-blur-sm animate-fade-in transform translate-x-2 -translate-y-2">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                            <span className="tracking-wide">Video {currentIndex + 1} of {videos.length}</span>
                        </div>
                    </div>

                    {/* Video Display */}
                    <div className="aspect-video bg-gray-900 rounded-3xl shadow-2xl overflow-hidden relative group">
                        <iframe
                            id={`youtube-player-${currentIndex}`}
                            key={currentIndex}
                            className="w-full h-full"
                            src={`${videos[currentIndex].url}${videos[currentIndex].url.includes('?') ? '&' : '?'}enablejsapi=1`}
                            title={videos[currentIndex].title}
                            allowFullScreen
                        ></iframe>

                        {/* Navigation Buttons */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-ophthall-blue p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                            aria-label="Previous video"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-ophthall-blue p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                            aria-label="Next video"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all rounded-full ${index === currentIndex
                                    ? 'w-12 h-3 bg-ophthall-orange'
                                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to video ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center gap-6">
                    <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-ophthall-blue hover:text-ophthall-orange transition-colors">
                        <Youtube className="w-5 h-5 text-red-600" /> View Full OT Channel
                    </button>
                </div>
            </div>

            {/* Demo Form Modal */}
            {showDemoModal && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-200"
                    onClick={handleCloseModal}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-[900px] w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-ophthall-orange transition-colors p-2"
                            aria-label="Close modal"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Form Content */}
                        <div className="p-12">
                            <div className="text-center mb-12">
                                <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                                    Schedule Demo
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-light text-ophthall-blue tracking-tighter">
                                    Experience <span className="font-bold text-ophthall-orange">OIS Fidelity.</span>
                                </h3>
                            </div>

                            <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <input
                                        {...register("name")}
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm font-bold mt-2">{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        {...register("clinic")}
                                        type="text"
                                        placeholder="Clinic / hospital"
                                        className="w-full p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                                    />
                                    {errors.clinic && (
                                        <p className="text-red-500 text-sm font-bold mt-2">{errors.clinic.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        {...register("city")}
                                        type="text"
                                        placeholder="City"
                                        className="w-full p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                                    />
                                    {errors.city && (
                                        <p className="text-red-500 text-sm font-bold mt-2">{errors.city.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        {...register("mobile")}
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                                    />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-sm font-bold mt-2">{errors.mobile.message}</p>
                                    )}
                                </div>
                                <div>
                                    <select {...register("interested_in")} className="w-full p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all">
                                        <option>Interested in VID</option>
                                        <option>Interested in VID Pro</option>
                                        <option>Interested in Slit Lamp</option>
                                        <option>Interested in Accessories</option>
                                    </select>
                                    {errors.interested_in && (
                                        <p className="text-red-500 text-sm font-bold mt-2">{errors.interested_in.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        {...register("microscope_model")}
                                        type="text"
                                        placeholder="Microscope Model"
                                        className="w-full p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                                    />
                                    {errors.microscope_model && (
                                        <p className="text-red-500 text-sm font-bold mt-2">{errors.microscope_model.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="md:col-span-2 bg-ophthall-blue text-white py-5 font-black uppercase tracking-widest rounded-lg shadow-xl hover:bg-ophthall-orange transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Schedule My Demo"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SurgeryVideos;
