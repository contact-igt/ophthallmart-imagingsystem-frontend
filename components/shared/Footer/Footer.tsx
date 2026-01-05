import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-16">
            <div className="max-w-[1440px] mx-auto px-12">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Left Column - Brand & Description */}
                    <div>
                        <div className="text-4xl font-black text-ophthall-blue mb-6 tracking-tighter">
                            Ophthall<span className="text-ophthall-orange">.</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Facilitating doctor-to-doctor buying and selling of pre-owned ophthalmic equipment across the Indian healthcare landscape.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-ophthall-orange hover:text-ophthall-orange transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-ophthall-orange hover:text-ophthall-orange transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-ophthall-orange hover:text-ophthall-orange transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Middle Column - Services */}
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#marketplace" className="text-ophthall-blue hover:text-ophthall-orange transition-colors text-sm">
                                    Equipment Marketplace
                                </a>
                            </li>
                            <li>
                                <a href="#imaging-systems" className="text-ophthall-blue hover:text-ophthall-orange transition-colors text-sm font-semibold">
                                    Imaging Systems (OIS)
                                </a>
                            </li>
                            <li>
                                <a href="#consulting" className="text-ophthall-blue hover:text-ophthall-orange transition-colors text-sm">
                                    Practice Consulting
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Contact */}
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Helpline:</p>
                                <a href="tel:+919176565851" className="text-ophthall-blue hover:text-ophthall-orange transition-colors font-semibold">
                                    +91 91765 65851
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">OIS Enquiries:</p>
                                <a href="tel:+919154517944" className="text-ophthall-blue hover:text-ophthall-orange transition-colors font-semibold">
                                    OIS: +91 91545 17944
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Email:</p>
                                <a href="mailto:info@ophthall.in" className="text-ophthall-blue hover:text-ophthall-orange transition-colors font-semibold">
                                    info@ophthall.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources Section */}
                <div className="border-t border-gray-100 pt-8 mb-8">
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                        Resources
                    </h3>
                    <div className="flex flex-wrap gap-6">
                        <a href="#valuation" className="text-ophthall-blue hover:text-ophthall-orange transition-colors text-sm">
                            Valuation Tool
                        </a>
                        <a href="#catalogues" className="text-ophthall-blue hover:text-ophthall-orange transition-colors text-sm">
                            Product Catalogues
                        </a>
                        <a href="#legal" className="text-ophthall-blue hover:text-ophthall-orange transition-colors text-sm">
                            Legal & Privacy
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-xs">
                        © Ophthall {new Date().getFullYear()} • www.ophthall.in
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
