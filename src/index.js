import App from "./components/App";
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
