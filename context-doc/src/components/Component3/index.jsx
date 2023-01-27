import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../../App";
const Component3 = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      your name is {user} and your channel is {channel}{" "}
    </div>
  );
};

export default Component3;
