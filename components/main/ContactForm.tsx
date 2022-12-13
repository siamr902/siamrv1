import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import {
  requiredToast,
  alphaToast,
  emailPatternToast,
  successToast
} from "../../utils/toast-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    emailjs
      .sendForm(
        "service_8djpgtp",
        "template_xvrqpgi",
        formRef.current as HTMLFormElement,
        "2_sOtJJ0YFG7gFxRU"
      )
      .then(() => {
        successToast();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onError: SubmitErrorHandler<FormData> = () => {
    Object.keys(errors).forEach((error) => {
      const errorObj = errors[error as keyof typeof errors];
      if (errorObj?.type === "required") {
        requiredToast(
          error,
          errorObj.ref as HTMLInputElement | HTMLTextAreaElement
        );
      } else if (errorObj?.type === "pattern") {
        error === "firstName" || error === "lastName"
          ? alphaToast()
          : emailPatternToast();
      }
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-col space-y-2 w-fit"
      onSubmit={handleSubmit(onSubmit, onError)}
      ref={formRef}
    >
      <div className="flex space-x-2">
        <input
          type="text"
          className="w-1/2 contact-form"
          placeholder="First Name"
          {...register("firstName", { required: true, pattern: /^[a-z]+$/gi })}
        />
        <input
          type="text"
          className="w-1/2 contact-form"
          placeholder="Last Name"
          {...register("lastName", { pattern: /^[a-z]+$/gi })}
        />
      </div>
      <input
        type="email"
        className="contact-form"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /.*(@gmail)\.(?=com)/g,
        })}
      />
      <textarea
        className="h-80 md:w-[700px] lg:w-[52vw] xl:w-[700px] resize-none outline-none p-5 font-brush text-center text-4xl shadow-dim dark:bg-[#272727] bg-zinc-100"
        placeholder="Message"
        {...register("message", { required: true })}
      />
      <button
        type="submit"
        className="p-4 text-gray-500 dark:text-gray-400 font-brush text-3xl sm:text-4xl shadow-dim dark:bg-[#272727] bg-zinc-100 active:scale-95 transiton duration-200 ease-out"
      >
        SEND
      </button>
    </motion.form>
  );
};

export default ContactForm;
