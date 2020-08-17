import React, { useContext, useState } from "react";
import { userContext } from "../AppMain/App";
import hat from "./images/hat.png";
import money from "./images/money.png";
import ImageBlock from "../misc/ImageBlock";
import StandardButton from "../StandardButton";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { setProfileImageMutation } from "../queries/queries.js";

interface Image {
  name: string;
  id: number;
}

interface Props {
  setProfileImageMutation: (variables: object) => void;
}

const ChooseProfileImage: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [chosenImage, setChosenImage] = useState(0);
  const [profileImages, setProfileImages] = useState([
    { name: "hat", id: 0 },
    { name: "money", id: 1 },
  ]);

  function setImg(id: number) {
    setChosenImage(id);
  }

  function acceptImage() {
    let arr = profileImages.find((el) => el.id === chosenImage);
    console.log(typeof chosenImage);
    if (arr) {
      let val = arr.name;
      props.setProfileImageMutation({
        variables: {
          userId: userVal.userId,
          profileImage: val,
        },
      });
    }
  }

  return (
    <div>
      {profileImages.map((el: Image) => (
        <ImageBlock image={el.name} id={el.id} setImg={setImg} />
      ))}
      <StandardButton text="Accept" passFunction={acceptImage} />
      <input value={chosenImage} />
    </div>
  );
};

export default compose(
  graphql(setProfileImageMutation, { name: "setProfileImageMutation" })
)(ChooseProfileImage);
