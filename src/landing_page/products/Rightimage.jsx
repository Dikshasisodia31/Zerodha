function RightSec({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appstore,
}) {
     return ( <div className="container">
        <div className="row mt-5 mb-5 border-bottom">
            <div className="col-6 mt-5 p-5 ">
                 <h1>{productName}</h1>
                <p>{productDescription}</p>
                <a href={tryDemo} style={{padding : "20px"}}>Trydemo</a>
                <a href={learnMore}>LearnMore</a>
            </div>
            <div className="col-6">
                 <img src={imageURL} width="80%"/>
            </div>
        </div>
    </div> );
}

export default RightSec;