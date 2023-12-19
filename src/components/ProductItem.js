import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const { price, category, image } = product;
  const dispatch = useDispatch();

  return (
    <div className="shadow-2xl flex flex-col justify-between items-center py-5 rounded-2xl relative z-[0] ">
      <Link to={`productdetail/${product.id}`}>
        <img
          className=" w-[268px]  h-[301px] hover:scale-[1.1]  transition-all duration-500 ease-in-out"
          src={image}
          alt=""
        />
      </Link>
      <div className="my-5">
        <p>
          <span className=" font-semibold text-lg">Category:</span> {category}
        </p>
        <p>
          <span className=" font-semibold text-lg ">Price:</span> ${price}
        </p>
      </div>
      <button
        onClick={() => dispatch(addToCart(product))}
        className=" bg-red-400 w-2/3 py-1 rounded-lg uppercase text-white hover:bg-green-700"
      >
        buy
      </button>
    </div>
  );
}

export default ProductItem;
