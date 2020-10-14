import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Table from "./Table";
import Essentials from "./Essentials";
import TableContextProvider from "../contexts/TableContext";
import EssentialsContextProvider from "../contexts/EssentialsContext";

function App() {
  return (
    <TableContextProvider>
      <EssentialsContextProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Table} />
            <Route exact path="/essentials" component={Essentials} />
          </div>
        </BrowserRouter>
      </EssentialsContextProvider>
    </TableContextProvider>
  );
}

export default App;
