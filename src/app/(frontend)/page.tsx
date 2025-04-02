import { headers as getHeaders } from "next/headers.js";
import Image from "next/image";
import { getPayload } from "payload";

import config from "@/payload.config";

import { cn } from "lib/utils";
import Link from "next/link";

export default async function HomePage() {
    const headers = await getHeaders();
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });
    //const { user } = await payload.auth({ headers });

    const posts = await payload.find({
        collection: "posts",
        where: { published: { not_equals: null } },
    });

    const top = posts.docs[0];
    const rest = posts.docs.slice(1);

    return (
        <>
            <section id="cover" className="relative min-h-[36rem]">
                <Link href={`/${top?.slug}`}>
                    <div className="absolute top-0 left-0 z-20 flex h-full w-full items-end bg-gradient-to-b from-black/40 to-black/85">
                        <div className="w-full">
                            <div className="container py-16">
                                <div className="max-w-2xl">
                                    <div>
                                        {top?.type === "watch" && (
                                            <p className="mb-4 inline-flex items-center gap-1 bg-red-700 px-2 py-1 font-bold text-white uppercase">
                                                {top.watchEnded ? (
                                                    <>Samandráttur</>
                                                ) : (
                                                    <>
                                                        Fréttavakt
                                                        <Loader className="h-2.5" />
                                                    </>
                                                )}
                                            </p>
                                        )}
                                        <h1 className="text-3xl leading-10 font-extrabold text-white uppercase md:text-5xl md:leading-14">
                                            {top?.title}
                                        </h1>
                                        <p className="mt-4 font-medium text-blue-400">
                                            Ritstjórn Skátasultunnar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                {typeof top?.coverImage !== "number" && top?.coverImage?.url && (
                    <Image
                        src={top.coverImage.url}
                        alt={top.coverImage.alt}
                        fill
                        className="z-10 object-cover"
                    />
                )}
            </section>

            <section id="top-stories" className="container py-16">
                <div className="pb-8">
                    <h2 className="text-3xl leading-10 font-extrabold uppercase">
                        Nýjasta úr krukkunni
                    </h2>
                </div>

                <div className="flex flex-col gap-32">
                    {rest.map((post, i) => (
                        <Link
                            key={i}
                            href={`/${post.slug}`}
                            className={cn(
                                "group flex flex-col gap-16",
                                i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row",
                            )}
                        >
                            <div className="relative min-h-[14rem] overflow-hidden md:w-1/2">
                                {typeof post.coverImage !== "number" && post.coverImage?.url && (
                                    <Image
                                        src={post.coverImage.url}
                                        alt={post.coverImage.alt}
                                        fill
                                        className="z-10 scale-[101%] object-cover object-bottom transition duration-300 ease-in-out group-hover:scale-105 md:min-h-auto"
                                    />
                                )}
                            </div>

                            <div className="md:w-1/2">
                                <div className="pb-6">
                                    <div className="h-2 w-full max-w-[100px] bg-blue-500" />
                                </div>

                                <h1 className="text-3xl leading-10 font-extrabold uppercase transition duration-300 ease-in-out group-hover:text-blue-500 md:text-5xl md:leading-14">
                                    {post.title}
                                </h1>

                                <p className="mt-4 text-xl font-semibold text-gray-800">
                                    {post.excerpt}
                                </p>

                                <p className="mt-4 font-semibold text-blue-700">
                                    Ritstjórn Skátasultunnar
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

function Loader({ className }: { className: string }) {
    return (
        <svg viewBox="0 0 40 14" className={cn("loader-svg", className)}>
            <circle className="dot" cx="10" cy="7" r="3" />
            <circle className="dot" cx="20" cy="7" r="3" />
            <circle className="dot" cx="30" cy="7" r="3" />
        </svg>
    );
}
