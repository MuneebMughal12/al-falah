import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// pages
import  Home  from "./Pages/Home.jsx";



export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen  text-white relative">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
