import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../index.css";

const ContactUs = () => {
  const { register, reset, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      reset();
      setIsSubmitted(false);
    }
  }, [isSubmitted, reset]);

  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-500">We are eager to hear from you. Please reach out to us.</p>
          </div>
          <div className="mt-16 lg:mt-20">
            <section className="text-gray-600 body-font relative">
              <div className="container mx-auto">
                <form>
                  <div className="md:w-1/2 lg:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name:</label>
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email:</label>
                          <input
                            {...register("email", { required: true })}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message:</label>
                          <textarea
                            {...register("message", { required: true })}
                            id="message"
                            name="message"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          ></textarea>
                          {errors.message && <span className="text-red-500">This field is required</span>}
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <input
                          type="submit"
                          value="Send"
                          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
