import React from "react";
import Button from '@mui/material/Button';
import Img from '../../assets/steps-acop.svg'
function Investment() {
    return (<div className="container">
        <div className="row mt-5">
            <h2>Investment options with Zerodha demat account</h2>
        </div>
        <div className="row mt-5">
            <div className="col-6">
               <h2><i class="fa-solid fa-thumbs-up"></i> Stocks</h2>
               <p className="text-muted">Invest in all exchange-listed securities</p>
            </div>
            <div className="col-6">
                <h2><i class="fa-solid fa-thumbs-up"></i> Mutual funds</h2>
                <p>Invest in commision-free direct mutual funds</p>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-6">
               <h2><i class="fa-solid fa-thumbs-up"></i> IPO</h2>
               <p className="text-muted">Apply to the latest IPO's instantly via UPI</p>
            </div>
            <div className="col-6">
                <h2><i class="fa-solid fa-thumbs-up"></i> Futures & options</h2>
                <p>Hedge and mitigate market risk through simplified F&O trading</p>
            </div>
        </div>
        <div className="row border-bottom">  <Button variant="contained" className="btn mt-3">Explore Investments</Button></div>
        <div className="row border-bottom">
            <h3>Steps to open a Zerodha demat account</h3>
            <div className="col mt-5">
                <img src={Img} style={{width:"70%"}}/>
            </div>
            <div className="col mt-5">
                <h4 className="border-bottom mt-3 p-3">1.Enter the requested details</h4>
                <h4 className="border-bottom mt-3 p-3">2.Complete e-sign & verification</h4>
                <h4 className="border-bottom mt-3 p-3">3.Start investing!</h4>
            </div>
        </div>
    </div>);
}

export default Investment;