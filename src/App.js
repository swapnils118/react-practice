import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/" element={<Basic />} />
        <Route path="/advance" element={<Advance />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
