import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Helmet } from "react-helmet";
import About from "./Components/About/About";
import Services from "./Components/Servicea/Services";

export default function App() {
  useEffect(() => {
    window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
      setShowBtn(true)
    }else{
      setShowBtn(false)
    }
    })
    
    }, [])
    const [showBtn, setShowBtn] = useState(true)
    
      return <>
      <div id="up"></div>
    
    <Helmet>
        <meta name="description" content="nested" />
        <title>My Portofilio</title>
      </Helmet>
      {showBtn?<div

className="container">
  <div className="row">
  <a className="up" href="#up">
  <i class="fa-solid fa-angles-up"></i>
  </a>

  </div>
</div>:""
}

      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects/>
      <Contact />
      <Footer />
      
    </>
  
}