import React, { useState, useEffect, useContext } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { addCommentStockMutation } from "../queries/queries.js";

interface Props {
  addCommentStockMutation: (variables: object) => any;
  stockId: string;
}

const AddCommentToStock: React.FC<Props> = (props) => {
  const [text, setText] = useState("");

  function pushData() {
    let token = sessionStorage.getItem("Token");
    props
      .addCommentStockMutation({
        variables: {
          stockId: props.stockId,
          token: token,
          text: text,
        },
      })
      .then((res: any) => {
        console.log(res);
        setText("");
      })
      .catch((err: any) => console.log(err));
  }

  return (
    <div id="comment_input">
      <textarea
        id="comment_textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => pushData()}>Submit</button>
    </div>
  );
};

export default compose(
  graphql(addCommentStockMutation, { name: "addCommentStockMutation" })
)(AddCommentToStock);
