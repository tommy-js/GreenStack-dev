import React, { useEffect, useState } from "react";
import SplitView from "./SplitView";
import SingleView from "./SingleView";

const SubscribePage: React.FC = () => {
  const [viewInfo, setViewInfo] = useState(false);

  function headerPassIn() {
    setViewInfo(!viewInfo);
    // console.log(passedInfo);
  }

  if (viewInfo === true) {
    return <SplitView headerPassIn={headerPassIn} />;
  } else {
    return <SingleView headerPassIn={headerPassIn} />;
  }
};

export default SubscribePage;
