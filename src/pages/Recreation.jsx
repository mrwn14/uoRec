import React from "react";
import MyCalendar from "../components/MyCalendar";
import SportSelection from "../components/SportSelection";

const Recreation = (props) => {
  let { selected, setSelected, rec } = props;
  return (
    <>
      <div className="flex-grow">
        <SportSelection
          selected={selected}
          setSelected={setSelected}
          rec={rec}
        />
        <MyCalendar selected={selected} rec={rec} />
      </div>
    </>
  );
};

export default Recreation;
