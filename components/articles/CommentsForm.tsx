import React from "react";
import Input from "./input";
import TextArea from "./textarea";

const CommentsForm = () => {
  return (
    <div className="mt-5 flex flex-col space-y-4">
      {/* comment */}
      <div className="sm:col-span-6">
        <TextArea
          label="اكتب تعليقك"
          type="content"
          placeholder={"برجاء كتابة التعليق الخاص بك"}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <Input label="الاسم" type="name" placeholder="برجاء ادخال الاسم" />
        <Input
          label="البريد الالكترونى"
          type="email"
          placeholder="ادخال البريد الالكترونى"
        />
      </div>
      {/* submit button */}
      <button
        type="button"
        className="mt-3 sm:mt-0 w-full sm:w-[242px] inline-flex h-10 justify-center items-center px-4 py-2 border border-transparent text-sm font-normal rounded-sm shadow-sm text-white bg-theme-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary"
      >
        أضف تعليقك
      </button>
    </div>
  );
};

export default CommentsForm;
