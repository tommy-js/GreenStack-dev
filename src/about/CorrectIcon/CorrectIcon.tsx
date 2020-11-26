import React from "react";
import correct from "../../images/checkmark.png";

export const CorrectIcon: React.FC = () => {
  return (
    <div className="indicator_icon">
      <img className="icon_img" src={correct} />
    </div>
  );
};
