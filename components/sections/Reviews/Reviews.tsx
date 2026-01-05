import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const Reviews: React.FC = () => {
    const reviews = [
        {
            name: "Dr. Aswini Kumar Behera",
            txt: "ClearView is the perfect addition to my slit lamp. The image clarity is excellent and great for patient counselling."
        },
        {
            name: "Naitrika Super Specialty",
            txt: "Ophthall Vid has transformed how we record surgeries. Simple, reliable and very affordable."
        },
        {
            name: "Surgical Director",
            txt: "Vid Pro gives near-cinematic quality. Great for teaching and conference presentations."
        }
    ];

    return (
        <section id="reviews" className="py-32 bg-ophthall-blue text-white">
            <div className="max-w-[1440px] mx-auto px-12">
                <h3 className="text-4xl font-light mb-16 tracking-tighter">
                    Doctor <span className="font-bold text-ophthall-orange">Endorsements</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="p-10 bg-white/5 rounded-2xl border border-white/10 hover:border-ophthall-orange transition-all"
                        >
                            <div className="flex gap-1 mb-8">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <Star key={s} className="w-4 h-4 text-ophthall-orange fill-ophthall-orange" />
                                ))}
                            </div>
                            <p className="text-lg italic font-light mb-8 leading-relaxed">&quot;{r.txt}&quot;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10"><Image width={50} height={50} src={"/assets/doctor.jpg"} alt="" className='rounded-full w-full object-cover h-full'/></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    {r.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
