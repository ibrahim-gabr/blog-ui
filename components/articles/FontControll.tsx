import React from "react";
import FontPicker from "./FontPicker";

const FontControll = () => {

  return (
    <div className="bg-theme-secondary w-28 h-8.5 px-2.5 py-1.5 rounded-3xl mx-auto flex mt-5 space-x-3 space-x-reverse justify-center items-center">
      <FontPicker size="xl" type="default">
        A
      </FontPicker>
      <FontPicker size="md" type="medium">
        A
      </FontPicker>
      <FontPicker size="sm" type="small">
        A
      </FontPicker>
    </div>
  );
};

export default FontControll;
