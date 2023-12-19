import React from "react";
import gallery2 from "../assets/2.png";
import gallery3 from "../assets/3.png";
import gallery4 from "../assets/4.png";
import gallery5 from "../assets/5.png";

function Gallery() {
  return (
    <div className="gallery  md:grid grid-cols-2 px-32 pt-28 gap-6 ">
      <div className=" grid grid-rows-2 gap-6">
        <div className="">
          <img className=" h-full w-full"
            src={gallery2}
            alt=""
          />
        </div>
        <div className=" grid grid-cols-2 gap-6">
          <img className=" h-full" src={gallery3} alt="" />
          <img className=" h-full" src={gallery4} alt="" />
        </div>
      </div>
      <div className=" mt-6 md:mt-0 ">
        <img className=" h-full w-full " src={gallery5} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
