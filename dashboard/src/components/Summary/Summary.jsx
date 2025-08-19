import React from "react";

function Summary() {
    return ( 
        <div className="pl-3">
            <div className="user-container border-bottom text-align-center mt-4">
            <h3 className="text-muted">Hi, User</h3>
            </div>
             
             <div className="equity-container border-bottom mt-3">
                <h3 className="text-muted">Equity</h3>
                <div className="row">
                    <div className="col">
                <div className="mt-5">3.74k</div>
                <div className="mt-3">Margin available</div>
                </div>
               <div className="col">
                <div className="mt-5">Margin used 0</div>
                <div className="mt-3">Opening Balance 3.27k</div>
                </div>
                </div>
             </div>

             <div className="mt-3">
                <h3 className="text-muted">Holdings (13) </h3>
             </div>
        </div>
    );
}

export default Summary;