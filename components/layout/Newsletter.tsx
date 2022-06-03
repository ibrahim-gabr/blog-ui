import React from "react";
import { Container } from "../common/container";
import { AiOutlineMail } from "react-icons/ai";

export const Newsletter = () => {
  return (
    <div className="flex flex-col bg-[#F7F7F7] justify-center items-center py-10 space-y-2">
      <span className="text-[#202221] text-lg">اشترك في النشرة البريدية </span>
      <span className="text-sm text-[#808686]">
        كن أول من يعلم عن كل جديد في عالم التجارة الإلكترونية
      </span>
      <form
        action=""
        className="flex flex-col sm:flex-row items-center justify-center"
      >
        <div className="mt-1 sm:mt-0 relative rounded-sm shadow-sm w-[310px]">
          <input
            type="email"
            name="email"
            id="email"
            className="focus:ring-theme-primary focus:border-theme-primary block h-10 w-full pr-10 sm:text-sm border-[#F7F7F7] rounded-sm placeholder-[#B3B9B9]"
            placeholder="البريد الإلكتروني"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <AiOutlineMail
              className="h-5 w-5 text-theme-secondary"
              aria-hidden="true"
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-3 sm:mt-0 w-full sm:w-[166px] inline-flex h-10 justify-center items-center px-4 py-2 border border-transparent text-sm font-normal rounded-sm shadow-sm text-white bg-theme-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary"
        >
          اشتراك
        </button>
      </form>
    </div>
  );
};
