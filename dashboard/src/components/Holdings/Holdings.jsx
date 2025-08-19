import React from "react";

function Holdings() {
    return ( 
    <div>
    <h3>Holdings(13)</h3>
    <div className="order-table">
    <table>
        <tr>
            <th>Instruments</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
        </tr>
      </table>
     </div>
     <div className="row">
        <div className="col-4">
            <h5>29,875<span>55</span></h5>
            <p>Total investment</p>
        </div>
        <div className="col-4">
            <h5>31,428<span>95</span></h5>
            <p>Current</p>
        </div>
        <div className="col-4">
            <h5>1,553.40<span>{" "}</span></h5>
            <p>P&L</p>
        </div>
     </div>
    </div>
    );
}

export default Holdings;