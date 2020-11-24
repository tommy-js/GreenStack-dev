import React, { useContext, useEffect } from "react";
import { statusContext } from "../App/App";
import { browserHist } from "../history.js";

export const Page404: React.FC = () => {
  const { status } = useContext(statusContext);

  useEffect(() => {
    if (status === false) browserHist.push("/login");
  }, []);

  return <h1>Oops! Wrong turn! 404</h1>;
};
