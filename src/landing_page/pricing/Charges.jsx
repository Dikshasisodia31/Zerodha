export default function Charges(){
    return(
        <div className="container">
        <div className="container mt-5 border mb-5">
            <h2 className="mt-2">Charges for account opening</h2>
            <hr></hr>
            <div className="row">
            <div className="col-4 text-muted">
                <h3>Type of account</h3>
                <h4 className="pt-2">Online account</h4>
                <h4 className="pt-2">Offline account</h4>
                <h4 className="pt-2">NRI account (offline only)</h4>
                <h4 className="pt-2">Partnership, LLP, HUF, or Corporate accounts (offline only)</h4>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
                <h4>Charges</h4>
                <h4 className="pt-2"><button style={{backgroundColor:"green",color:"white"}}>FREE</button></h4>
                <h4 className="pt-2"><button style={{backgroundColor:"green",color:"white"}}>FREE</button></h4>
                <h4 className="pt-2">₹ 500</h4>
                <h4 className="pt-2">₹ 500</h4>
            </div>
            </div>
        </div>
        <div className="container mt-5 border mb-5">
            <h2 className="mt-2">Demat AMC (Annual Maintenance Charge)</h2>
            <hr></hr>
            <div className="row">
            <div className="col-4 text-muted">
                <h3>Value of holdings</h3>
                <h4 className="pt-2"> Up to ₹4 lakh</h4>
                <h4 className="pt-2">₹4 lakh - ₹10 lakh</h4>
                <h4 className="pt-2">Above ₹10 lakh</h4>
              
            </div>
            <div className="col-4"></div>
            <div className="col-4">
                <h4>AMC</h4>
                <h4 className="pt-2"><button style={{backgroundColor:"green",color:"white"}}>FREE</button></h4>
                <h4 className="pt-2">₹ 100 per year, charged quarterly*</h4>
                <h4 className="pt-2">₹ 300 per year, charged quartlerly</h4>
            </div>
            </div>
        </div>
        <p className="text-muted">* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href='/'>click here.</a></p>
        </div>
    );
}