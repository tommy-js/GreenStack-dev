import React, { useEffect, useContext } from "react";
import AboutUs from "./AboutUs";
import Learn from "./Learn";
import NavBar from "../misc/NavBar";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { queryToken } from "../queries/queries";
import { useLazyQuery } from "react-apollo";

const AboutPage: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);
  const [passToken, { data, loading }] = useLazyQuery(queryToken);

  useEffect(() => {
    if (status === false) {
      let sessionToken = sessionStorage.getItem("Token");
      if (sessionToken) {
        passToken({
          variables: {
            token: sessionToken,
          },
        });
      } else {
        browserHist.push("/login");
      }
    }
  }, []);

  useEffect(() => {
    let sessionToken = sessionStorage.getItem("Token");
    if (data) {
      console.log(data);
      if (data.token.token === sessionToken) {
        setStatus(true);
      } else {
        setStatus(false);
        browserHist.push("/login");
      }
    }
  }, data);

  return (
    <div>
      <NavBar />
      <AboutUs />
      <Learn />
    </div>
  );
};

export default AboutPage;
