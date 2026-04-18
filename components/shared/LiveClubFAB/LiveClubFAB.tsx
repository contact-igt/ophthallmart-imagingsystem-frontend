'use client';

import { Video } from 'lucide-react';

export const LiveClubFAB: React.FC = () => {
    const handleClick = () => {
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
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, start + (end - start) * ease(progress));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    return (
        <div className="fixed bottom-24 md:bottom-28 right-6 md:right-12 z-50">
            <button
                onClick={handleClick}
                className="relative bg-red-600 hover:bg-red-700 text-white p-2 md:p-3 rounded-full shadow-lg transition-colors"
                title="Programme"
            >
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <Video className="w-6 h-6" />
            </button>
        </div>
    );
};
