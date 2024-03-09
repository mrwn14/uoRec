import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const MyCalendar = (props) => {
  const {
    selected: propSelected,
    setSelected: propSetSelected,
    rec: propRec,
  } = props;
  const [events, setEvents] = useState([]);
  let allEvents = [];
  const [view, setView] = useState("week");
  const [rec, setRec] = useState(propRec);

  const firebaseConfig = {
    apiKey: "AIzaSyCfTOWFHI05-OwM-W9dzoQLB5x8H8HI654",
    authDomain: "uorec-2a7d3.firebaseapp.com",
    databaseURL: "https://uorec-2a7d3-default-rtdb.firebaseio.com",
    projectId: "uorec-2a7d3",
    storageBucket: "uorec-2a7d3.appspot.com",
    messagingSenderId: "960294492514",
    appId: "1:960294492514:web:2319d19419d6454fbdf43b",
    measurementId: "G-VSWXW9S5GM",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    setRec(propRec);
    const fetchData = async () => {
      try {
        if (props.selected !== 0) {
          let databaseRef;
          if (rec === "swi") {
            databaseRef = ref(db, "Swimming/" + props.selected);
          } else {
            databaseRef = ref(db, "Recreation/" + props.selected);
          }
          const snapshot = await get(databaseRef);
          const data = snapshot.val();
          const newEvents = Object.keys(data).map((key) => ({
            title: data[key].location,
            start: new Date(
              data[key].year,
              data[key].month - 1,
              data[key].day,
              data[key].starHour,
              data[key].startMinute
            ),
            end: new Date(
              data[key].year,
              data[key].month - 1,
              data[key].day,
              data[key].endHour,
              data[key].endMinute
            ),
          }));
          setEvents(newEvents);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [db, props.selected, rec]);

  const onView = (newView) => {
    if (newView === "week") {
      setView(newView);
    }
  };

  const backgroundEventStyle = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderColor: "#000",
    borderWidth: "2px",
  };

  return (
    <div className="mx-4 md:mx-10 pb-16">
      <Calendar
        localizer={localizer}
        views={["week"]}
        view={view}
        onView={onView}
        events={events}
        min={moment().startOf("week").set({ hour: 7, minute: 0 }).toDate()}
        max={moment()
          .startOf("week")
          .add(6, "days")
          .set({ hour: 23, minute: 0 })
          .toDate()}
        backgroundEventWrapperStyle={backgroundEventStyle}
      />
    </div>
  );
};

export default MyCalendar;
