import React from "react";
import { Container } from "../common/container";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "../common/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Client from "~/utils/Client";
import { toast } from "react-toastify";

type MyFormValues = {
  email: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required("الايميل مطلوب").email("الايميل غير صحيح"),
});

export const Newsletter = () => {
  const initialValues: MyFormValues = { email: "" };

  return (
    <div className="flex flex-col bg-[#F7F7F7] justify-center items-center py-10 space-y-2">
      <span className="text-[#202221] text-lg">اشترك في النشرة البريدية </span>
      <span className="text-sm text-[#808686]">
        كن أول من يعلم عن كل جديد في عالم التجارة الإلكترونية
      </span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            await Client.post("subscribeNewsletter", {
              email: values.email,
            });
            toast.success("تم الاشتراك بنجاح");
          } catch (error: any) {
            toast.error(error?.message);
          }
          actions.setSubmitting(false);
        }}
      >
        <Form
          action=""
          className="flex flex-col sm:flex-row items-center justify-center"
        >
          <div className="mt-1 sm:mt-0 relative rounded-sm shadow-sm w-[310px]">
            <Field
              type="email"
              name="email"
              id="email"
              className="focus:ring-theme-primary focus:border-theme-primary block h-10 w-full pr-10 sm:text-sm border-[#F7F7F7] rounded-sm placeholder-[#B3B9B9]"
              placeholder="البريد الإلكتروني"
            />

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <AiOutlineMail
                className="h-5 w-5 text-theme-secondary"
                aria-hidden="true"
              />
            </div>
          </div>

          <Button
            type="submit"
            btnType="primary"
            className="mt-3 sm:mt-0 w-full sm:w-[166px] "
          >
            اشتراك
          </Button>
          <div className="text-red-400 font-medium flex justify-center items-center mr-4 mx-auto mt-2 py-1 text-sm">
            <ErrorMessage name="email" className="bg-red-300" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
