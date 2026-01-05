export interface GalleryItem {
    src?: string;
    type: 'image' | 'video';
    id?: string;
    thumb?: string;
}

export interface Product {
    name: string;
    gallery: GalleryItem[];
}

export interface NavbarProps {
    activeSection?: string;
    scrollTo: (id: string) => void;
}

export interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

export interface ProductSectionProps {
    id: string;
    name: string;
    dark?: boolean;
    subtitle: string;
    description: string;
    features: string[];
    gallery: GalleryItem[];
    onOpenGallery: (product: Product) => void;
    imageLeft?: boolean;
    galleryButtonText?: string;
    onScheduleDemo?: () => void;
    onInstallationVideos?: () => void;
}
