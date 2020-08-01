import React from "react";
import Header from "./Header";

const AboutUs: React.FC = () => {
  return (
    <div id="about_us">
      <Header text="About Us" />
      <p>
        The purpose of this web app is to give people the ability to learn about
        and test the stock market without all the dangers and possible pitfalls
        of learning live. Starting out you will be given $1,000 virtual dollars,
        with which you can invest, execute options and calls, and trade as
        wildly as you would like.
      </p>
      <p>
        If you're interested in learning about investing, calls, options, or
        just the stock market in general, check out our awesome guides below.
      </p>
    </div>
  );
};

export default AboutUs;
