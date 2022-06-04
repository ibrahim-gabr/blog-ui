import React , {FC} from "react";

type Props = {
  label:string;
  type:string;
  placeholder:string;
}
const Input: FC<Props> = ({ label , type , placeholder }) => {
  return (
    <div className="">
      <label
        htmlFor="name"
        className="block text-sm font-normal text-[#202221]            "
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          type="text"
          name={type}
          id={type}
          autoComplete="name"
          placeholder={placeholder}
          className="shadow-sm focus:ring-theme-primary focus:border-theme-primary block w-full sm:text-sm border-[#E9E9E9] rounded-sm placeholder-[#B3B9B9]"
        />
      </div>
    </div>
  );
};

export default Input;
