import React, { FC } from "react";

type Props = {
  label: string;
  type: string;
  placeholder: string;
};
const TextArea: FC<Props> = ({ label, type, placeholder }) => {
  return (
    <>
      <label
        htmlFor="about"
        className="block text-sm font-medium text-[#202221]            "
      >
        {label}
      </label>
      <div className="mt-2.5">
        <textarea
          id={type}
          name={type}
          rows={6}
          placeholder={placeholder}
          className="shadow-sm focus:ring-theme-primary focus:border-theme-primary block w-full text-[#B3B9B9] text-xs border border-[#E9E9E9] rounded-sm"
        />
      </div>
    </>
  );
};

export default TextArea;
