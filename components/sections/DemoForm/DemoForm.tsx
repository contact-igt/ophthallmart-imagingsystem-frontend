'use client';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const formSchema = Yup.object({
    name: Yup.string().required("Name required"),
    clinic: Yup.string().required("Clinic required"),
    email: Yup.string().required("Email required"),
    mobile: Yup.string()
        .required("Mobile required")
        .matches(/^[0-9]{10}$/, "Invalid mobile number"),
    interested_in: Yup.string().required("Interested in required"),
    fill_details: Yup.string().required("Fill details required"),
})
type FormData = Yup.InferType<typeof formSchema>;

const DemoForm: React.FC = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<FormData>({
        resolver: yupResolver(formSchema),
    })

    useEffect(() => {
        const handleSelectEvent = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail) {
                setValue('interested_in', customEvent.detail);
            }
        };
        window.addEventListener('selectInterestedIn', handleSelectEvent);
        return () => window.removeEventListener('selectInterestedIn', handleSelectEvent);
    }, [setValue]);

    const onSubmit = async (data: FormData) => {
        try {
            const ipResponse = await fetch("https://api.ipify.org?format=json");
            const ipData = await ipResponse.json();

            const formData = {
                name: data?.name,
                clinic: data?.clinic,
                email: data?.email,
                mobile: data?.mobile,
                interested_in: data?.interested_in,
                fill_details: data?.fill_details,
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
            const res = await fetch("https://script.google.com/macros/s/AKfycbzaFDkcABmXv5WTjcewO-oAO1w93D6y2PQLZKDZUnrAGbOStrvQONS4HUzrxp2FZS1ECA/exec", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: formData.toString() })
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
                    {/* <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-6">
                        Connect to Us
                    </h2>
                    <h3 className="text-5xl font-light text-ophthall-blue tracking-tighter">
                        Experience <span className="font-bold text-ophthall-orange">OIS Fidelity.</span>
                    </h3> */}


                    <h3 className="text-5xl font-light text-ophthall-blue tracking-tighter">
                        Connect <span className="font-bold text-ophthall-orange">Us</span>
                    </h3>
                </div>
                <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
                    <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 gap-8">
                        <div>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Full Name"
                                className={`p-4 bg-gray-50 w-full border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all ${errors.name ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-ophthall-orange"}`}
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
                                className={`p-4 bg-gray-50 w-full border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all ${errors.clinic ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-ophthall-orange"}`}
                            />
                            {errors.clinic && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.clinic.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Email"
                                className={`p-4 bg-gray-50 w-full border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all ${errors.email ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-ophthall-orange"}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                {...register("mobile")}
                                type="tel"
                                placeholder="Mobile Number"
                                className={`p-4 bg-gray-50 w-full border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all ${errors.mobile ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-ophthall-orange"}`}
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.mobile.message}</p>
                            )}
                        </div>
                        <div>
                            <select {...register("interested_in")} className={`p-4 w-full bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all ${errors.interested_in ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-ophthall-orange"}`}>
                                <option>Interested in VID ( Anterior)
                                </option>
                                <option>Interested in VID Pro ( Posterior)
                                </option>
                                <option>Interested in Slit Lamp Imaging</option>
                                <option>Interested in Accessories</option>
                                <option>List your video
                                </option>
                                <option>Submit Videos to Channel
                                </option>
                                <option>Join Ophthall Video Club Session</option>
                            </select>
                            {errors.interested_in && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.interested_in.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                {...register("fill_details")}
                                type="text"
                                placeholder="Fill Details"
                                className={`p-4 w-full bg-gray-50 border-none rounded-lg outline-none focus:ring-2 focus:ring-ophthall-orange transition-all ${errors.fill_details ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-ophthall-orange"}`}
                            />
                            {errors.fill_details && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errors.fill_details.message}</p>
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
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;