"use client";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  useState,
} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

type ContactFormDetails = {
  user_email: string;
  user_name: string;
  user_message: string;
};

const ContactForm: FC = () => {
  const skeletonForm = {
    user_email: "",
    user_name: "",
    user_message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormDetails>();

  const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const serviceID: string = process.env.NEXT_PUBLIC_SERVICE_ID || "";
  const templateID: string = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
  const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail: SubmitHandler<ContactFormDetails> = (data) => {
    setIsSending(true);
    try {
      emailjs.send(serviceID, templateID, data, publicKey).then((res) => {
        setSuccess(true);
        reset();
        setTimeout(() => {
          setSuccess(false);
          setIsSending(false);
        }, 2000);
      });
    } catch (e) {
      setError(true);
      setTimeout(() => {
        setError(false);
        setIsSending(false);
      }, 2000);
    }
  };

  return (
    <>
      {success && (
        <div className="alert alert-success absolute top-5 w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Email sent!</span>
        </div>
      )}
      {error && (
        <div className="alert alert-error absolute top-5 w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Something went horribly wrong!</span>
        </div>
      )}
      <div
        id="contactForm"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-75 mx-6 lg:mx-0"
      >
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              <Typewriter
                cursor
                loop={1}
                typeSpeed={70}
                words={["Get in touch"]}
              />
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              {
                "I would love to hear from you and I will get back to you as soon as possible!"
              }
            </p>
            <form className="space-y-8" onSubmit={handleSubmit(sendEmail)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@gmail.com"
                  {...register("user_email", {
                    required: {
                      value: true,
                      message: "Please enter your email",
                    },
                    pattern: {
                      value: EMAIL_PATTERN,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.user_email?.message && (
                  <span className="inline-flex text-sm text-red-700">
                    {errors.user_email.message}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Doe"
                  {...register("user_name", {
                    required: {
                      value: true,
                      message: "Please enter your full name",
                    },
                  })}
                />
                {errors.user_name?.message && (
                  <span className="inline-flex text-sm text-red-700">
                    {errors.user_name.message}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave me a message..."
                  {...register("user_message", {
                    required: {
                      value: true,
                      message: "Please enter a message",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Message too long",
                    },
                  })}
                />
                {errors.user_message?.message && (
                  <span className={`inline-flex text-sm text-red-700`}>
                    {errors.user_message.message}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </div>
              <div className="flex justify-around">
                <Link
                  href={"/"}
                  className="bg-violet-700 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded-full"
                >
                  Go Back
                </Link>
                <button
                  type="submit"
                  className={`${
                    isSending ? "btn-disabled" : ""
                  } bg-violet-700 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded-full`}
                >
                  {isSending ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactForm;
