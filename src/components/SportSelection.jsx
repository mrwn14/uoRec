import React, { useState, useEffect } from "react";

const SportSelection = (props) => {
  const {
    selected: propSelected,
    setSelected: propSetSelected,
    rec: propRec,
  } = props;
  const [selected, setSelected] = useState(propSelected);
  const [rec, setRec] = useState(propRec);

  useEffect(() => {
    setSelected(propSelected);
    setRec(propRec);
  }, [propSelected, propRec]);

  const handleChange = (event) => {
    propSetSelected(event.target.value);
  };

  const swims = [
    "Adult Lane Swim (25m)",
    "Adult Lane Swim (50m) - Nage en longeur",
    "Leisure Swim",
    "Womens Only Swim",
  ];

  const sports = [
    "Badminton",
    "Basketball",
    "Hockey",
    "Martial Arts Practice",
    "Montpetit Dance Studio",
    "Pickleball",
    "Skating",
    "Soccer",
    "Volleyball",
  ];

  const options = rec === "rec" ? sports : swims;

  return (
    <>
      <form className="max-w-sm ms-10 mb-5 md:mb-0 pt-10 pb-2 pe-8">
        <label
          htmlFor="sports"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a sport
        </label>

        <select
          id="sports"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selected}
          onChange={handleChange}
        >
          <option value="">Choose your sport</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default SportSelection;
