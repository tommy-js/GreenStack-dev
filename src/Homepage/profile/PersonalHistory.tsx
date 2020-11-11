import React, { useContext } from "react";
import HistoryElement from "./HistoryElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Redux {
  history: any;
}

const PersonalHistory: React.FC<Redux> = (props) => {
  return (
    <div>
      <h2 id="personal_history_header">History</h2>
      {props.history.map((el: any) => (
        <HistoryElement
          style={el.style}
          text={el.text}
          timestamp={el.timestamp}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(PersonalHistory);
