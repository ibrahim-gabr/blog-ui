import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const MostReadHeader = () => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <span className="text-theme-black text-2xl">الأكثر قراءة</span>

        <div className="flex justify-center items-center">
          <span className="text-theme-light-black text-base ml-2">
            عرض المزيد
          </span>
          <ArrowLeftIcon className="text-theme-primary w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default MostReadHeader;
