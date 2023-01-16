import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import {
  requiredToast,
  alphaToast,
  emailPatternToast,
  successToast,
} from "../../../utils/toastForm";
import { FormCircles } from "../blurs/BlurCircles";
import Image from "next/image";
import cat from "../../../images/scarycat.svg";

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

  const formRef = useRef<HTMLFormElement>(null);
  const [catClicked, setCatClicked] = useState<boolean>(false);

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
      className="relative flex flex-col space-y-2 w-fit"
      onSubmit={handleSubmit(onSubmit, onError)}
      ref={formRef}
    >
      <FormCircles />
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
          pattern: /.+(@gmail)\.(?=com)/g,
        })}
      />
      <textarea
        className="z-10 h-80 md:w-[700px] lg:w-[52vw] xl:w-[700px] resize-none outline-none p-5 font-ui text-center text-xl sm:text-2xl sm:shadow-dimmer dark:sm:shadow-dim dark:bg-[#272727] bg-zinc-100"
        placeholder="Message"
        {...register("message", { required: true })}
      />
      <button
        type="submit"
        className="p-4 text-gray-500 dark:text-gray-400 font-ui text-xl sm:text-2xl sm:shadow-dimmer dark:sm:shadow-dim dark:bg-[#272727] bg-zinc-100 active:scale-95 transiton duration-200 ease-out"
      >
        Send
      </button>
      <AnimatePresence mode="wait">
        {!catClicked ? (
          <motion.div
            className="hidden sm:inline-flex absolute bottom-[40%] -left-[7%] -rotate-[90deg] cursor-pointer"
            whileHover={{ x: -82 }}
            animate={{ rotate: -90 }}
            onClick={() => setCatClicked(true)}
            exit={{ opacity: 0 }}
            transition={{ x: { duration: 1, ease: "anticipate" }, opacity: { duration: 3 } }}
          >
            <Image alt="cat" src={cat} width={150} height={150} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.form>
  );
};

export default ContactForm;
