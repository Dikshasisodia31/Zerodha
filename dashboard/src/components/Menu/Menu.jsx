import React from "react";
import { Link } from "react-router-dom";
import Summary from "../Summary/Summary";
function Menu() {
    return ( 
      <div className="menu-bar">
      <Link to="/"><p>dashboard</p></Link>
      <Link to="/orders"><p>Orders</p></Link>
      <Link to="/Holdings"> <p>Holdings</p></Link>
      <Link to="Positions"><p>Positions</p></Link>
      <Link to="Funds"><p>Funds</p></Link>
      <Link to="Apps"><p>Apps</p></Link>
    </div>
    );
}

export default Menu;