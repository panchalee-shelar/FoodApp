import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItem,setShowIndex})=>{

    // const [showItem, setShowItem] = useState(false);

    const handleClicked = ()=>{
        // console.log('clicked')

        setShowIndex(!showItem);
        // setShowIndex();
    }
    // console.log(data)
    return(
        <>
            <div className="w-[800px] mx-auto my-5 shadow-lg rounded-lg p-4 cursor-pointer">
                <div className="flex justify-between" onClick={handleClicked}>
                    <h2 className="font-semibold">{data.title} ({data.itemCards.length})</h2>
                    <span>⬇️</span>
                </div>
                {showItem && <ItemList items = {data.itemCards}/>}
            </div>
        </>
    )
}
export default RestaurantCategory;