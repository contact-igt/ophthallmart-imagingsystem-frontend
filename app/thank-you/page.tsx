import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYouPage = () => {
    return (
        <main className="min-h-screen bg-ophthall-bg flex items-center justify-center p-6">
            <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100 animate-fade-in">
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-12 h-12 text-green-500 animate-pulse" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-ophthall-blue tracking-tighter mb-6">
                    Thank You!
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 font-light mb-8 loading-relaxed">
                    Your request has been successfully submitted.
                </p>

                <div className="space-y-4 mb-10">
                    <p className="text-gray-600">
                        Our team will review your details and get back to you shortly to schedule your demo.
                    </p>
                    <p className="text-sm text-gray-400">
                        Usually within 24 hours
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-ophthall-blue text-white font-bold uppercase tracking-widest rounded-lg hover:bg-ophthall-orange transition-all duration-300 shadow-lg group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>
        </main>
    );
};

export default ThankYouPage;
