import React, { Component } from "react";
import { render } from "react-dom";
import MiniDrawer from "./MiniDrawer";
import tileData from "./tileData";

const App = () => (
  <div>
    <MiniDrawer />
  </div>
);

render(<App />, document.getElementById("root"));
