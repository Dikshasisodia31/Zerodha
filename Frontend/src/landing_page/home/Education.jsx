import React from "react";
import EducationImg from '../../assets/education.svg'

function Education() {
    return ( 
        <div>
           <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={EducationImg} style={{height:"80%"}}/>
                </div>
                <div className="col-6 mt-5">
                    <h3>Free and open market education</h3>
                    <p className="para p-3">Varsity the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                    <p className="para p-3">TradingQ&A , the most active trading and investment community in India for all your market related queries.</p>
                </div>
            </div>
           </div>
        </div>
     );
}

export default Education;