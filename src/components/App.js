import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import ContactUs from "./ContactUs";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";
import QuestionsSet from "./questions/QuestionsSet";


const Grocery = lazy(()=> import('./Grocery.js'));
// it create separate bundle of grocery. 

const Layout = () => {
    try {
        const [userName, setUserName] = useState();

        useEffect(() => {
            const data = { name: "Panchalee Shelar" };
            setUserName(data.name);
        }, []);

        return (
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedIn: userName, setUserName }}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </Provider>
        );
    } catch (err) {
        console.error("Error in Layout component:", err);
        return <h1>Something went wrong in Layout</h1>;
    }
};


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
                path:'/assignment',
                element: <QuestionsSet/>,
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