import React, { useState, useEffect, useContext } from "react";
import Header from "../User/Header";
import OwnedStocks from "./OwnedStocks";
import NavBar from "../navigation/NavBar";
import LiquidCapital from "./LiquidCapital";
import WatchStocks from "./WatchStocks";
import { LoadingUser } from "../login/LoadingUser";
import UserLoginAuthSubresolver from "../resolvers/UserLoginAuthSubresolver";
import { Route } from "react-router-dom";
import { userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { queryToken } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import companyProfiles from "../companies/companyProfiles";

import { statusContext } from "../AppMain/App";

const Portfolio: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userWatch, setUserWatch] = useState(userVal.watchlist);
  const [userStocks, setUserStocks] = useState([] as any);

  const [passToken, { data, loading }] = useLazyQuery(queryToken);

  useEffect(() => {
    if (status) {
      let stocks = userVal.stocks;
      let arr = [];
      for (let i = 0; i < stocks.length; i++) {
        let found = companyProfiles.find(
          (el: any) => el.stockId === stocks[i].stockId
        );
        if (found) {
          let obj = { ...found, shares: stocks[i].shares };
          arr.push(obj);
        }
      }
      setUserStocks(arr);
    }
  }, []);

  useEffect(() => {
    console.log("user stocks: ");
    console.log(userStocks);
  }, [userStocks]);

  useEffect(() => {
    console.log("homepage status: " + status);
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
    console.log("homepage status: " + status);
    if (status === false) {
      let sessionToken = sessionStorage.getItem("Token");
      if (data && data.token) {
        console.log(data);
        console.log("session token same as data token");
        setUserId(data.token.userId);
        setLoadingInUser(true);
      }
    }
  }, data);

  function loggedIn() {
    setStatus(true);
    setLoadingInUser(false);
  }

  function renderLoading() {
    if (status === true) {
      return (
        <div>
          <NavBar />
          <div id="portfolio">
            <Route exact path="/portfolio">
              <Header text="Your Portfolio" />
              <LiquidCapital />
              <OwnedStocks owned={userStocks} />
              <Header text="Watch-list" />
              <WatchStocks stocks={userWatch} />
              <Header text="Profile" />
            </Route>
          </div>
        </div>
      );
    }
  }

  function returnLoadingInUser() {
    if (loadingInUser === true) {
      return (
        <div className="render_loading">
          <div className="drop_loading_block">
            <LoadingUser />
            <UserLoginAuthSubresolver id={userId} loggedIn={loggedIn} />
          </div>
        </div>
      );
    } else {
      return <div>{renderLoading()}</div>;
    }
  }

  return <div>{returnLoadingInUser()}</div>;
};

export default Portfolio;
