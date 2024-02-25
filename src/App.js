import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
