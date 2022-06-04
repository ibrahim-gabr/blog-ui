import React, { FC } from "react";
import cn from "classnames";
import { useAppSelector } from "~/app/hooks";
import { useDispatch } from "react-redux";
import { setFont } from "~/features/ArticleSlice";

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: string;
  type: string;
};
const FontPicker: FC<Props> = ({
  children,
  size,
  className,
  type,
  ...props
}) => {
  const active = useAppSelector((state) => state.article.activeFontSize);
  const dispatch = useDispatch();
  return (
    <span
      onClick={() => {
        dispatch(
          setFont({
            type,
          })
        );
      }}
      className={cn(
        "border-b-2 border-white text-white w-4 flex justify-center items-center",
        type != active && "text-opacity-60 border-opacity-60",
        size ? `text-${size}` : "text-sm"
      )}
    >
      {children}
    </span>
  );
};

export default FontPicker;
