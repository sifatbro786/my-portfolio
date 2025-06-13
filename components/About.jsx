"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";
import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "@/assets";

export default function About() {
    return (
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
            <Heading>About Me</Heading>
            <div className="w-full flex items-center justify-between md:justify-center">
                <Image
                    src="/about-me.png"
                    alt="About Image"
                    width={400}
                    height={400}
                    className="w-[300px] lg:w-[200px] lg:hidden"
                />
                <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
                    <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden dark:bg-zinc-700 transition-colors">
                        {arrowLeftIcon}
                    </span>
                    <p className="text-lg font-light text-gray-700 first-letter:pl-3 first-letter:text-xl first-letter:text-red-400 lg:text-base sm:text-[14px] dark:text-white">
                        {aboutText}
                    </p>
                    <a
                        href="/sifat-cv.pdf"
                        download=""
                        className="w-max sm:mx-auto flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-500 hover:bg-red-600 px-3 py-2 font-light text-white transition-colors"
                    >
                        <span>Download CV</span>
                        <span className="text-xl">{downloadIcon}</span>
                    </a>
                </div>
            </div>
            <div className="mt-20 w-full flex sm:flex-col flex-wrap items-center sm:justify-center justify-between gap-x-7 gap-y-10">
                {aboutData &&
                    aboutData.map((item, idx) => (
                        <Achievements key={idx} title={item?.title} amount={item?.amount}>
                            {item?.icon}
                        </Achievements>
                    ))}
            </div>
        </div>
    );
}
