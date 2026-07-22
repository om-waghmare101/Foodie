import React, { useState } from "react";
import "./CartSidebar.css"
import QRCode from "react-qr-code";


const CartSidebar = ({ cart, setCart, show, setShow }) => {


    let [showQr, setShowQr] = useState(false)

    const decreaseQty = (index) => {
        const updateCart = [...cart]
        if (updateCart[index].qty > 1) {
            updateCart[index].qty -= 1
            setCart(updateCart)
        }
    }

    const removeItem = (index) => {
        const updateCart = [...cart]
        updateCart.splice(index, 1)
        setCart(updateCart)
    }



    let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
    return (
        <div className="Sidebar">
            <button className="closeBtn" onClick={() => setShow(false)} >X</button>
            <h2>Your Cart</h2>
            {cart.map((item, index) => {
                return <div className="cartItem" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="cartDetails">
                        <p>{item.name}</p>
                        <p>{item.price}</p>

                    </div>
                    <div className="qtyControls">
                        <button onClick={() => decreaseQty(index)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => {
                            const updateCart = [...cart];
                            updateCart[index].qty += 1
                            setCart(updateCart)
                        }}>+</button>
                    </div>
                    <button className="removeBtn" onClick={() => removeItem(index)}>Remove</button>
                </div>
            })}


            <h3 className="total">Total: &#8377; {total}</h3>
            <button className="OrderBtn" onClick={() => setShowQr(true)}>Place Order</button>

            {showQr && <div className="qrBox">
                <h2>Scan and Pay</h2>
                <QRCode value="helloworld" size={150} />
                <h3>Total: &#8377; {total}</h3>
            </div>}

        </div>
    )

}
export default CartSidebar

