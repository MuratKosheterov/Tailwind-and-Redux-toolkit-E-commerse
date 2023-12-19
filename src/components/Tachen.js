import React from "react";
import tachen from "../assets/tachen.png";

function Tachen() {
  return (
    <div
      className="tachen h-screen grid md:grid-row-1  lg:grid-cols-2 lg:grid-rows-2 "
      style={{
        background: `url(${tachen})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div></div>
      <div></div>
      <div className=" uppercase px-10 ms-4 ">
        <p className=" font-semibold text-lg">own the day</p>
        <h1 className="py-3 font-bold text-[80px]">tachen 19</h1>
        <button className=" uppercase text-white bg-gray-900  px-3 py-2">shop collection</button>
      </div>
      <div></div>
    </div>
  );
}

export default Tachen;
