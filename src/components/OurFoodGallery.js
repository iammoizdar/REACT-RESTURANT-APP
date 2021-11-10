import foodImages1 from "../images/foodgallery-img-1.png"
import foodImages2 from "../images/foodgallery-img-2.png"
import foodImages3 from "../images/foodgallery-img-3.png"
import foodImages4 from "../images/foodgallery-img-4.png"
import foodImages5 from "../images/foodgallery-img-5.png"
import foodImages6 from "../images/foodgallery-img-6.png"
import Foodgallery from "./Foodgallery"


const OurFoodGallery=()=>{
    return(
        <div className="container">
        <div className="gallery-wrapper">
            <h3>Our Food Gallery</h3>
            <div className="ourfoodgallery">
        <Foodgallery imgUrl={foodImages1}/>
        <Foodgallery imgUrl={foodImages2}/>
        <Foodgallery imgUrl={foodImages3}/>
        <Foodgallery imgUrl={foodImages4}/>
        <Foodgallery imgUrl={foodImages5}/>
        <Foodgallery imgUrl={foodImages6}/>
            </div>
        </div>
        </div>
    )
}
export default OurFoodGallery;