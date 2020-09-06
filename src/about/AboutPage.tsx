import React, { useEffect, useContext } from "react";
import AboutUs from "./AboutUs";
import Learn from "./Learn";
import NavBar from "../misc/NavBar";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

const AboutPage: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <AboutUs />
      <Learn />
    </div>
  );
};

export default AboutPage;
