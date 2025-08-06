import image1 from '../../assets/pricingMF.svg'
import image2 from '../../assets/intradayTrades.svg'
import image3 from '../../assets/pricing0.svg'

function Hero() {
    return (
        <div className="container mt-5">
            <div className="row border-bottom">
                <h1>Pricing</h1>
                <p className="text-muted">Free equity investments and flat Rs. 20 tradey and F&O trades</p>
            </div>
            <div className="row border-bottom">
                <div className="col-4">
                    <img src={image1} style={{ width: "90%" }} />
                    <h2>Free equity delivery</h2>
                    <p className='text-muted'>All equity investments (NSE,BSE) are absolutely free -- Rs.0 brokerage</p>
                </div>
                <div className="col-4">
                    <img src={image2} style={{ width: "90%" }} />
                    <h2>Intradey and F&O trades</h2>
                    <p className="text-muted">
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                        intraday trades across equity, currency, and commodity trades.
                    </p>
                </div>
                <div className="col-4">
                    <img src={image3} style={{ width: "90%" }} />
                    <h2>Free</h2>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free — ₹ 0
                        commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;