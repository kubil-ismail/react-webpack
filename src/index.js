import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { hot } from "react-hot-loader/root";

import "./index.css";

const render = (Component) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));
