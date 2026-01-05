import React from 'react';
import { Info } from 'lucide-react';
import Image from 'next/image';

const Accessories: React.FC = () => {
    const accessories = [
        {
            t: "Surgical Medical Recorder",
            img:'/assets/SurgicalRecorder.png',
            d: "Supports multiple external storage options, including external hard drives up to 2TB, SD cards up to 512GB, and USB pen drives up to 512GB."
        },
        {
            t: "Battery with Charger",
            img:'/assets/batteryWithCharger.png',
            d: "Rechargeable battery pack with dedicated charger for portable operation and uninterrupted recording."
        },
        {
            t: "Full HD Monitor",
            img:'/assets/monitor.jpg',
            d: "Professional-grade Full HD display for real-time viewing and surgical documentation."
        },
        {
            t: "Beam Splitter",
            img:'/assets/BeamSpliter.png',
            d: "High-quality optics for dual-viewing and recording compatibility."
        },
        {
            t: "64 GB USB Drive",
            img:'/assets/USB.jpg',
            d: "High-speed USB storage for quick data transfer and backup of surgical recordings."
        },
        {
            t: "32GB Memory Card",
            img:'/assets/Memory_Card.jpg',
            d: "High-capacity SD memory card for extended recording sessions and reliable storage."
        }
    ];

    return (
        <section id="accessories" className="py-32 bg-white">
            <div className="max-w-[1440px] mx-auto px-12">
                <div className="mb-20">
                    <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                        Enhanced Capabilities
                    </h2>
                    <h3 className="text-5xl font-light text-ophthall-blue tracking-tighter">
                        Optional <span className="font-bold text-ophthall-orange">Accessories.</span>
                    </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {accessories.map((item, i) => (
                        <div    
                            key={i}
                            className="bg-ophthall-bg rounded-2xl p-10 border border-transparent hover:border-orange-100 hover:shadow-xl transition-all"
                        >
                            <div className="w-full aspect-square bg-white rounded-xl mb-8 flex items-center justify-center overflow-hidden">
                                <Image width={200} height={200} src={item.img} alt={item.t}/>
                            </div>
                            <h4 className="text-xl font-black text-ophthall-blue mb-4">{item.t}</h4>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accessories;
