import React from "react";

function CreateTicket() {
    return ( <div className="container p-0 m-0">
        <div className="row">
            <h1>To create a ticket, select a relevant topic</h1>
            <div className="col-4 mt-5">
                <h3> <i className="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h3>
                <a href='' style={{textDecoration:"none"}}> Online Account Opening</a><br></br>
                <a href='' style={{textDecoration:"none"}}> Offline Account Opening</a><br></br>
                <a href='' style={{textDecoration:"none"}}> Company, Partnership and HUF Account</a><br></br>
                <a href='' style={{textDecoration:"none"}}> Opening</a><br></br>
                <a href='' style={{textDecoration:"none"}}>NRI Account Opening</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Charges at Zerodha</a><br></br>
                <a href='' style={{textDecoration:"none"}}> Zerodha IDFC FIRST Bank 3-in-1 Account</a><br></br>
                <a href='' style={{textDecoration:"none"}}> Getting Started</a><br></br>
            </div>
            <div className="col-4  mt-5">
                <h3>Your Zerodha Account</h3>
                <a href='' style={{textDecoration:"none"}}>Login credentials</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Account modification</a><br></br>
                <a href='' style={{textDecoration:"none"}}>DP ID and bank details</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Transfer</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Conversion of shares</a><br></br>
            </div>
            <div className="col-4  mt-5">
                 <h3>Your Zerodha Account</h3>
                <a href='' style={{textDecoration:"none"}}>Product</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Kite web and Mobile</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Trading F&Q</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Corporate Actions</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Kite API</a><br></br>
                <a href='' style={{textDecoration:"none"}}>Sentinal</a><br></br>
            </div>
        </div>
    </div> );
}

export default CreateTicket;