import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react";


export const ScrollToTop: React.FC<any> = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleVisiblity = () => {
            setIsVisible(window.scrollY > 200);
        }
        window.addEventListener('scroll', handleVisiblity);
        return () => {
            window.removeEventListener('scroll', handleVisiblity);
        }
    }, [])
    if (!isVisible) return null;
    return (
        <div className="fixed bottom-10 md:bottom-12 right-6 md:right-12 z-50">
            <button onClick={handleScrollToTop} className="bg-ophthall-orange text-white p-2 md:p-3 rounded-full hover:bg-ophthall-orange/80 transition-colors">
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    )
}