import { MoonIcon, SearchIcon } from "@heroicons/react/outline";
import React, { FC } from "react";
type Props = {
  isHomePage: boolean;
};
const NavIcons: FC<Props> = ({ isHomePage }) => {
  return (
    <div className="flex items-center justify-between w-24 h-10">
      <div className="border-2 border-[#C6CBCA] rounded-3xl  h-10 w-10  flex items-center justify-center">
        <SearchIcon
          className={`${
            isHomePage ? " text-[#C6CBCA]" : "text-theme-light-black"
          }  w-4 h-4`}
        />
      </div>
      <div className="border-2 border-[#C6CBCA] rounded-3xl  h-10 w-10  flex items-center justify-center">
        <MoonIcon
          className={`${
            isHomePage ? " text-[#C6CBCA]" : "text-theme-light-black"
          }  w-4 h-4`}
        />
      </div>
    </div>
  );
};

export default NavIcons;
