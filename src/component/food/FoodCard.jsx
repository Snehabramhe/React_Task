import React from "react" ;
import FoodImage from "./FoodImage";
import FoodHeading from "./FoodHeading";


const FoodCard = (props) => {
    return(
        <>
         <div className="card shadow-lg"> 
               <FoodImage image={props.image}/>
                <div className="card-body">
                  <FoodHeading heading={props.heading}/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dignissimos ipsum tenetur, aliquid sapiente asperiores atque. Deserunt explicabo asperiores a est consectetur quae qui voluptatem laboriosam ut, ipsa, minus distinctio?</p>
                </div>
        </div>
        </>
    )
}

export default FoodCard;