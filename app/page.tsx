'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/shared/Navbar/Navbar';
import GalleryModal from '@/components/shared/GalleryModal/GalleryModal';
import Footer from '@/components/shared/Footer/Footer';
import Hero from '@/components/sections/Hero/Hero';
import HeroInstagram from '@/components/sections/Hero/HeroInstagram';
import ClearView from '@/components/sections/ClearView/ClearView';
import ProductSection from '@/components/sections/ProductSection/ProductSection';
import ComparisonTable from '@/components/sections/ComparisonTable/ComparisonTable';
import Accessories from '@/components/sections/Accessories/Accessories';
import Reviews from '@/components/sections/Reviews/Reviews';
import SurgeryVideos from '@/components/sections/SurgeryVideos/SurgeryVideos';
import ProgrammeSection from '@/components/sections/ProgrammeSection/ProgrammeSection';
import InstallationMap from '@/components/sections/InstallationMap/InstallationMap';
import DemoForm from '@/components/sections/DemoForm/DemoForm';
import type { Product, GalleryItem } from '@/types';
import useUTMSource from '@/utils/useUTMSource';
import { ClearViewGallery } from '@/components/sections/ClearView/ClearViewGallery';
import { Popup } from '@/components/shared/Popup/Popup';
import { SurgeryVideoDetails } from '@/components/shared/SurgeryVideoDetails/surgeryVideoDetails';
import { ScrollToTop } from '@/components/shared/ScrollToTop/ScrollToTop';
import { LiveClubFAB } from '@/components/shared/LiveClubFAB/LiveClubFAB';
import { WhatsAppFAB } from '@/components/shared/WhatsAppFAB/WhatsAppFAB';

export default function Home() {
    useUTMSource();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [galleryProduct, setGalleryProduct] = useState<Product | null>(null);
    // const [isGalleryImages, setIsGalleryImages] = useState(false);
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const vidGallery: GalleryItem[] = [
        {
            src: '/assets/ophthall_vid.png',
            type: 'image'
        },
    ];
    const vidProGallery: GalleryItem[] = [
        {
            src: '/assets/ophthall_vid_pro.png',
            type: 'image'
        },
    ];

    const vidInstallationVideo: Product = {
        name: 'Video Gallery',
        gallery: [
            {
                type: 'video',
                src: "https://www.youtube.com/embed/s8bbWNPZtrM?si=QjqL6mmGBpisJx1R",
                thumb: '/assets/ophthallvid1.jpg'
            },
            {
                type: 'video',
                src: "https://www.youtube.com/embed/sEM7akfqSxs?si=_UlZqR_8QX3qdcL2",
                thumb: '/assets/ophthallvid2.jpg'
            },
              {
                type: 'video',
                src: "https://www.youtube.com/embed/TweGeTGjA3A?si=GiQDbPWZGqFfycBs",
                thumb: '/assets/ophthallvid3.jpg'
            }
        ]
    };

    const vidProInstallationVideo: Product = {
        name: 'Video Gallery',
        gallery: [
                {
                type: 'video',
                src: "https://www.youtube.com/embed/0vXTsaI3Z4A?si=DmY9AdUkdKZ1R0HI",
                thumb: '/assets/ophthallvidpro1.jpg'
            },
            {
                type: 'video',
                src: "https://www.youtube.com/embed/znpSqBBNjTY?si=crognlJQByJ77TKo",
                thumb: '/assets/ophthallvidpro1.jpg'
            },
            {
                type: 'video',
                src: "https://www.youtube.com/embed/cA4MZyq6Ca4?si=c_MQb60JrrJbyOLf",
                thumb: '/assets/ophthallvidpro2.jpg'
            }
        ]
    };
    const clearerViewInstallationVideo: Product = {
        name: 'What our customer say',
        gallery: [
            {
                type: 'video',
                src: "https://www.youtube.com/embed/TKCsWCBUVVM"
            }
        ]
    };

    const openInstallationVideo = (type: string, isGalleryImageUI?: boolean) => {
        if (type == "vid") {
            setGalleryProduct(vidInstallationVideo);
        }
        else if (type == "vid-pro") {
            setGalleryProduct(vidProInstallationVideo);
        }
        else if (type == "clearer-view") {
            setGalleryProduct(clearerViewInstallationVideo);
            // if (isGalleryImageUI) setIsGalleryImages(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsModalOpen(true);
        }, 15000);
    }, [])
    return (
        <div className="min-h-screen bg-white">
            <Navbar scrollTo={scrollTo} />

            <main>
                <Hero />
                {/* <HeroInstagram /> */}
                <ClearView
                    onOpenGallery={setGalleryProduct}
                    onInstallationVideos={() => openInstallationVideo("clearer-view")}
                    onOpenGalleryImages={() => openInstallationVideo("clearer-view", true)}
                />
                <ClearViewGallery />
                <ProductSection
                    id="ophthall-vid"
                    name="Vid"
                    subtitle="Surgical Recording"
                    description="Easily record Full HD videos or capture high-quality still images. All files are saved directly onto an SD card, making documentation and sharing convenient and hassle-free."
                    features={[
                        'Sensor Size: 1/2.3 inch',
                        'SONY HD CMOS',
                        'Pixel Size: 2.2μm',
                        'Video Capture Resolution: 1920 x 1080',
                        'Video Framerate: 30fps',
                        'HDMI Recording'
                    ]}
                    gallery={vidGallery}
                    onOpenGallery={setGalleryProduct}
                    imageLeft={true}
                    galleryButtonText="Gallery"
                    onScheduleDemo={() => scrollTo('demo')}
                    onInstallationVideos={() => openInstallationVideo("vid")}
                />

                <ProductSection
                    id="ophthall-vid-pro"
                    dark
                    name="Vid Pro"
                    subtitle="SURGICAL RECORDING"
                    description="High-definition surgical recording solutions for both anterior and posterior segments."
                    features={[
                        'High Sensitivity 1/1.8” Wide Sensor',
                        'Reduced Motion Blur with 60 Fps',
                        'Best Low Light Performance',
                        'Wide view with Large Sony Sensor for Ophthalmic Surgery',
                        'High Definition Sharp Detailed Vision With High Dynamic Range HDR10+',
                        'Record Full HD Videos directly to USB Drive'
                    ]}
                    gallery={vidProGallery}
                    onOpenGallery={setGalleryProduct}
                    imageLeft={false}
                    galleryButtonText="Gallery"
                    onScheduleDemo={() => scrollTo('demo')}
                    onInstallationVideos={() => openInstallationVideo("vid-pro")}
                />

                <InstallationMap />

                <ComparisonTable />
                <Accessories />
                <Reviews />
                <ProgrammeSection />
                <SurgeryVideos />
                <DemoForm />
            </main>

            <Footer />

            <GalleryModal
                isOpen={!!galleryProduct}
                onClose={() => {
                    setGalleryProduct(null);
                    // setIsGalleryImages(false);
                }}
                product={galleryProduct}
            // isGalleryImages={isGalleryImages}
            // galleryImageData={clearViewImages}
            />
            {/* <Popup isOpen={isModalOpen} onClose={handleCloseModal}>
                <SurgeryVideoDetails onClose={handleCloseModal} />
            </Popup> */}
            <ScrollToTop />
            <LiveClubFAB />
            <WhatsAppFAB />
        </div>
    );
};
