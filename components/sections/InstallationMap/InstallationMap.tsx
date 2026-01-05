'use client';

import React from 'react';
import Image from 'next/image';

const InstallationMap: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="relative w-full max-w-5xl mx-auto">
                    {/* Map Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Powering Eye Care with 550+ Installations Nationwide
                        </h2>
                    </div>
                    {/* Map Image Container */}
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                        <Image
                            src="/assets/india_map.png"
                            alt="India Installation Map"
                            width={900}
                            height={675}
                            className="w-full h-full object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallationMap;
