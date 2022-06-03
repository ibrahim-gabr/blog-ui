import React from "react";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import SocialIcon from "~/components/common/socialicon";

const FooterSocial = () => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row items-center md:space-y-0 ">
      <div className="flex w-44  items-center justify-between  px-1">
        <SocialIcon bg="[#ECEEED]">
          <GoMail className="w-4 h-4" />
        </SocialIcon>
        <SocialIcon bg="[#ECEEED]">
          <FiFacebook className="w-4 h-4" />
        </SocialIcon>
        <SocialIcon bg="[#ECEEED]">
          <FiInstagram className="w-4 h-4" />
        </SocialIcon>
        <SocialIcon bg="[#ECEEED]">
          <FiTwitter className="w-4 h-4" />
        </SocialIcon>
      </div>
      <button className="md:mr-4 w-44 h-10 flex items-center justify-center bg-theme-secondary text-white">
        كن كاتب معنا
      </button>
    </div>
  );
};

export default FooterSocial;
