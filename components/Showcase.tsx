import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Banner as TopBanner, Post } from "~/pages";
import Banner from "./common/banner";

type Props = {
  banner: TopBanner;
};
export const Showcase: FC<Props> = ({ banner }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/studies/${banner.content.slug}`)}
    >
      <Banner img="/images/diverse-people-working-office 1.png">
        <div className="relative max-w-7xl mx-auto h-[264px] sm:h-[500px] px-4 sm:px-6 lg:px-8 flex items-end py-4">
          <div className="border-r-4 flex flex-col justify-end border-theme-primary pr-4">
            <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-white  lg:text-6xl ">
              {banner.content.title}
            </h1>
            <p className="mt-6 text-sm sm:text-2xl text-[#ECEEED] max-w-3xl">
              {banner.content.excerpt}
            </p>
          </div>
        </div>
      </Banner>
    </div>
  );
};
