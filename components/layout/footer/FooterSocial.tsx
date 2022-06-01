import React from "react";
import { FacebookIcon } from "../../icons";

const FooterSocial = () => {
  return (
    <div className="flex flex-col">

      <div className="flex">
        <FacebookIcon />
      </div>
      <button className="w-44 h-10 flex items-center justify-center bg-theme-secondary text-white">
        كن كاتب معنا
      </button>
    </div>
  );
};

export default FooterSocial;
