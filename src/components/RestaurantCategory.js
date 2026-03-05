// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItem,setShowIndex }) => {
    // console.log(data, 'catdata');
    // const [showItem, setShowItem] = useState(false)

    const handleClicked = ()=>{
        // console.log('clicked');
        // setShowItem(!showItem);
        setShowIndex();
    }
    return (
        <>
            <div className="px-4 py-2 my-3 rounded-lg shadow-lg ">
                <div className="flex justify-between cursor-pointer" onClick={handleClicked}>
                    <h3 className="font-bold">{data.title}<span className="ml-4">({data.itemCards.length})</span></h3>
                    <span>⬇️</span>
                </div>
                {showItem && <ItemList itemlist={data.itemCards} />}
            </div>

        </>
    )
}
export default RestaurantCategory;
