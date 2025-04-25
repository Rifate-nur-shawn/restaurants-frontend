import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pages from "./components/Pages";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
