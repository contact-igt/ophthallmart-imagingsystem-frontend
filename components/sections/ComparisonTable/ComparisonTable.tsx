import React from 'react';

const ComparisonTable: React.FC = () => {
    const specs = [
        { f: "PRIMARY USE", v: "Anterior segment recording", vp: "Anterior & Posterior segment" },
        { f: "COMPATIBILITY", v: "Most Microscopes", vp: "Most Microscopes" },
        { f: "RESOLUTION", v: "30FPS / 1080P", vp: "60FPS Smoother Motion / 1080P" },
        { f: "HDR Capability", v: "NO", vp: "Yes – HDR for better highlight/shadow detail Superior, better detail in dim lighting" },
        { f: "Sensor Size", v: "Sony HD CMOS", vp: "Sony Exmor HDR" },
        { f: "Recording Medium", v: "MICRO SD Card", vp: "USB Flash Drive External Recording with Advanced Features" },
        { f: "Beam Splitter", v: "Ophthall Make 80:20 Beam Splitter (AR Coated Lens)", vp: "Ophthall Make 80:20 Beam Splitter (AR Coated Lens)" },
    ];

    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-12 text-center mb-20">
                <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                    Fidelity Comparison
                </h2>
                <h3 className="text-5xl font-light text-ophthall-blue tracking-tighter">
                    Model <span className="font-bold">Specifications</span>
                </h3>
            </div>
            <div className="max-w-[1440px] mx-auto px-12">
                <div className="overflow-x-auto rounded-3xl shadow-2xl bg-white border border-gray-100">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-ophthall-blue text-white">
                                <th className="p-8 font-black uppercase text-[10px] tracking-[0.2em]">Feature</th>
                                <th className="p-8 font-black uppercase text-[10px] tracking-[0.2em] text-ophthall-orange">
                                    Ophthall VID
                                </th>
                                <th className="p-8 font-black uppercase text-[10px] tracking-[0.2em]">
                                    Ophthall VID Pro
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {specs.map((row, i) => (
                                <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-8 text-[11px] font-black uppercase text-gray-400 tracking-widest">
                                        {row.f}
                                    </td>
                                    <td className="p-8 text-sm font-bold text-gray-700">{row.v}</td>
                                    <td className="p-8 text-sm font-black text-ophthall-blue">{row.vp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
