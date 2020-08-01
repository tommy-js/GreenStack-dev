import React, { useEffect, useState } from "react";
import timestampFunction from "./timestampFunction";

interface Props {
  user: string;
  comment: string;
  timestamp: number;
  predictedPrice?: number;
  recommendation?: string;
}

const StockComment: React.FC<Props> = (props) => {
  const [time, setTime] = useState();

  function bottomContainer() {
    if (props.predictedPrice) {
      return (
        <div id="stock_comment_bottom_container">
          <p className="inline_text">Expected Price: {props.predictedPrice}</p>
          <p className="inline_text">Recommendation: {props.recommendation}</p>
        </div>
      );
    } else return null;
  }

  useEffect(() => {
    setTime(timestampFunction(props.timestamp));
  }, []);

  return (
    <div id="stock_comment">
      <h4>{props.user}</h4>
      <p>{props.comment}</p>
      <p>posted {props.timestamp}</p>
      <p>Time: {time}</p>
      {bottomContainer()}
    </div>
  );
};

export default StockComment;
