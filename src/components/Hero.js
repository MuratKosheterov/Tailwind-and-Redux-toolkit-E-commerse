import banner from "../assets/banner.png";
import Gallery from '../components/Gallery'
import Shop from "../pages/Shop";
import Tachen from "./Tachen";


function Hero() {
  return (
    <>
    <div
      className="hero mt-14 h-screen flex items-center justify-center  md:grid md:grid-cols-2 md:grid-rows-2"
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div className=" flex flex-col justify-center ">
        <p className=" uppercase  font-medium text-lg">new trend</p>
        <h1 className=" uppercase font-bold text-[40px] md:text-[80px] ">
          collusion
        </h1>
        <p className="uppercase  font-medium text-lg">
          An exclusive selection of this season's trends.
        </p>
        <div className=" flex  items-center space-x-3 py-3">
          <button className=" bg-black text-white px-5 py-1 uppercase">discover</button>
          <button className=" bg-black text-white px-5 py-1 uppercase">shop now</button>
        </div>
      </div>
    </div>
    <Gallery/>
    <Shop/>
    <Tachen/>
    </>
  );
}

export default Hero;