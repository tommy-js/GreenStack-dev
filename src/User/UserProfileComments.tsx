import React, { useContext, useEffect } from "react";
import { browserHist } from "../AppMain/history.js";
import { statusContext } from "../AppMain/App";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  comments: any;
}

interface Props extends Redux {
  deleteCommentUserMutation: (variables: object) => void;
  deleteCommentStockMutation: (variables: object) => void;
}

const UserProfileComments: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  function checkComments() {
    if (props.comments.length > 0) {
      return <div></div>;
    } else {
      return (
        <div>
          <h2>No Comments So Far...</h2>
        </div>
      );
    }
  }

  return <div>{checkComments()}</div>;
};

export default connect(mapStateToProps)(UserProfileComments);
