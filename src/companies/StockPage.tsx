import React, { useContext, useState, useEffect } from "react";
import CompanyInformationBlock from "../Homepage/CompanyInformationBlock";
import CompanyOptions from "./CompanyOptions";
import CompanyNewsBlock from "../misc/CompanyNewsBlock.js";
import CompanyComments from "./CompanyComments";
import NavBar from "../misc/NavBar";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  title: string;
  ticker: string;
  stockId: number;
}

const StockPage: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [priceData, setPriceData] = useState("Loading Price...");

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.finnhub.io?token=bsacdsnrh5rfukjh2osg"
    );

    // Connection opened -> Subscribe
    socket.addEventListener("open", function (event) {
      socket.send(JSON.stringify({ type: "subscribe", symbol: props.ticker }));
    });

    // Listen for messages
    socket.addEventListener("message", callSocket);

    function callSocket(event: any) {
      console.log("Message from server ", event.data);
      let val = JSON.parse(event.data);
      if (val.type === "trade") {
        let newval = JSON.stringify(val.data[0].p);
        setPriceData(newval);
      } else {
        setPriceData("Error");
      }
      unsubscribe(props.ticker);
    }

    // Unsubscribe
    var unsubscribe = function (symbol: string) {
      console.log(symbol);
      socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
      socket.removeEventListener("message", callSocket);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <CompanyInformationBlock title={props.title} price={priceData} />
      <CompanyOptions
        title={props.title}
        ticker={props.ticker}
        stockId={props.stockId}
      />
      <CompanyNewsBlock title={props.title} />
      <CompanyComments
        title={props.title}
        ticker={props.ticker}
        stockId={props.stockId}
      />
    </div>
  );
};

export default StockPage;
