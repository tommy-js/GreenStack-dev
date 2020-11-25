import React, { useState } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { CommentSection } from "../CommentSection/CommentSection";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { useQuery } from "react-apollo";
import { tutorialQuery } from "../../queries/queries";

interface Props {
  progress: any;
  progressElements: any;
}

const LearnEtfPageRender: React.FC = () => {
  const { data } = useQuery(tutorialQuery, {
    variables: { id: 3 },
    pollInterval: 500,
  });
  const [comments, setComments] = useState([] as any);
  return (
    <div>
      <NavBar />
      <div className="learn_page">
        <h2 className="learn_page_header">ETFs and Index Funds</h2>
        <p className="learn_page_paragraph"></p>
        <CommentSection id="3" comments={comments} />
      </div>
    </div>
  );
};

export const LearnEtfPage = connect(mapStateToProps)(LearnEtfPageRender);
