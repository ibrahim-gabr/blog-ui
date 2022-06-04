import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";
type Props = {
  label: string;
  type: string;
  placeholder: string;
};
const Input: FC<Props> = ({ label, type, placeholder }) => {
  return (
    <div className="">
      <label
        htmlFor="name"
        className="block text-sm font-normal text-[#202221]            "
      >
        {label}
      </label>
      <div className="mt-2.5">
        <Field
          type="text"
          name={type}
          id={type}
          placeholder={placeholder}
          className="shadow-sm focus:ring-theme-primary focus:border-theme-primary block w-full sm:text-sm border-[#E9E9E9] rounded-sm placeholder-[#B3B9B9]"
        />
        <div className="text-[#a94442] font-normal flex justify-center items-center  mx-auto mt-2 py-1 text-sm">
          <ErrorMessage name={type} className="bg-red-300" />
        </div>
      </div>
    </div>
  );
};

export default Input;
