import { useDispatch } from "react-redux";
// import ItemList from "./ItemList";

const Cart = ()=>{
    const dispatch = useDispatch();
    return(
        <>
            <div>
                <h1>Cart</h1>
                {/* <ItemList items={dispatch}/> */}
            </div>
        </>
    )
}
export default Cart;