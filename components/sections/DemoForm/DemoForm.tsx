'use client';

import React from 'react';

const DemoForm: React.FC = () => {
    return (
        <section id="demo" className="py-32 bg-ophthall-bg">
            <div className="max-w-[900px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                        Schedule Demo
                    </h2>
                    <h3 className="text-5xl font-light text-ophthall-blue tracking-tighter">
                        Experience <span className="font-bold text-ophthall-orange">OIS Fidelity.</span>
                    </h3>
                </div>
                <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
                    <form className="grid md:grid-cols-2 gap-8">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Clinic / hospital"
                            className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                        />
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                        />
                        <select className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all">
                            <option>Interested in VID</option>
                            <option>Interested in VID Pro</option>
                            <option>Interested in Accessories</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Microscope Model"
                            className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                        />
                        <button
                            type="submit"
                            className="md:col-span-2 bg-ophthall-blue text-white py-5 font-black uppercase tracking-widest rounded-lg shadow-xl hover:bg-ophthall-orange transition-all"
                        >
                            Schedule My Demo
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;
