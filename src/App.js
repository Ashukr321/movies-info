import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Movies from "./pages/movie/Movies";
const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
