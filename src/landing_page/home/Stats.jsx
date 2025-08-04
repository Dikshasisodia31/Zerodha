import React from "react";
import StatsImg from '../../assets/ecosystem.png'
function Stats() {
    return ( 
      <div className="container">
        <div className="row m-5">
            <div className="col-6">
                 <h1>Trust with confidence</h1>
                 <h2 className="heading h2 mt-5">Customer-first always</h2>
                 <p>That's why 1.3+ crore customers trust Zerodha with Rps.3.5+ lakh crore worth of quity investments</p>
                 <h2>No spams or gimmicks</h2>
                 <p>No spams or gimmicks or any annoying push notifications . High quality content present for our users </p>
                 <h2>The Zerodha universe</h2>
                 <p>Not just a app but a whole ecosystem . Our investments in 30+ fintech startups offer you tialored services specific to your needs</p>
            </div>
            <div className="col-6">
              <img src={StatsImg} style={{width:"75%"}}/>
            </div>
        </div>
      </div>
     );
}
export default Stats;