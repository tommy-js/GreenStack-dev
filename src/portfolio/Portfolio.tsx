import React, { useState, useEffect, useContext } from "react";
import Header from "../User/Header";
import OwnedStocks from "./OwnedStocks";
import NavBar from "../navigation/NavBar";
import Assets from "./Assets";
import WatchStocks from "./WatchStocks";
import PortfolioData from "./PortfolioData";
import { LoadingUser } from "../login/LoadingUser";
import UserLoginAuthSubresolver from "../resolvers/UserLoginAuthSubresolver";
import { Route } from "react-router-dom";
import { browserHist } from "../AppMain/history";
import { queryToken } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import companyProfiles from "../companies/companyProfiles";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

import { statusContext } from "../AppMain/App";

interface Redux {
  watchlist: any;
  stocks: any;
}

const Portfolio: React.FC<Redux> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [currentPrice, setCurrentPrice] = useState([] as any);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [userWatch, setUserWatch] = useState(props.watchlist);
  const [userStocks, setUserStocks] = useState([] as any);

  const [passToken, { data, loading }] = useLazyQuery(queryToken);

  useEffect(() => {
    if (status) {
      let stocks = props.stocks;
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
      if (data && data.token) {
        console.log(data);
        console.log("session token same as data token");
        setUserId(data.token.userId);
        setToken(data.token.token);
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
              <Assets />
              <OwnedStocks owned={userStocks} />
              <Header text="Watch-list" />
              <WatchStocks stocks={userWatch} />
              <PortfolioData />
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
            <UserLoginAuthSubresolver token={token} loggedIn={loggedIn} />
          </div>
        </div>
      );
    } else {
      return <div>{renderLoading()}</div>;
    }
  }

  return <div>{returnLoadingInUser()}</div>;
};

export default connect(mapStateToProps)(Portfolio);
