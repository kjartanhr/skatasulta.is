import React from "react";
import "./styles.css";
import { Playfair_Display_SC, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { cn } from "lib/utils";
import Link from "next/link";
import { Header } from "components/header";

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
};

export default async function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;

    return (
        <html lang="en" className={cn(sans.variable, serif.variable, mono.variable)}>
            <body>
                <Header />

                <main>{children}</main>

                <footer className="bg-gray-100">
                    <div className="container py-16">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center">
                            <p className="text-sm font-medium text-gray-800">
                                &copy; {new Date().getUTCFullYear()} Ritstjórn Skátasultunnar. Allur
                                réttur áskilinn.
                            </p>

                            <span className="hidden text-sm font-medium text-gray-400 md:block">
                                &bull;
                            </span>

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
                                    href="mailto:skatasultan@skatasultan.is"
                                    className="-mb-[2px] border-b-2 border-gray-500 text-sm font-medium text-gray-800 transition duration-300 ease-in-out hover:border-blue-500"
                                >
                                    skatasultan@skatasultan.is
                                </a>
                            </div>

                            <span className="hidden text-sm font-medium text-gray-400 md:block">
                                &bull;
                            </span>

                            <div>
                                <a
                                    href="tel:+3545379300"
                                    className="-mb-[2px] border-b-2 border-gray-500 text-sm font-medium text-gray-800 transition duration-300 ease-in-out hover:border-blue-500"
                                >
                                    537-9300
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
