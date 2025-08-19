import React from "react";
import {Routes,Route} from "react-router-dom";
import Summary from "../Summary/Summary";
import Orders from "../Orders/Orders";
import Holdings from "../Holdings/Holdings";
import Positions from "../Positions/Positions";
import Funds from "../Funds/Funds";
import Apps from "../Apps/Apps";

function Dashboard() {
    return ( 
    <div>
        <div className="dashboard-bar">
            <Routes>
                <Route path='/' element={<Summary/>}/>
                <Route path='/Orders' element={<Orders/>}/>
                <Route path='/Holdings' element={<Holdings/>}/>
                <Route path='/Positions' element={<Positions/>}/>
                <Route path='/Funds' element={<Funds/>}/>
                <Route path='/Apps' element={<Apps/>}/>
            </Routes>
        </div>
    </div> 
  );
}

export default Dashboard;