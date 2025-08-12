import React from "react";
import heroImage from '../../assets/homeHero.png'
import Button from '@mui/material/Button';
import './Hero.css'

function Hero() {
    return ( 
       <div className="container">
           <div className="row">
             <img src={heroImage}/>
             <h1 className="heading mt-5">Invest in Everything</h1>
             <p>Online platform to invest in stocks , derivations and mutual funds</p>
             <Button variant="contained" className="btn">Signup now</Button>
           </div>
    
       </div>
     );
}

export default Hero;