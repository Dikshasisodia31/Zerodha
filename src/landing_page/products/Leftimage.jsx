function LeftSec({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appstore,
}) {
    return ( <div className="container">
        <div className="row mt-5 mb-5 p-5 border-bottom">
            <div className="col-6">
                 <img src={imageURL} width="80%"/>
            </div>
            <div className="col-6 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <a href={tryDemo}  style={{padding : "20px"}}>Trydemo</a><br></br>
                <a href={learnMore}>LearnMore</a>
            </div>
        </div>
    </div> );
}

export default LeftSec;