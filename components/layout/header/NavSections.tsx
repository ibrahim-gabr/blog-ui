import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import { Router, useRouter } from "next/router";

type Props = {
  isHomePage: boolean;
};
const NavSections: FC<Props> = ({ isHomePage }) => {
  const router = useRouter();
  const routes = [
    { text: "التقارير والدراسات", href: "/studies" },
    { text: "المقالات", href: "/articles" },
  ];
  return (
    <div
      className={`hidden sm:flex items-center ${
        isHomePage ? "text-white" : "text-[#404343]"
      } flex-1 justify-start mr-8`}
    >
      <div className={`${router.pathname === "/" && "active"} mx-4 pb-2`}>
        <Link href={"/"} className="text-base font-normal">
          الرئيسية
        </Link>
      </div>

      {routes.map((route, index) => (
        <>
          <div
            className={`${
              router.pathname.startsWith(route.href) && "active"
            } mx-4 pb-2`}
            key={index}
          >
            <Link href={route.href} className="text-base font-normal">
              {route.text}
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default NavSections;
