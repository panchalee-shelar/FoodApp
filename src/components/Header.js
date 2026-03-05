import { useContext, useState } from "react";
import { CDNLOGO_URL } from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);

  const onlinestatus = useOnlineStatus();
  const { loggedIn } = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <header className="bg-green-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/">
            <img src={CDNLOGO_URL} alt="logo" className="w-16 sm:w-14" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/grocery">Grocery</Link>
            <Link className="nav-link" to="/assignment">Assignment</Link>
            <Link className="nav-link" to="/cart">
              Cart ({cartItem.length})
            </Link>

            <span>{onlinestatus ? "✅" : "🔴"}</span>

            <button
              className="bg-green-500 px-4 py-1 rounded-md text-white hover:bg-green-700"
              onClick={() =>
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login")
              }
            >
              {btnName}
            </button>

            <span className="font-bold">{loggedIn}</span>
          </nav>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-green-50 px-4 pb-4 space-y-3">
          <Link className="mobile-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="mobile-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="mobile-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link className="mobile-link" to="/grocery" onClick={() => setIsOpen(false)}>Grocery</Link>
          <Link className="mobile-link" to="/assignment" onClick={() => setIsOpen(false)}>Assignment</Link>
          <Link className="mobile-link" to="/cart" onClick={() => setIsOpen(false)}>
            Cart ({cartItem.length})
          </Link>

          <div className="flex items-center gap-3">
            <span>{onlinestatus ? "✅" : "🔴"}</span>
            <button
              className="bg-green-500 px-4 py-1 rounded-md text-white"
              onClick={() =>
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </div>

          <div className="font-bold">{loggedIn}</div>
        </div>
      )}
    </header>
  );
};

export default Header;