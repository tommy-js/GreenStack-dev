import React, { useEffect, useState, useContext } from "react";
import SplitView from "./SplitView";
import SingleView from "./SingleView";
import NavBar from "./misc/NavBar";
import { browserHist } from "./AppMain/history";

import { statusContext } from "./AppMain/App";

const SubscribePage: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);
  const [viewInfo, setViewInfo] = useState(false);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/");
    }
  }, []);

  function headerPassIn() {
    setViewInfo(!viewInfo);
    // console.log(passedInfo);
  }

  if (viewInfo === true) {
    return (
      <div>
        <NavBar />
        <SplitView headerPassIn={headerPassIn} />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <SingleView headerPassIn={headerPassIn} />
      </div>
    );
  }
};

export default SubscribePage;
