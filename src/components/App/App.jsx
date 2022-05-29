import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MapPage from "../MapPage/MapPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  );
}
export default App;
