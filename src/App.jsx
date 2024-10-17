import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Create from "./Components/Create/Create.jsx";
import Update from "./Components/Update/Update.jsx";
import "./App.css";
const App = () => {
  return (
    <>
      <h3 className="app-heading">
        Simple React Bootstrap JSON-SERVER CRUD Application
      </h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
