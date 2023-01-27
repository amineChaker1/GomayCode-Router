/* to get rid of a component functuionalities after it 
disappers from the dom you need to use a cleanup function and its equivalent to 
componentWillUnmount*/
import React, { useState } from "react";
import EffectOnce from "../EffectOnce";

const CleanUp = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        Toogle Mouse Coordinator
      </button>
      {display && <EffectOnce />}
    </div>
  );
};

export default CleanUp;
