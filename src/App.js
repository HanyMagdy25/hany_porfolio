import React from "react";
import './App.scss';

import About from "./container/About/About";
import Header from "./container/Header/Header";
import Work from "./container/Work/Work";
import Testimonials from "./container/Testimonials/Testimonials";
import Skills from "./container/Skills/Skills";
import Footer from "./container/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonials/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
