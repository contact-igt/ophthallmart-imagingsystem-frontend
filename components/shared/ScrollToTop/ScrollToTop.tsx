import { ArrowUp } from "lucide-react"

export const ScrollToTop: React.FC<any> = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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