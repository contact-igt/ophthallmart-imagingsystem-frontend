import { Video, Calendar, Clock, ArrowRight, PlayCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const ProgrammeSection: React.FC = () => {
    return (
        <section id="video-club" className="py-24 bg-slate-50/50">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-4 border border-red-100 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Programme</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light text-ophthall-blue tracking-tighter">
                        Ophthall <span className="font-bold">Surgical Video Club</span>
                    </h2>
                </div>

                {/* Posters Grid */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 items-start">
                    {/* Previous Episode Card - MUTED DARK THEME */}
                    <div className="group w-full bg-[#0F172A] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                        {/* Dominant Image Area - NATURAL HEIGHT */}
                        <div className="relative w-full overflow-hidden">
                            <div className="absolute top-5 left-5 z-10 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">
                                Previous Session
                            </div>
                            <Image
                                src="/assets/programm/poster.jpeg"
                                alt="Previous Surgical Video Club Poster"
                                width={800}
                                height={600}
                                className="w-full min-h-[280px] h-auto md:h-[360px] opacity-90 transition-opacity duration-700 block"
                                priority
                            />
                            <a target='_blank' rel='noopener noreferrer' href="https://youtu.be/uilYic57Muc?si=aaIjrkZnQ7duIvKz"  className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <PlayCircle className="w-16 h-16 text-white/80 opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100" />
                            </a>
                        </div>

                        {/* Text Content */}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Episode 01</h3>
                                <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                                    <Calendar className="w-3.5 h-3.5" />
                                    18 Apr 2026
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm mb-10 leading-relaxed line-clamp-1 italic">
                                Topical Phaco in Tough Situations
                            </p>

                            <a
                                href="https://youtu.be/uilYic57Muc?si=aaIjrkZnQ7duIvKz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0F172A] hover:bg-slate-100 font-black uppercase tracking-widest rounded-2xl transition-all duration-300 text-[12px] shadow-lg"
                            >
                                <Video className="w-4 h-4" />
                                Watch Recording
                            </a>
                        </div>
                    </div>

                    {/* Upcoming Episode Card - THEMED & HIGHLIGHTED */}
                    <div className="group w-full bg-ophthall-blue rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 relative flex flex-col">
                        {/* Dominant Image Area - NATURAL HEIGHT */}
                        <div className="relative w-full overflow-hidden">
                            <div className="absolute top-5 left-5 z-10 bg-ophthall-orange text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                Upcoming Session
                            </div>
                            <Image
                                src="/assets/programm/poster_2.png"
                                alt="Upcoming Surgical Video Club Poster"
                                width={800}
                                height={600}
                                className="w-full min-h-[280px] h-auto md:h-[360px] transition-opacity duration-700 block"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Highlighted Date/Time Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex-1 flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-ophthall-orange" />
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-bold text-white/60 uppercase tracking-wider">Date</span>
                                        <span className="text-xs font-bold text-white">02 May 2026</span>
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex-1 flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-ophthall-orange" />
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-bold text-white/60 uppercase tracking-wider">Time</span>
                                        <span className="text-xs font-bold text-white">08:00 PM IST</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Episode 02</h3>
                                <div className="flex items-center gap-2 px-3 py-1 bg-ophthall-orange text-white rounded-full text-[10px] font-black uppercase shadow-lg">
                                    Join Live
                                </div>
                            </div>

                            <p className="text-slate-300 text-sm mb-10 leading-relaxed line-clamp-1 italic">
                                Direct Chop in Phaco – It’s Advantage in My Bouquet of Cataracts.
                            </p>
                            <div className='flex items-center gap-3'>
                                <a

                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                                        setTimeout(() => {
                                            window.dispatchEvent(new CustomEvent('selectInterestedIn', { detail: 'Join Ophthall Video Club Session' }));
                                        }, 100);
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-4 bg-ophthall-orange hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300 text-[12px]"
                                >
                                    <span>Register Now</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://us06web.zoom.us/j/6425854376?pwd=aK9Dpp2U1l8aP3HyQR9kW5okvrplC1.1&omn=87665774836"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center cursor-pointer justify-center gap-2 px-6 py-4 bg-[#00a0e3] hover:bg-[#00a0e3d8]  text-white font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300 text-[12px]"
                                >
                                    <span>Join Now</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-400 text-[11px] uppercase tracking-widest font-medium">
                        * Contact our team to submit your videos for feature
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeSection;
