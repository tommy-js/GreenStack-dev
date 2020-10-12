import React from "react";
import correct from "../../images/checkmark.png";
import incorrect from "../../images/x_mark.png";

export const CorrectIcon: React.FC = () => {
  return (
    <div className="indicator_icon">
      <img className="icon_img" src={correct} />
    </div>
  );
};

export const IncorrectIcon: React.FC = () => {
  return (
    <div className="indicator_icon">
      <img className="icon_img" src={incorrect} />
    </div>
  );
};
