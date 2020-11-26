import React from "react";
import { TickerContainer } from "../TickerContainer/TickerContainer";
import apple from "../../images/apple_logo.png";
import apple_color from "../../images/apple_logo_color.png";
import microsoft from "../../images/windows_logo.png";
import microsoft_color from "../../images/windows_logo_color.png";
import shopify from "../../images/shopify_logo.png";
import shopify_color from "../../images/shopify_logo_color.png";
import twitter from "../../images/twitter_logo.png";
import twitter_color from "../../images/twitter_logo_color.png";
import amazon from "../../images/amazon_logo.png";
import amazon_color from "../../images/amazon_logo_color.png";
import facebook from "../../images/facebook_logo.png";
import facebook_color from "../../images/facebook_logo_color.png";
import walmart from "../../images/walmart_logo.png";
import walmart_color from "../../images/walmart_logo_color.png";
import tesco from "../../images/tesco_logo.png";
import tesco_color from "../../images/tesco_logo_color.png";
import starbucks from "../../images/starbucks_logo.png";
import starbucks_color from "../../images/starbucks_logo_color.png";
import mcdonalds from "../../images/mcdonalds_logo.png";
import mcdonalds_color from "../../images/mcdonalds_logo_color.png";
import slack from "../../images/slack_logo.png";
import slack_color from "../../images/slack_logo_color.png";
import citigroup from "../../images/citigroup_logo.png";
import citigroup_color from "../../images/citigroup_logo_color.png";
import visa from "../../images/visa_logo.png";
import visa_color from "../../images/visa_logo_color.png";
import volvo from "../../images/volvo_logo.png";
import volvo_color from "../../images/volvo_logo_color.png";
import netflix from "../../images/netflix_logo.png";
import netflix_color from "../../images/netflix_logo_color.png";
import dropbox from "../../images/dropbox_logo.png";
import dropbox_color from "../../images/dropbox_logo_color.png";

export const TickerList: React.FC = () => {
  const tickers = [
    {
      ticker: "AAPL",
      image: apple,
      colorImg: apple_color,
    },
    {
      ticker: "V",
      image: visa,
      colorImg: visa_color,
    },
    {
      ticker: "VLVLY",
      image: volvo,
      colorImg: volvo_color,
    },
    {
      ticker: "MSFT",
      image: microsoft,
      colorImg: microsoft_color,
    },
    {
      ticker: "SHOP",
      image: shopify,
      colorImg: shopify_color,
    },
    {
      ticker: "TWTR",
      image: twitter,
      colorImg: twitter_color,
    },
    {
      ticker: "FB",
      image: facebook,
      colorImg: facebook_color,
    },
    {
      ticker: "WMT",
      image: walmart,
      colorImg: walmart_color,
    },
    {
      ticker: "TSCDY",
      image: tesco,
      colorImg: tesco_color,
    },
    {
      ticker: "C",
      image: citigroup,
      colorImg: citigroup_color,
    },
    {
      ticker: "AMZ",
      image: amazon,
      colorImg: amazon_color,
    },
    {
      ticker: "SBUX",
      image: starbucks,
      colorImg: starbucks_color,
    },
    {
      ticker: "MCD",
      image: mcdonalds,
      colorImg: mcdonalds_color,
    },
    {
      ticker: "WORK",
      image: slack,
      colorImg: slack_color,
    },
    {
      ticker: "NFLX",
      image: netflix,
      colorImg: netflix_color,
    },
    {
      ticker: "DBX",
      image: dropbox,
      colorImg: dropbox_color,
    },
  ];

  return (
    <div id="ticker_list">
      {tickers.map((el: any) => (
        <TickerContainer
          ticker={el.ticker}
          image={el.image}
          colorImg={el.colorImg}
        />
      ))}
    </div>
  );
};
