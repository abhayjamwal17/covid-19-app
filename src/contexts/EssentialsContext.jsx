import React, { createContext, useState } from "react";

export const EssentialsContext = createContext();

const EssentialsContextProvider = (props) => {
  var [resources, updateResources] = useState([]);
  return (
    <EssentialsContext.Provider value={{ resources, updateResources }}>
      {props.children}
    </EssentialsContext.Provider>
  );
};

export default EssentialsContextProvider;
