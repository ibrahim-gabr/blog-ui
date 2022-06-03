import Image from "next/image";
import React from "react";
import Banner from "./common/banner";
import Overlay from "./common/overlay";

export const Showcase = () => {
  return (
    <Banner img="/images/diverse-people-working-office 1.png">
      <div className="relative max-w-7xl mx-auto h-[264px] sm:h-[500px] px-4 sm:px-6 lg:px-8 flex items-end py-4">
        <div className="border-r-4 flex flex-col justify-end border-theme-primary pr-4">
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-white  lg:text-6xl ">
            مركز تراقم
          </h1>
          <p className="mt-6 text-sm sm:text-2xl text-[#ECEEED] max-w-3xl">
            مركــز للتعليــم ونشــر المعرفة عبر ّ المقالات والمدونات المتخصصة
            بموضوعات التجارة الإلكتروني ُّ ة والاقتصاد والتقنية، وما يخص حياتنا
            كتجار
          </p>
        </div>
      </div>
    </Banner>
  );
};
