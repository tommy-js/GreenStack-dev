import React from "react";

interface Props {
  ticker: string;
  image: string;
  colorImg: string;
}

export const TickerContainer: React.FC<Props> = (props) => {
  return (
    <div className="ticker_container">
      <p className="ticker_id">{props.ticker}</p>
      <div className="small_image_container">
        <img
          className="initial_login_image small_color_img"
          src={props.colorImg}
        />
        <img className="initial_login_image" src={props.image} />
      </div>
    </div>
  );
};
