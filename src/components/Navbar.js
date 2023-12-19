import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openClose } from "../redux/slices/openSlice";

function Navbar() {
  const { amount } = useSelector((state) => state.cartReducer);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const Links = [
    { name: "home", link: "home", id: 1 },
    { name: "shop", link: "shop", id: 2 },
    { name: "lookbook", link: "lookbook", id: 3 },
    { name: "features", link: "features", id: 4 },
    { name: "pages", link: "pages", id: 5 },
    { name: "blog", link: "blog", id: 6 },
  ];

  return (
    <div className=" ">
      <nav className="fixed  w-full  nav py-3 px-20 bg-white  md:flex md:items-center md:justify-between z-10">
        <div className=" flex items-center space-x-3">
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl cursor-pointer "
          >
            {open ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </div>

          <Link to="/" className="logo uppercase text-2xl font-bold">
            logo
          </Link>
        </div>
        <ul
          className={`left-0 md:pt-0 md:flex text-center items-center md:space-x-6 absolute md:static w-full md:w-auto transition-all duration-500 ease-in md:z-auto z-[-1] bg-white ${
            open ? "top-12" : "top-[-488px]"
          }`}
        >
          {Links.map((item) => {
            return (
              <li
                key={item.id}
                className="py-3 md:py-0  hover:text-orange-500 "
              >
                <Link className=" uppercase font-normal" to={item.link}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav__icons flex items-center space-x-10 absolute md:static top-4 right-20 ">
          <i className="bi bi-search text-2xl cursor-pointer"></i>
          <i
            onClick={() => dispatch(openClose())}
            className="bi bi-cart3 text-2xl cursor-pointer"
          >
            <sup className=" p-1 bg-gray-500 rounded-full py-0 text-white">
              {amount}
            </sup>
          </i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
