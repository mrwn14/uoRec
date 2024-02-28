import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#353a40] border-gray-200 dark:bg-gray-900 border-b-2">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              onClick={() => navigate("/")}
              className="flex-shrink-0 flex items-center space-x-3 cursor-pointer"
            >
              {/* <img src="public\logo.png" className="h-10" alt="uoRec" /> */}
              <span className="text-2xl font-semibold whitespace-nowrap text-white">
                uoRec
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {/* <button
                className="px-3 py-2 flex items-center text-lg text-white hover:opacity-50 cursor-pointer"
                onClick={() => navigate("/Recreation")}
              >
                Recreation
              </button> */}
              <button
                className="px-3 py-2 flex items-center text-lg text-white hover:opacity-50 cursor-pointer"
                onClick={() => navigate("/Recreation")}
              >
                Recreation
              </button>
              <button
                className="px-3 py-2 flex items-center text-lg text-white hover:opacity-50 cursor-pointer"
                onClick={() => navigate("/Swimming")}
              >
                Swimming
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              className="block px-3 py-2 text-base text-white hover:opacity-50 cursor-pointer"
              onClick={() => navigate("/Recreation")}
            >
              Recreation
            </button>
            <button
              className="block px-3 py-2 text-base text-white hover:opacity-50 cursor-pointer"
              onClick={() => navigate("/Swimming")}
            >
              Swimming
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
