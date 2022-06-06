import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { FC, useState, useRef } from "react";
import useOnClickOutside from "~/hooks/on-click-outside";
import NextLink from "~/components/common/NextLink";
import Sidebar from "./sidebar";

type Props = {
  isHomePage: boolean;
};
const BlogHeader: FC<Props> = ({ isHomePage }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setShow(false));
  return (
    <div
      className={`flex items-end h-7 space-x-4 font-bold text-xl ${
        isHomePage ? "text-white" : "text-theme-light-black"
      }`}
    >
      <aside ref={ref}>
        <MenuIcon
          onClick={() => {
            setShow(!show);
          }}
          className={`relative w-8 h-8 flex sm:hidden  ${
            isHomePage ? "bg-[#222222]" : " bg-white"
          } ml-6`}
        />

        <Sidebar show={show} isHomePage={isHomePage} setShow={setShow} />
      </aside>

      <NextLink href="/" className="flex items-end space-x-4 space-x-reverse ">
        <div className="leading-7">مدونة</div>
        <div className=" text-3xl">|</div>
        <div className="leading-7 ">Blog</div>
      </NextLink>
    </div>
  );
};

export default BlogHeader;
