import React, { useContext } from "react";
import { userContext } from "../AppMain/App";

const NotificationIcon: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);
  return <div></div>;
};
