import React, { FC } from "react";
import Overlay from "./overlay";


type BanerProps = {
  children?: React.ReactNode;
  img: string;
  overlay?: string;
};
const Banner: FC<BanerProps> = ({ children, img, overlay }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={img} alt="" />
        <Overlay dir={overlay} />
      </div>

      {children}
    </div>
  );
};

export default Banner;
