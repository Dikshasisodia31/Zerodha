// where we are wrapping all the elements of the home section

import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Education";
import Open from "../Openaccount";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Pricing from "./Pricing";
function HomePage() {
    return ( 
        <>
        
          <Hero/>
          <Awards/>
          <Stats/>
          <Pricing/>
          <Education/>
          <Open/>
        
        </>
     );
}

export default HomePage;