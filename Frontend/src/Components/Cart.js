import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice"; // Adjust the path as necessary
import ItemList from "./ItemList"; // Adjust the path as necessary

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {!isLoggedIn ? (
          <h1>Please log in to view your cart items.</h1>
        ) : (
          <>
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            {cartItems?.length === 0 ? (
              <h1>Cart is empty. Add items to the cart!</h1>
            ) : (
              <ItemList items={cartItems} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
