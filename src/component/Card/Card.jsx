import React from "react";
import "../../component/Card/card.css"


const Card = ({ cardData, cart, setCart }) => {

    const addToCart = (product) => {
        const exists = cart.find(i => i.id === product.id);
        if (exists) return;
        setCart([...cart, { ...product, qty: 1 }]);
    }
    return (
        <div className='card-container'>

            {cardData.length === 0 ? (<h2>No item found</h2>) : (

                cardData.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <h1>{item.name}</h1>
                            <img src={item.img} alt="" />
                            <p>{item.desc}</p>
                            <p className='price'>Price : &#8377;{item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>

                        </div>
                    )

                })
            )}

        </div>
    )

}
export default Card