import React, { createContext, useState } from "react";

export const TableContext = createContext();

const TableContextProvider = (props) => {
  var [state, updateState] = useState([]);

  return (
    <TableContext.Provider value={{ state, updateState }}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
