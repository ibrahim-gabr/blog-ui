import React from "react";
import FooterSocial from "./FooterSocial";
import FooterCopyrights from "./FooterCopyrights";
import { Container } from "../../common/container";
import { Newsletter } from "../Newsletter";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col  w-full  bg-white">
      <Newsletter />
        <Container className="py-4">
          <div className="flex flex-col md:flex-row space-y-4 justify-center md:justify-between items-center md:space-y-0 w-full">
            <div className="order-first md:order-2">
              <FooterSocial />
            </div>
            <div className="md:order-last text-[#808686] font-normal">
              <span>الشروط والاحكام</span>
            </div>
            <div className="md:order-first">
              <FooterCopyrights />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
