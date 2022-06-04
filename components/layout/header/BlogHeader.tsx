import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { FC, useState, useRef } from "react";
import { navigation } from "./NavSections";
import cn from "classnames";
import { useRouter } from "next/router";
import useOnClickOutside from "~/hooks/on-click-outside";
import NextLink from "~/components/common/NextLink";

type Props = {
  isHomePage: boolean;
};
const BlogHeader: FC<Props> = ({ isHomePage }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setShow(false));

  return (
    <div
      className={`flex items-end h-7 space-x-4 font-bold text-xl ${
        isHomePage ? "text-white" : "text-theme-light-black"
      }`}
    >
      <div>
        <MenuIcon
          onClick={() => {
            setShow(!show);
          }}
          className={`relative w-8 h-8 flex sm:hidden  ${
            isHomePage ? "bg-[#222222]" : " bg-white"
          } ml-6`}
        />

        {show && (
          <div
            ref={ref}
            onClick={() => setShow(false)}
            className={` space-y-1 flex flex-col absolute z-50 right-12  py-3 px-1  ${
              isHomePage ? "bg-[#222222]" : " bg-white"
            }`}
          >
            <div
              onClick={() => {
                setShow(false);
                router.push("/");
              }}
              className={cn(
                "block px-3 py-1 rounded-md  text-base font-ormal hover:bg-theme-light-black hover:text-white"
              )}
            >
              <span>الرئيسية</span>
            </div>
            {navigation.map((item) => (
              <div
                key={item.text}
                onClick={() => {
                  setShow(false);
                  router.push(item.href);
                }}
                className={cn(
                  "block  px-3 py-1 rounded-md  text-base font-ormal hover:bg-theme-light-black hover:text-white"
                )}
              >
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <NextLink href="/" className="flex items-end space-x-4 space-x-reverse ">
        <div className="leading-7">مدونة</div>
        <div className=" text-3xl">|</div>
        <div className="leading-7 ">Blog</div>
      </NextLink>
    </div>
  );
};

export default BlogHeader;
