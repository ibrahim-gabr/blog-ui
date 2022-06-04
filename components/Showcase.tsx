import React, { FC } from "react";
import { Banner as TopBanner } from "~/pages";
import Banner from "./common/banner";
import NextLink from "./common/NextLink";

type Props = {
  banner: TopBanner;
};
export const Showcase: FC<Props> = ({ banner }) => {
  return (
    <NextLink
      className="cursor-pointer"
      href={`/studies/${banner.content.slug}`}
    >
      <Banner img="/images/diverse-people-working-office 1.jpg">
        <div className="relative max-w-7xl mx-auto h-[264px] sm:h-[500px] px-4 sm:px-6 lg:px-8 flex items-end py-4">
          <div className="border-r-4 flex flex-col justify-end border-theme-primary pr-4">
            <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-white  lg:text-6xl ">
              {banner.content.title}
            </h1>
            <p className="mt-6 text-sm sm:text-2xl text-theme-lily-white max-w-3xl">
              {banner.content.excerpt}
            </p>
          </div>
        </div>
      </Banner>
    </NextLink>
  );
};
