"use client";
import { Mail, Phone } from "lucide-react";
const Contact = () => {
  return (
    <main className="bg-[#272525] min-h-screen text-white px-10 md:px-24 py-24">
      <h1 className="text-[140px] md:text-[180px] leading-none font-light mb-3">
        <span className="text-red-500 font-light">C</span>ontact
      </h1>
      <h3 className="font-light text-3xl px-5">
        Wanna connect? <span className="text-indigo-400">Hit me up!</span>
      </h3>
      <div className="flex items-center px-5 mt-[7rem]">
        <Mail className="h-10 w-10 text-gray-400" />
        <span className="p-5 text-3xl font-light text-[#8AB1FF]">
          <a
            href="#"
            onClick={() =>
              window.navigator.clipboard.writeText("sarveshsrinath23@gmail.com")
            }
          >
            sarveshsrinath23@gmail.com
          </a>
        </span>
      </div>
      <div className="flex items-center px-5">
        <Phone className="h-10 w-10 text-gray-400" />
        <span className="p-5 text-3xl font-light text-[#8AB1FF]">
          <a
            href="#"
            onClick={() =>
              window.navigator.clipboard.writeText("+91-9972291378")
            }
          >
            +91 9972291378
          </a>
        </span>
      </div>
    </main>
  );
};

export default Contact;
