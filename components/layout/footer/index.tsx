import React from "react";
import FooterSocial from "./FooterSocial";
import FooterCopyrights from "./FooterCopyrights";
import { Container } from "../../common/container";
const Footer = () => {
  return (
    <div className="flex flex-col fixed bottom-0 w-full py-4">
      <Container>
        <FooterSocial />
        <div>
          <span>الشروط والاحكام</span>
        </div>
        <FooterCopyrights />
      </Container>
    </div>
  );
};

export default Footer;
