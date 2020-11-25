import React, { useState, useEffect } from "react";

interface Props {
  bio: string;
}

export const BioCounter: React.FC<Props> = (props) => {
  const [textColor, setTextColor] = useState("green");

  useEffect(() => {
    if (props.bio.length <= 50) setTextColor("green");
    else if (props.bio.length > 50 && props.bio.length <= 100)
      setTextColor("orange");
    else if (props.bio.length > 100) setTextColor("red");
  }, [props.bio]);

  return (
    <div style={{ color: textColor }} id="bio_counter">
      {props.bio.length}/120
    </div>
  );
};
