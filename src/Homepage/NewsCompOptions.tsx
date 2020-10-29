import React from "react";
import SubmitPost from "../resolvers/SubmitPost";

interface Props {
  title: string;
  text: string;
  accompaniedURL: string;
}

const NewsCompOptions: React.FC<Props> = (props) => {
  function unsuccessfulEvent() {
    console.log("post not successful");
  }

  function successfulEvent() {
    console.log("post successful");
  }

  return (
    <div className="news_comp_options">
      <div className="news_comp_button">
        <SubmitPost
          title={props.title}
          text={props.text}
          accompaniedURL={props.accompaniedURL}
          buttonTitle="Post to timeline"
          unsuccessfulEvent={unsuccessfulEvent}
          successfulEvent={successfulEvent}
        />
      </div>
    </div>
  );
};

export default NewsCompOptions;
