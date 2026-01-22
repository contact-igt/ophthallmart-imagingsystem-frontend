import { GalleryImages } from "@/components/shared/GalleryImage/GalleryImage"

export const ClearViewGallery: React.FC = () => {
    const clearViewImages = {
        data: [{
            id: 1,
            src: '/assets/clearviewImages/sliderImg1.jpeg',
        },
        {
            id: 2,
            src: '/assets/clearviewImages/sliderImg2.jpeg',
        },
        {
            id: 3,
            src: '/assets/clearviewImages/sliderImg19.jpg',
        },
        {
            id: 4,
            src: '/assets/clearviewImages/sliderImg4.jpg',
        },
        {
            id: 5,
            src: '/assets/clearviewImages/sliderImg5.jpg',
        },
        {
            id: 6,
            src: '/assets/clearviewImages/sliderImg6.jpg',
        },
        {

            id: 7,
            src: '/assets/clearviewImages/sliderImg7.jpg',
        },
        {
            id: 8,
            src: '/assets/clearviewImages/sliderImg8.jpeg',
        },
        {
            id: 9,
            src: '/assets/clearviewImages/sliderImg9.jpeg',
        }, {
            id: 10,
            src: '/assets/clearviewImages/sliderImg10.jpg',
        }],
        data_2: [
            {
                id: 1,
                src: '/assets/clearviewImages/sliderImg10.jpg',
            },
            {
                id: 2,
                src: '/assets/clearviewImages/sliderImg11.jpg',
            },
            {
                id: 3,
                src: '/assets/clearviewImages/sliderImg12.jpg',
            },
            {
                id: 4,
                src: '/assets/clearviewImages/sliderImg13.jpg',
            },
            {
                id: 5,
                src: '/assets/clearviewImages/sliderImg14.jpg',
            },
            {
                id: 6,
                src: '/assets/clearviewImages/sliderImg15.jpg',
            },
            {
                id: 7,
                src: '/assets/clearviewImages/sliderImg16.jpg',
            },
            {
                id: 8,
                src: '/assets/clearviewImages/sliderImg17.jpg',
            },
            {
                id: 9,
                src: '/assets/clearviewImages/sliderImg18.jpg',
            },
            {
                id: 10,
                src: '/assets/clearviewImages/sliderImg20.jpg',
            }
        ]
    }

    return (
        <section className='max-w-[1440px] mx-auto pt-10 px-6 lg:px-12'>
            <div className="text-center mb-12">
                <h2 className="text-ophthall-orange font-black uppercase tracking-[0.3em] text-[11px] mb-4">
                    Image Gallery
                </h2>
                <h3 className="text-4xl md:text-5xl font-light text-ophthall-blue tracking-tighter">
                   Clear View Slit Lamp <span className="font-bold">Imaging Solution Gallery</span>
                </h3>
            </div>
            <GalleryImages Images={clearViewImages} />
        </section>
    )
}