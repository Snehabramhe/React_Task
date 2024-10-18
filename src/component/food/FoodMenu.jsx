import React from "react" ;
import foodImg_1 from "../../assets/img_1.jpg";
import foodImg_2 from "../../assets/img_2.jpg"
import foodImg_3 from "../../assets/img_3.jpg"
import foodImg_4 from "../../assets/img_4.jpg"
import FoodCard from "./FoodCard";


const FoodMenu = () => {
    return(
        <>
        <div className="container mt-2">
            <div className="row">
               <div className="col-sm-3">
                <FoodCard heading="Food 1" image={foodImg_1}/>
               </div>
               <div className="col-sm-3">
               <FoodCard heading="Food 2" image={foodImg_2}/>
               </div>
               <div className="col-sm-3">
               <FoodCard heading="Food 3" image={foodImg_3}/>
               </div>
               <div className="col-sm-3">
               <FoodCard heading="Food 4" image={foodImg_4}/>
               </div>
            </div>
        </div>
        </>
    )
}

export default FoodMenu;