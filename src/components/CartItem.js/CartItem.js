import React from "react";
import { getFirestore } from "firebase/firestore";

const CartItem = ({ id, name, price, quantity }) => {
    const db = getFirestore();
    return (
        <div className="cart-item">
            <h3>{name}</h3>
            <p>Precio: $ {price} </p>
            <p>Cantidad: $ {quantity} </p>
        </div>
    );
};

export default CartItem