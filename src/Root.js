import React, { useState } from "react";
import "./App.css";
import { store } from "./appredux/store";
import { Provider } from "react-redux";
import AppRedux from "./AppRedux";

export default function Root() {
  return (
    <Provider store={store}>
      <AppRedux />
    </Provider>
  );
}
