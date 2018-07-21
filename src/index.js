import React, { Component } from "react";
import { render } from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import MiniDrawer from "./MiniDrawer";
import tileData from "./tileData";

const App = () => (
  <div>
    <CssBaseline />
    <MiniDrawer />
  </div>
);

render(<App />, document.getElementById("root"));
