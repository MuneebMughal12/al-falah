import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import ScrollToTopButton from "./Components/ScrollToTopButton.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// pages
import  Home  from "./Pages/Home.jsx";




export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen  text-white relative">
        <Navbar />
        <ScrollToTopButton/>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}
