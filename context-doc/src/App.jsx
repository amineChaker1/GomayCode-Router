import React, { useState } from "react";

import "./App.css";
import Component1 from "./components/Component1";
// Context hook provides a way to pass data through the component tree without having to pass props down manually at every level
// Steps of using the context
/* 1 - Create the context
   2 - use the provider to provide the data (props) for the component
   3- conume the conxet value by exporting it */

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Amine"}>
        <ChannelContext.Provider value={"Protech"}>
          <Component1 />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
