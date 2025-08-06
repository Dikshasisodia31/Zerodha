import LeftSec from "./Leftimage";
import RightSec from "./Rightimage";
import Hero from "./Hero"
import Universe from "./Universe"
import ProductImage1 from '../../assets/kite.png';
import ProductImage2 from '../../assets/coin.png';
import ProductImage3 from '../../assets/varsity.png';
function ProductPage() {
    return (
         <>
       <Hero/>
       <LeftSec
        imageURL={ProductImage1}
        productName="Kite"
        productDescription="Our ultra-fast flagship tradeship platform with streaming market data advanced charts,an elegant UI and more . Enjoy the kite experience seamlessely on your Android and iOS devices"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""/>
       <RightSec
       imageURL={ProductImage3}
        productName="Varsity Mobile"
        productDescription="An easy to grasp , collection of stock market lessons with in-depth coverages and illustrations . Content is broken down into bite-size cards to help you learn on the go"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""/>
       <LeftSec
        imageURL={ProductImage2}
        productName="Coin"
        productDescription=" Buy direct mutual funds online , commision-free ,  delivered directly to your Demat account."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""/>
        <Universe/>
    </>
     );
}

export default ProductPage;