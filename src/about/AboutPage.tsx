import React from "react";
import AboutUs from "./AboutUs";
import Learn from "./Learn";
import NavBar from "../misc/NavBar";

const AboutPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Learn />
    </div>
  );
};

export default AboutPage;
