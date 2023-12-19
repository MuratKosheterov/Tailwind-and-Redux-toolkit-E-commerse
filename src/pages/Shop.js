import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";

function Shop() {
  const [products, setProducts] = useState([]);

  const filteredMen = products.filter((item) => {
    return item.category === "men's clothing";
  });

  const filteredWomen = products.filter((item) => {
    return item.category === "women's clothing";
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsive = await axios.get("https://fakestoreapi.com/products");
        setProducts(responsive.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="shop py-20">
      <div>
        <div>
          <h1 className=" uppercase font-bold text-xl leading-8 text-center mb-3">
            women's fashion
          </h1>
          <p className=" font-normal text-sm leading-5 text-center">
            Shop our new arrivals from established brands
          </p>
        </div>
        <div className="px-32 py-12 grid md:grid-cols-2 lg:grid-cols-3  gap-5 ">
          {filteredWomen.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
      </div>
      <div>
        <div>
          <h1 className=" uppercase font-bold text-xl leading-8 text-center mb-3">
            men's fashion
          </h1>
          <p className=" font-normal text-sm leading-5 text-center">
            Shop our new arrivals from established brands
          </p>
        </div>
        <div className="px-32 py-12 grid md:grid-cols-2 lg:grid-cols-3  gap-5 ">
          {filteredMen.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
