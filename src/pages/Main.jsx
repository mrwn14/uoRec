import React from "react";

const Main = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 flex-grow px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Hi! 👋
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Sick of jumping through hoops just to figure out when the next
            volleyball drop-in is or if the swimming pool's open? We feel you!
            That's why we created uoRec - your one-stop shop for all things
            recreation at uOttawa.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            No more clicking through endless pages. With uoRec, everything's
            right at your fingertips. Ready to ditch the hassle? Let's dive in!
            🏐💦
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
