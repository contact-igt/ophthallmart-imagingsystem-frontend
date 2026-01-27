import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Ophthall - Advanced Ophthalmic Imaging Systems",
    description: "Convert your existing slit lamp or microscope into a High-Resolution digital documentation system.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                {children}
                <Script dangerouslySetInnerHTML={{
                    __html: `(function(c,l,a,r,i,t,y){
                   c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                   t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "v7xvo772ea");`}} />
            </body>
        </html>
    );
}