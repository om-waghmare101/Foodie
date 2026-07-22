import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css"
import { FaShoppingCart } from "react-icons/fa";
import CartSidebar from "../CartSidebar/CartSidebar";



const Navbar = ({ cart, setCart }) => {

    let [show, setShow] = useState(false)


    return (
        <div className='mainContainer'>
            <nav>
                <div className="logo">
                    <div className="foodLogo">🍔</div>
                    <div>Foodie</div>
                </div>
                <ul className="listItem">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/About'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/Contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link to={''} onClick={() => setShow(!show)} className="cartLink">
                            <FaShoppingCart />
                            {cart.length > 0 && <span className="cartBadge">{cart.length}</span>}
                        </Link>
                    </li>

                </ul>


            </nav>

            {show && <CartSidebar show={show} setShow={setShow} cart={cart} setCart={setCart} />}
        </div>


    )

}
export default Navbar