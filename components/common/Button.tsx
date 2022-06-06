import React from "react";
import cn from "classnames";
import { TailSpin } from "react-loader-spinner";
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  btnType: "primary" | "secondary" | "info" | "gray";
  children?: React.ReactNode;
  loading?: boolean;
};

export const Button = ({
  btnType,
  disabled,
  loading,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "h-10 py-2 px-4 text-sm border border-transparent focus:outline-none font-normal rounded-sm shadow-sm focus:ring-2 focus:ring-offset-2 flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ",
        btnType === "primary" &&
          "bg-theme-primary text-white focus:ring-theme-primary",
        btnType === "secondary" &&
          "bg-theme-secondary text-white focus:ring-theme-secondary",
        btnType === "gray" &&
          "bg-gray-200 text-gray-600 focus:ring-theme-primary",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
