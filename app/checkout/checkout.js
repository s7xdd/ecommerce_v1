'use client'
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "@/Context/Context";
import axios from "axios";
import { CartContext } from "@/Context/CartProvider";


const Checkout = () => {
    const { cartdetails, setCartDetails, addItemToCart } =
    useContext(CartContext);
  const { user } = useContext(Context);
    const [usersCart, setUserCart] = useState([]);
    const totalPrice = usersCart?.reduce(
        (total, item) =>
            total +
            item?.items?.reduce(
                (total, item) => total + item?.price * item?.quantity,
                0
            ),
        0
    );

    useEffect(() => {
        const getCart = async () => {
          try {
            const res = await axios.post("/api/cart-item", {
              userId: user?.data?._id,
            });
            if (res?.data?.cartItem?.length === 0) {
              return null;
            }
            
            setUserCart(res?.data?.cartItem);
        } catch (error) {
            console.log(error);
        }
    };
    user && getCart();
        
      }, [user]);
    

  return <div className="mt-52">
    { usersCart && (
        <div>
            {usersCart.map((item) => {
                <h1>{item.name}</h1>
        })}
        </div>
    ) }
  </div>;
};

export default Checkout;
