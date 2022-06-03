import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { FC, useState, useRef } from "react";
import { navigation } from "./NavSections";
import cn from "classnames";
import { useRouter } from "next/router";
import useOnClickOutside from "~/hooks/on-click-outside";

type Props = {
  isHomePage: boolean;
};
const BlogHeader: FC<Props> = ({ isHomePage }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const ref = useRef();
  useOnClickOutside(ref, () => setShow(false));

  return (
    <div
      className={`flex items-end h-7 space-x-4 font-bold text-xl ${
        isHomePage ? "text-white" : "text-[#404343]"
      }`}
    >
      <div>
        <MenuIcon
          onClick={() => {
            setShow(!show);
          }}
          className={`relative w-8 h-8 flex sm:hidden  ${
            isHomePage ? "bg-[#404343]" : " bg-white"
          } ml-6`}
        />

        {show && (
          <div
            ref={ref}
            onClick={() => setShow(false)}
            className={` space-y-1 flex flex-col absolute z-50 right-12  py-3 px-1  ${
              isHomePage ? "bg-[#404343]" : " bg-white"
            }`}
          >
            <div
              className={cn(
                "block px-3 py-1 rounded-md  text-base font-ormal hover:bg-gray-700 hover:text-white"
              )}
            >
              <Link
                href={"/"}
                className={cn(
                  "block px-3 py-1 rounded-md  text-base font-ormal hover:bg-gray-700 hover:text-white"
                )}
              >
                الرئيسية
              </Link>
            </div>
            {navigation.map((item) => (
              <div
                key={item.text}
                onClick={() => setShow(false)}
                className={cn(
                  "block px-3 py-1 rounded-md  text-base font-ormal hover:bg-gray-700 hover:text-white"
                )}
              >
                <Link href={item.href}>{item.text}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="leading-7">مدونة</div>
      <div className=" text-3xl">|</div>
      <div className="leading-7 ">Blog</div>
    </div>
  );
};

export default BlogHeader;
