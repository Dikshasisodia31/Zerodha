import React from "react";

function Pricing() {
    return ( 
       <div className="container">
        <div className="row m-5">
            <div className="col-4 mt-5">
              <h2 className="heading p-2">Unbeatable pricing</h2>
              <p>We provide the concept of discount broking and price transparency in India.</p>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
                 <div className="row">
                    <div className="col-6 border p-2">
                        <h2>Rs 0</h2>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col-6 border p-2">
                        <h2>Rs 20</h2>
                        <p>F&O</p>
                    </div>
                 </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;