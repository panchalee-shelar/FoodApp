import { useDispatch } from "react-redux";
import { MENU_ITEM_IMG } from "../utils/mockData";
import { addItems } from "../utils/cartSlice";

const ItemList = ({items})=>{
    // console.log(items)
     const dispatch = useDispatch()
    const handleClickItem = (e)=>{
        // console.log('cliked item')
        dispatch(addItems(e))
    }
    return(
        <>
           {
            items.map((e)=>(
                <div key={e.card.info.id} className=" flex justify-between border-b-2 border-gray-200 text-start p-2 m-2" >
                    <div className="w-9/12">
                        <p className="font-semibold text-gray-600">{e.card.info.name}</p>
                        <p className="p-1">&#8377;{e.card.info.price ? e.card.info.price / 100 : e.card.info.defaultPrice / 100 }</p>
                        <p className="text-sm text-gray-500">{e.card.info.description}</p>
                    </div>
                    <div className="w-3/12 relative">
                        <img src= {MENU_ITEM_IMG + e.card.info.imageId} className="rounded-lg"/>
                        <button onClick={()=> handleClickItem(e)} className="px-7 py-2 rounded-lg text-white bg-black absolute bottom-0 left-12 uppercase">Add</button>
                    </div>
                </div>
            ))
           }
        </>
    );
}
export default ItemList;