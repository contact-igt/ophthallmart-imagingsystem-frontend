'use client';

import React, { useState } from 'react';
import { Youtube, ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
    id: string;
    url: string;
    title: string;
}

const SurgeryVideos: React.FC = () => {
    const videos: Video[] = [
        {
            id: '1',
            url: 'https://www.youtube.com/embed/sEM7akfqSxs?si=7n5BwgBfAbEHr8S0',
            title: 'Cataract Surgery Steps Recorded'
        },
        {
            id: '2',
            url: 'https://www.youtube.com/embed/s8bbWNPZtrM?si=kxukgu4RiN_Kvd8z',
            title: 'Cataract Surgery Recorded'
        },
        {
            id: '3',
            url: 'https://www.youtube.com/embed/znpSqBBNjTY?si=S9TLeEmj5tan01CL',
            title: 'The most precise surgery in the world Retinal macular hole surgery '
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

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
                    {/* Video Display */}
                    <div className="aspect-video bg-gray-900 rounded-3xl shadow-2xl overflow-hidden relative group">
                        <iframe
                            key={currentIndex}
                            className="w-full h-full"
                            src={videos[currentIndex].url}
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
        </section>
    );
};

export default SurgeryVideos;
