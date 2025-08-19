import React from "react";
import Menu from "../Menu/Menu";

function Topbar() {
    return ( 
    <div className="topbar-container border-bottom">
        <div className="row">
        <div className="col-8"> <Menu/></div>
        <div className=" col -2 top-container">
            <p>NIFTY 50</p>
            <p>100.2</p>
            <p></p>
        </div>
        <div className="col-2 sensex">
            <p></p>
            <p>SENSEX</p>
            <p>100.2</p>
        </div>
        </div>
    </div> 
    );
}
export default Topbar;