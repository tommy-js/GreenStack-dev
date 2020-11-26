import React, { useContext, useEffect } from "react";
import { browserHist } from "../../AppMain/history.js";
import { statusContext } from "../../AppMain/App/App";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { UserCommentItem } from "../../types/types";

interface Redux {
  comments: UserCommentItem[];
}

interface Props extends Redux {
  deleteCommentUserMutation: (variables: object) => void;
  deleteCommentStockMutation: (variables: object) => void;
}

const UserProfileCommentsRender: React.FC<Props> = (props) => {
  const { status } = useContext(statusContext);

  useEffect(() => {
    if (status === false) browserHist.push("/login");
  }, []);

  function checkComments() {
    if (props.comments.length > 0) return null;
    else return <h2>No Comments So Far...</h2>;
  }

  return <React.Fragment>{checkComments()}</React.Fragment>;
};

export const UserProfileComments = connect(mapStateToProps)(
  UserProfileCommentsRender
);
