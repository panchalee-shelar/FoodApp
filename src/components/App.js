import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import ContactUs from "./ContactUs";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";
// import Grocery from "./Grocery";

const Grocery = lazy(()=> import('./Grocery'));

const Layout = ()=>{
    return(
        <>
            <Provider store={appStore}>
                <Header/>
                <Outlet/>
            </Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <Layout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element : <About/>
            },
            {
                path: '/city/mumbai/:resId',
                element : <RestaurantMenu/>
            },
            {
                path: '/contact',
                element : <ContactUs/>
            },
            {
                path: '/grocery',
                element : <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path:'/cart',
                element: <Cart/>
            }
        ],
        errorElement : <Error/>
    },
    
]);

// root.render(<Layout/>);
root.render(<RouterProvider router={appRouter}/>);