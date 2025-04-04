import React from "react";
import "./styles.css";
import { Playfair_Display_SC, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { cn } from "lib/utils";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@/payload.config";
import { Metadata } from "next";

const sans = Source_Sans_3({
    variable: "--font-sans",
    subsets: ["latin", "latin-ext"],
});
const serif = Playfair_Display_SC({
    variable: "--font-serif",
    subsets: ["latin", "latin-ext"],
    weight: "700",
});
const mono = IBM_Plex_Mono({
    variable: "--font-mono",
    subsets: ["latin", "latin-ext"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
    description:
        "Stórasti frétta-, tíðinda-, og, slúðurvettvangur íslenskra skáta! Skrifað af skátum fyrir skáta.",
    title: "Skátasulta | Fregnir og fleira, ferskt úr krukkunni",
    metadataBase: new URL(process.env.BASE_URL ?? "https://skatasulta.is"),
    openGraph: {
        siteName: "Skátasulta",
    },
} satisfies Metadata;

export default async function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;

    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });
    const footer = await payload.findGlobal({ slug: "footer" });

    return (
        <html lang="en" className={cn(sans.variable, serif.variable, mono.variable, "h-full")}>
            <body className="flex h-full flex-col">
                {children}

                <footer className="bg-gray-100">
                    <div className="container py-16">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <p className="text-sm font-medium text-gray-800">
                                &copy; {new Date().getUTCFullYear()} {footer.copyrightHolder}. Allur
                                réttur áskilinn.
                            </p>

                            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <div>
                                    <Link
                                        href="/skatasulta/efnisleyfi"
                                        className="-mb-[2px] border-b-2 border-gray-500 text-sm font-medium text-gray-800 transition duration-300 ease-in-out hover:border-blue-500"
                                    >
                                        Efnisleyfi
                                    </Link>
                                </div>

                                <span className="hidden text-sm font-medium text-gray-400 md:block">
                                    &bull;
                                </span>

                                <div>
                                    <a
                                        href={`mailto:${footer.email}`}
                                        className="-mb-[2px] border-b-2 border-gray-500 text-sm font-medium text-gray-800 transition duration-300 ease-in-out hover:border-blue-500"
                                    >
                                        {footer.email}
                                    </a>
                                </div>

                                <span className="hidden text-sm font-medium text-gray-400 md:block">
                                    &bull;
                                </span>

                                <div>
                                    <a
                                        href={`tel:+354${footer.phone}`}
                                        className="-mb-[2px] border-b-2 border-gray-500 text-sm font-medium text-gray-800 transition duration-300 ease-in-out hover:border-blue-500"
                                    >
                                        {footer.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
