import React, { FC, useRef } from "react";

import { navigation } from "./NavSections";
import cn from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type Props = {
  show: boolean;
  isHomePage: boolean;
  setShow: (show: boolean) => void;
};

const Sidebar: FC<Props> = ({ show, isHomePage, setShow }) => {
  const router = useRouter();
  return (
    <>
      {show && (
        <motion.nav
          initial={{ right: -50 , width:200 }}
          animate={{ right: 0, width:"50%" }}
          transition={{ duration: 0.5 }}
          onClick={() => setShow(false)}
          className={` space-y-3 flex flex-col absolute z-50 innset-y-0 right-0 h-full flex-1 py-3 px-1 w-1/2 ${
            isHomePage ? "bg-[#222222]" : " bg-white"
          }`}
        >
          <div
            onClick={() => {
              setShow(false);
              router.push("/");
            }}
            className={cn(
              "block px-3 py-2 rounded-md cursor-pointer text-base font-ormal hover:bg-theme-light-black hover:text-white"
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
                "block  px-3 py-2 rounded-md cursor-pointer text-base font-ormal hover:bg-theme-light-black hover:text-white"
              )}
            >
              <span>{item.text}</span>
            </div>
          ))}
        </motion.nav>
      )}
    </>
  );
};

export default Sidebar;
