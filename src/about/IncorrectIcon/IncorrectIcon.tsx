import React from "react";
import incorrect from "../../images/x_mark.png";

export const IncorrectIcon: React.FC = () => {
  return (
    <div className="indicator_icon">
      <img className="icon_img" src={incorrect} />
    </div>
  );
};
