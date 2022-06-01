import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import NavSections from "./NavSections";
import NavIcons from "./NavIcons";
import BlogHeader from "./BlogHeader";
import { Container } from "../../common/container";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  // #404343
  return (
    <header className={`${isHomePage ? "bg-[#222222]" : "bg-white"} py-4 `}>
      <Container>
        <div className="flex items-center h-16 ">
          <div className="flex justify-between w-full items-end">
            <BlogHeader isHomePage={isHomePage} />
            <NavSections isHomePage={isHomePage} />
            <NavIcons isHomePage={isHomePage} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
