'use client';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const formSchema = Yup.object({
    name: Yup.string().required("Name required"),
    clinic: Yup.string().required("Clinic required"),
    city: Yup.string().required("City required"),
    mobile: Yup.string()
        .required("Mobile required")
        .matches(/^[0-9]{10}$/, "Invalid mobile number"),
    interested_in: Yup.string().required("Interested in required"),
    microscope_model: Yup.string().required("Microscope model required"),
})
type FormData = Yup.InferType<typeof formSchema>;

const DemoForm: React.FC = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: yupResolver(formSchema),
    })

    const onSubmit = async (data: FormData) => {
        try {
            const ipResponse = await fetch("https://api.ipify.org?format=json");
            const ipData = await ipResponse.json();

            const formData = {
                name: data?.name,
                clinic: data?.clinic,
                city: data?.city,
                mobile: data?.mobile,
                interested_in: data?.interested_in,
                microscope_model: data?.microscope_model,
                ip_address: ipData?.ip,
                utm_source: localStorage.getItem("utm_source") || ""
            }

            const params = new URLSearchParams();
            (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
                const value = formData[key];
                params.append(key, value !== null ? String(value) : '');
            })

            await handleGoogleSheetForm(params);
            window.location.href = "/thank-you";
        } catch (error) {
            console.log(error);
        }
    }
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        await handleSubmit(onSubmit)(e);
    }

    const handleGoogleSheetForm = async (formData: URLSearchParams) => {
        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycby8nMFdnImR8Hxk1GaBJx90p66U7TaMWwq_FXQT_3PZ9nDUjdfATIXFhRw5yWtkQ7VULA/exec", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: formData.toString() })
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
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
                    <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 gap-8">
                        <div>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Full Name"
                                className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                {...register("clinic")}
                                type="text"
                                placeholder="Clinic / hospital"
                                className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                            />
                            {errors.clinic && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.clinic.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                {...register("city")}
                                type="text"
                                placeholder="City"
                                className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                            />
                            {errors.city && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.city.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                {...register("mobile")}
                                type="tel"
                                placeholder="Mobile Number"
                                className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.mobile.message}</p>
                            )}
                        </div>
                        <div>
                            <select {...register("interested_in")} className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all">
                                <option>Interested in VID</option>
                                <option>Interested in VID Pro</option>
                                <option>Interested in Slit Lamp</option>
                                <option>Interested in Accessories</option>
                            </select>
                            {errors.interested_in && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.interested_in.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                {...register("microscope_model")}
                                type="text"
                                placeholder="Microscope Model"
                                className="p-4 bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all"
                            />
                            {errors.microscope_model && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.microscope_model.message}</p>
                            )}
                        </div>
                        {
                            error && (
                                <p className="text-red-500 text-sm font-bold mt-2">{error}</p>
                            )
                        }
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="md:col-span-2 bg-ophthall-blue text-white py-5 font-black uppercase tracking-widest rounded-lg shadow-xl hover:bg-ophthall-orange transition-all"
                        >
                            {isSubmitting ? "Submitting..." : "Schedule My Demo"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;
