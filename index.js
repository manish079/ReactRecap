import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {},
  React.createElement("h1", { id: "heading" }, "Happy Diwali 🪔")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
