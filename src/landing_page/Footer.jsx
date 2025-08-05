import React from "react";
import logo from '../assets/logo.svg'

function Footer() {
    return ( 
      <div className="container mt-5">
        <div className="row mt-5">
            <div className="col">
               <img src={logo} style={{width:"50%"}}/>
               <p>&copy; 2010-2024 , Not zerodha Broking Ltd. All rights reserved</p>
            </div>
            <div className="col">
                <p>Company</p>
                
                <a href='/'>about</a><br></br>
                <a href='/'>products</a><br></br>
                <a href='/'>pricing</a><br></br>
                <a href='/'>Referals</a><br></br>
                <a href='/'>Careers</a><br></br>
                <a href='/'>Zerodha.tech</a>
            </div>
            <div className="col">
                <p>support</p>
                 <a href='/'>Support</a><br></br>
                <a href='/'>contacts</a><br></br>
                <a href='/'>Z-connect blog</a><br></br>
                <a href='/'>List of charges</a><br></br>
                <a href='/'>Downloads & resources</a><br></br>
                <a href='/'>Zerodha.tech</a>
            </div>
            <div className="col">
                <p>Action</p>
                <a href='/'>Open an account</a><br></br>
                <a href='/'>Fund transfer</a><br></br>
                <a href='/'>60 day challenge</a><br></br>
            </div>
        </div>
       
      </div>
     );
}

export default Footer;