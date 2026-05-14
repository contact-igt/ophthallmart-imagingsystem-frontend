import { ArrowUp } from "lucide-react"

export const ScrollToTop: React.FC<any> = () => {
    const handleScrollToTop = () => {
        const start = window.scrollY;
        const end = 0;
        const duration = 3800;
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
        <div className="fixed bottom-10 md:bottom-12 right-6 md:right-12 z-50">
            <button
                onClick={handleScrollToTop}
                className="bg-ophthall-orange text-white p-2 md:p-3 rounded-full hover:bg-ophthall-orange/80 transition-colors shadow-lg"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    );
}