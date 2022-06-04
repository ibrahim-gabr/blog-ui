import React, { useState } from "react";
import Input from "./input";
import TextArea from "./textarea";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Client from "~/utils/Client";

type MyFormValues = {
  name: string;
  content: string;
  email: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("الاسم مطلوب"),
  content: Yup.string().required("التعليق مطلوب"),
  email: Yup.string().required("الايميل مطلوب").email("الايميل غير صحيح"),
});

const CommentsForm = () => {
  const initialValues: MyFormValues = { name: "", email: "", content: "" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        console.log({ values, actions });
        try {
          await Client.post("createComment", {
            comment: values,
          });
        } catch (error) {}
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <div className="mt-5 flex flex-col space-y-4">
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

          <button
            type="submit"
            className="mt-3 sm:mt-0 w-full sm:w-[242px] inline-flex h-10 justify-center items-center px-4 py-2 border border-transparent text-sm font-normal rounded-sm shadow-sm text-white bg-theme-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary"
          >
            أضف تعليقك
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default CommentsForm;
