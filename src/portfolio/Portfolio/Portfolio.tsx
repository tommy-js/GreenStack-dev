import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../navigation/NavBar";
import { LoadingUser } from "../../login/LoadingUser";
import UserLoginAuthSubresolver from "../../resolvers/UserLoginAuthSubresolver";
import PortfolioBody from "../PortfolioBody";
import { Route } from "react-router-dom";
import { browserHist } from "../../AppMain/history";
import { queryToken } from "../../queries/queries";
import { useLazyQuery } from "react-apollo";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { returnStocks } from "./index";

import { statusContext } from "../../AppMain/App";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  stocks: StockItem[];
}

const PortfolioRender: React.FC<Redux> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [currentPrice, setCurrentPrice] = useState([] as any);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [userStocks, setUserStocks] = useState([] as any);

  const [passToken, { data, loading }] = useLazyQuery(queryToken);

  useEffect(() => {
    if (status) {
      let arr = returnStocks(props.stocks);
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
              <PortfolioBody />
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

export const Portfolio = connect(mapStateToProps)(PortfolioRender);
