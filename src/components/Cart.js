import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { clearItem } from "../utils/cartSlice.js";
// import ItemList from "./ItemList";

const Cart = ()=>{
    const cartItem = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch()
    const deleteCart = ()=>{
        dispatch(clearItem())
    }
    return(
        <>
            <div className="text-center font-bold text-2xl my-5">Cart Items</div>
            <div className="w-6/12 m-auto">
                <div className="text-center"><button className="font-bold text-2xl" onClick={deleteCart}>🗑️</button></div>
                <ItemList itemlist={cartItem}/>
                {cartItem == '' && <h1 className="text-center">Your Cart is Empty! Shop Now🧺</h1>}
            </div>
        
        </>
    );
}
export default Cart;