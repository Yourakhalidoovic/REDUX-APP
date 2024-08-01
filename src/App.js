import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Provider store={store}>
      <Login />
      <Home />
    </Provider>
  );
};

export default App;
