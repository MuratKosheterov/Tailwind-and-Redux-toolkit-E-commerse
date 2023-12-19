import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFomCart,
  reset,
  increament,
  decreament,
} from "../redux/slices/cartSlice";
import { addCheckout } from "../redux/slices/openCheckout";
import { openClose } from "../redux/slices/openSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cartReducer);

  return (
    <div className="cart top-0 h-screen z-30 right-0 fixed  w-[450px] box-border bg-white  p-6 border ">
      <div className="cart__header flex justify-between items-center uppercase mb-5">
        <div>Items in cart {amount}</div>
        <i onClick={() => dispatch(openClose())} className="bi bi-x-lg"></i>
      </div>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="cart__center grid grid-cols-4  border-b-2 py-3 ">
            <img src={item.image} className=" w-full h-28" alt="" />
            <div className=" flex flex-col items-center justify-evenly">
              <button
                onClick={() => dispatch(decreament(item.id))}
                className="px-3 bg-gray-300 rounded-md"
              >
                -
              </button>
              <p className="px-2">{item.amount}</p>
              <button
                onClick={() => dispatch(increament(item.id))}
                className="px-3 bg-gray-300 rounded-md  "
              >
                +
              </button>
            </div>
            <div className=" flex flex-col items-center justify-evenly">
              <div>Price: ${item.price}</div>
              <div>Total: ${(item.price * item.amount).toFixed(2)}</div>
            </div>
            <div className=" flex justify-center items-center text-2xl">
              <i
                onClick={() => dispatch(deleteFomCart(item.id))}
                className="bi bi-trash3"
              ></i>
            </div>
          </div>
        );
      })}
      <div className="cart__footer flex items-center justify-between py-5">
        <div className=" uppercase font-semibold">
          Subtotal: {total.toFixed(2)} $
        </div>
        <button
          onClick={() => dispatch(reset())}
          className=" px-5 py-2 bg-red-600 text-white"
        >
          Reset
        </button>
      </div>
      <button onClick={()=> dispatch(addCheckout())} className=" bg-red-400 hover:bg-green-400 w-full text-white py-2 my-1 text-xl rounded-md uppercase">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
