import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div>
      <p className="about_paragraph">
        TIKR is a stock market simulator and learning platform. Our primary goal
        is to provide those interested in the market with a way to learn and
        experiment easily and without risk. We have also implemented a great
        social system so that you can easily engage with others. Comment on
        stocks and trades, follow others and gain followers yourself, and post
        your own predictions and stock recommendations so that others can learn
        from you.
      </p>
      <p className="about_paragraph">
        Interested in learning more? One of the best features of TIKR is its
        interactive tutorials, covering subjects across a great breadth of
        complexity. Want to learn what a "share" is? We have a tutorial for
        that. Looking to learn how to trade options and get started with the
        crazier side of the market? We've got you covered. Get through all the
        tutorials and we'll give you a "verified trader" badge, showing the rest
        of them that you really know your stuff!
      </p>
      <p className="about_paragraph">
        The best part of TIKR is that once you have a firm grasp of a concept,
        you can easily go and test it out, all without risking a single penny.
        This will prepare you for the wild-west that is the real stock market,
        giving you the preparation you'll need to get out there and build
        yourself a better future!
      </p>
      <h2 className="learn_page_header">
        So what are you waiting for? Get learning!
      </h2>
    </div>
  );
};

export default AboutUs;
