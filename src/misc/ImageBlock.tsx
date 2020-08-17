import React, { useState, useEffect } from "react";
import { images } from "../images.js";
import hat from "./images/hat.png";
import money from "./images/money.png";

interface Props {
  image: string;
  id: number;
  setImg: (id: number) => void;
}

const ImageBlock: React.FC<Props> = (props) => {
  const [img, setImg] = useState();

  useEffect(() => {
    let val = images.find((el) => el.name == props.image);
    console.log(images);
    console.log(val);
    if (val) {
      setImg(val.url);
    }
  }, []);

  return (
    <div onClick={() => props.setImg(props.id)} id="image">
      <img src={img} />
    </div>
  );
};

export default ImageBlock;
