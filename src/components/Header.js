import { useState } from 'react';
import {CDNLOGO_URL} from '../utils/mockData';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

const Header = ()=>{
    const [btnName, setBtnName] = useState('Login');

    const onlinestatus = useOnlineStatus();
    // subcribing to a Store using selector
    const cartItems = useSelector((store)=> store.cart.items);
    return(
        <>
        <div className="header bg-green-100 shadow-lg">
            <div className="container m-auto flex justify-around items-center">
                <Link to='/'><img className="logo" src={CDNLOGO_URL} alt="logo" width={100}/></Link>
                <nav className="navbar lg:block hidden">
                    <ul className='flex'>
                        <li className='pr-5 text-xl font-semibold font-sans hover:text-green-600'><Link to='/'>Home</Link></li>
                        <li className='pr-5 text-xl font-semibold font-sans hover:text-green-600'><Link to='/about'>About</Link></li>
                        <li className='pr-5 text-xl font-semibold font-sans hover:text-green-600'><Link to='/contact'>Conatct Us</Link></li>
                        <li className='pr-5 text-xl font-semibold font-sans hover:text-green-600'><Link to='/grocery'>Grocery</Link></li>
                        <li className='pr-5 text-xl font-semibold font-sans hover:text-green-600'><Link to='/cart'>Cart({cartItems.length})</Link></li>
                        <li className='pr-5 text-xl font-semibold font-sans hover:text-green-600'>{onlinestatus ? "✅" : '🔴'}</li>
                        <button className='toggle-btn bg-green-500 px-7 rounded-md font-medium hover:bg-green-800 hover:text-white' 
                        onClick={()=>btnName === 'Login'? setBtnName('Logout'): setBtnName('Login')}>
                        {btnName}</button>
                    </ul>
                </nav>
            </div>
        </div>
    </>
    )
};
export default Header;
