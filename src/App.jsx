import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyCalendar from "./components/MyCalendar";
import Navigation from "./components/Navigation";
import SportSelection from "./components/SportSelection";
import Main from "./pages/Main";
import Recreation from "./pages/Recreation";
import Swimming from "./pages/Swimming";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";

function App() {
  const [selectedRec, setSelectedRec] = useState("");
  const [selectedSwi, setSelectedSwi] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navigation />
        <Routes>
          <Route path="" element={<Main />} />
          <Route
            path="Recreation"
            element={
              <Recreation
                selected={selectedRec}
                setSelected={setSelectedRec}
                rec="rec"
              />
            }
          />
          <Route
            path="Swimming"
            element={
              <Swimming
                selected={selectedSwi}
                setSelected={setSelectedSwi}
                rec="swi"
              />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
