import React from "react";
import { useParams } from "react-router-dom";
const UserDescription = () => {
  const { userId } = useParams();
  return <div>descrition about user {userId} </div>;
};

export default UserDescription;
