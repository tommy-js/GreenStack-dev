import React, { useContext, useEffect } from "react";
import { statusContext } from "./App";
import { browserHist } from "./history.js";

const Page404: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div>
      <h1>Oops! Wrong turn! 404</h1>
    </div>
  );
};

export default Page404;
