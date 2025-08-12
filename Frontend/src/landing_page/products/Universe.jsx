import React from "react";
import streakLogo from '../../assets/streakLogo.png'
import smallCase from '../../assets/smallcaseLogo.png'
import zerodhaFundhouse from '../../assets/zerodhaFundhouse.png'
function Universe() {
    return (  
        <div className="container border-bottom">
            <div className="row">
                 <h1>The Zerodha Universe</h1>
                 <p className="para mt-3">Extend your trading and investment experience even further with our partner platforms</p>
                 <div className="col-4 mt-3 p-3 text-muted">
                    <img src={streakLogo} width="50%"/>
                    <p>Algo & strategy platform</p>
                 </div>
                 <div className="col-4 mt-3 p-3 text-muted">  <img src={smallCase} width="50%"/>
                 <p>Thematic investment paltform</p>
                 </div>
                 <div className="col-4 mt-3 p-3 text-muted">  <img src={zerodhaFundhouse} width="50%"/>
                 <p>Asset management</p>
                 </div>
            </div>
        </div>
    );
}

export default Universe;