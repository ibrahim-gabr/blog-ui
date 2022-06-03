import React from "react";
import { FC } from "react";
import { GoMail } from "react-icons/go";

export type SocialIconProps = {
  bg?: string;
  children: React.ReactNode;
};

const SocialIcon: FC<SocialIconProps> = ({ children, bg }) => {
  return (
    <div
      className={`border border-[#ECEEED] rounded-2xl w-9 h-9 flex items-center justify-center bg-${
        bg && bg
      }`}
    >
      {children}
    </div>
  );
};

export default SocialIcon;
