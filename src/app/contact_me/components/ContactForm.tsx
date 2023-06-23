"use client";
import { ChangeEvent, ChangeEventHandler, FC, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const ContactForm: FC = () => {
  const skeletonForm = {
    user_email: "",
    user_name: "",
    user_message: "",
  };

  const serviceID: string = process.env.NEXT_PUBLIC_SERVICE_ID || "";
  const templateID: string = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
  const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  const [contactForm, setContactForm] = useState(skeletonForm);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      emailjs
        .send(serviceID, templateID, contactForm, publicKey)
        .then((res) => {
          setSuccess(true);
          setContactForm(skeletonForm)
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
            Get in touch
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            {
              "I would love to hear from you and I will get back to you as soon as possible!"
            }
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
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
                name="user_email"
                value={contactForm.user_email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
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
                name="user_name"
                value={contactForm.user_name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
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
                name="user_message"
                value={contactForm.user_message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave me a message..."
                required
              ></textarea>
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
