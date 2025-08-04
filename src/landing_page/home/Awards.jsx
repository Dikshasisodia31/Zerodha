import React from "react";
import Awardimg from '../../assets/awards.png'
function Awards() {
    return ( 
        <div className="container">
            <div className="row m-5">
                <div className="col-6 mt-5">
                    <img src={Awardimg} height='200px' width='200px'/>
                </div>
                <div className="col-6">
                    <div className="row"><h1>Largest stock broker in India</h1></div>
                    <div className="row">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India</div>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and options</li>
                                <li>Commodities and derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                              <ul>
                                <li>Stocks and IPO's</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Growth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;