import React from "react";
import SignupImage from '../../assets/signup.png'
import Button from '@mui/material/Button';
function Hero() {
    return (<div className="container border-bottom">
        <div className="row mt-4">
            <h1>Open a free demat and trading account online</h1>
            <h3 className="text-muted">Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>
        </div>
        <div className="row mt-4">
            <div className="col-5">
                <img src={SignupImage} />
            </div>
            <div className="col-2"></div>
            <div className="col-5 mt-5">
                <h2>Signup now</h2>
                <h3 className="text-muted mt-3">Or track your existing application</h3>
                <div class="input-group input-group-lg mt-3">
                    <span class="input-group-text" id="inputGroup-sizing-lg">+91</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter your mobile number" />
                </div>
                <Button variant="contained" className="btn mt-3">Get OTP</Button>
                <p className="mt-3">By proceeding, you agree to the Zerodha <a href=''>terms</a> & <a href=''>privacy policy</a></p>

            </div>
        </div>
    </div>);
}

export default Hero;