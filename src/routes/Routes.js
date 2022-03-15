import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Public from "../pages/Public/Public.jsx";
import Private from "../pages/Private/Private.jsx";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component = { Public }  path="/" exact />
      <Route component = { Private }  path="/private" />
    </BrowserRouter>
  );
};