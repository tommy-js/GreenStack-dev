import React, { useEffect, useContext } from "react";
import NavBar from "../misc/NavBar";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  data: string[];
}

const LearnPage: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div id="centering_container">
        {props.data.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
