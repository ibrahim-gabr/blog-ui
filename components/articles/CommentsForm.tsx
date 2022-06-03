import React from "react";

const CommentsForm = () => {
  return (
    <div className="mt-5 flex flex-col space-y-4">
      {/* comment */}
      <div className="sm:col-span-6">
        <label
          htmlFor="about"
          className="block text-sm font-medium text-[#202221]            "
        >
          اكتب تعليقك
        </label>
        <div className="mt-2.5">
          <textarea
            id="about"
            name="about"
            rows={6}
            className="shadow-sm focus:ring-theme-primary focus:border-theme-primary block w-full text-[#B3B9B9] text-xs border border-[#E9E9E9] rounded-sm"
            placeholder={"برجاء كتابة التعليق الخاص بك"}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        {/* name */}
        <div className="">
          <label
            htmlFor="name"
            className="block text-sm font-normal text-[#202221]            "
          >
            الاسم
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="برجاء ادخال الاسم"
              className="shadow-sm focus:ring-theme-primary focus:border-theme-primary block w-full sm:text-sm border-[#E9E9E9] rounded-sm placeholder-[#B3B9B9]"
            />
          </div>
        </div>

        {/* email */}
        <div className="">
          <label
            htmlFor="email"
            className="block text-sm font-normal text-[#202221]"
          >
            البريد الالكترونى
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ادخال البريد الالكترونى"
              autoComplete="email"
              className="shadow-sm focus:ring-theme-primary focus:border-theme-primary block w-full sm:text-sm border-[#E9E9E9] rounded-sm placeholder-[#B3B9B9]"
            />
          </div>
        </div>
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
