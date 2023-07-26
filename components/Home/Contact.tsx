
import React from "react";
import { HiMail, HiMap, HiPhone } from "react-icons/hi";

export default function Contact() {
  return (
    <div id="contact">
      <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-brand-main font-bold text-center">
            Contact us
          </h1>

          <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2  mt-10 gap-6">
            <div className="bg-slate-100 border rounded-md border-gray-200 h-64 flex flex-col items-center">
              <div
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                role="img"
                aria-label="phone number"
              >
                <HiPhone className="h-12 w-12" />
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Phone
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-800">
                +60123456789
              </p>
            </div>
            <div className="bg-slate-100 border rounded-md border-gray-200 h-64 flex flex-col items-center ">
              <div
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center "
                role="img"
                aria-label="email"
              >
                <HiMail className="h-12 w-12" />
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Email
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-800">
                info@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}