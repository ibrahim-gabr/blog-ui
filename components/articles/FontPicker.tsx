import React, { FC } from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
  textSize?: string;
  hasOpacity?: boolean;
};
const FontPicker: FC<Props> = ({
  children,
  textSize,
  hasOpacity,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "border-b-2 border-white text-white w-4 flex justify-center items-center",
        hasOpacity && "text-opacity-60 border-opacity-60",
        textSize ? `text-${textSize}` : "text-sm"
      )}
    >
      {children}
    </span>
  );
};

export default FontPicker;
