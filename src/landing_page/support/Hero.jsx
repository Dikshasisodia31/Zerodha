import React from "react";

function Hero() {
    return (
      
            <div className="row mt-5 mb-5"  style={{ backgroundColor: "#1976D2", color: "white" }}>
                <div className="col m-3">
                    <h3>Support Portal</h3>
                    <h4 className="mt-5">Search for an answer or browse help topics to create a ticket</h4>
                    <div class="input-group input-group-lg">

                    <input type="text" className="form-control text-muted" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="eg. How do i activate F&O , why is my order gatting rejected" />
                    </div>
                    
                    <a className="p-2 mt-2" style={{color:"white"}}>Track account opening</a>
                    <a className="p-2 mt-2" style={{color:"white"}}>margins</a>
                    <a  className="p-2" style={{color:"white"}}>Kite manual guide</a>
                   

                   
                </div>
                <div className="col mt-5">
                    <a href='' style={{color:"white"}}>Track Tickets</a>
                    <h3 className="mt-4">Featured</h3>
                    <a className="mt-4" href='' style={{color:"white"}}>1.Current takeovers and delisting - January 2024</a><br></br>
                    <a className="mt-4" href='' style={{color:"white"}}>2.Latest Intradey</a>
                </div>
            </div>
       

    );
}

export default Hero;