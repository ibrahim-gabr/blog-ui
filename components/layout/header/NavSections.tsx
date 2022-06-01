import React, { FC } from "react";
type Props = {
  isHomePage: boolean;
};
const NavSections: FC<Props> = ({ isHomePage }) => {
  return (
    <div
      className={`hidden sm:flex items-center ${
        isHomePage ? "text-white" : "text-[#404343]"
      } flex-1 justify-start mr-8`}
    >
      <div className="text-base font-normal mx-4">الرئيسية</div>
      <div className="text-base font-normal mx-4">التقارير والدراسات</div>
      <div className="text-base font-normal mx-4">المقالات</div>
    </div>
  );
};

export default NavSections;
