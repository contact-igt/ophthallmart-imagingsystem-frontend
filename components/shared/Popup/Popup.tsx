import { X } from "lucide-react"
import { useEffect } from "react";


export const Popup: React.FC<any> = ({ isOpen=false, onClose, children }: any) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl max-w-[900px] w-full max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-12 right-6 md:top-4 md:right-4 text-gray-400 hover:text-ophthall-orange transition-colors p-2"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                {children}
            </div>
        </div>
    )
}