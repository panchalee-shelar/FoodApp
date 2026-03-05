import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({ itemlist }) => {
    // console.log(itemlist, 'item');

    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        // dispatch & action
        dispatch(addItem(item));
    }
    return (
        <>
            <div>
                {
                    itemlist.map((item, index) => {
                        const info = item?.card?.info;
                        if (!info) return null;
                        return (
                            <div key={info.id} className="py-2">
                                <div className="border-b-2 flex justify-between">
                                    <div className="w-10/12">
                                        <h4 className="font-bold capitalize text-[15px]">{info.name}</h4>
                                        <p className="pb-2">{info.description}</p>
                                        <span>₹ {info.price/100}</span>
                                    </div>
                                    <div className="w-2/12 relative">
                                        <img src="https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg?w=2000" alt="img" />
                                        <button className="font-bold uppercase p-2 absolute bottom-0 rounded-sm bg-black text-white" onClick={()=>handleAddItem(item)}>Add</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
export default ItemList;