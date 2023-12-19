import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Features from "./components/Features";
import Footer from "./pages/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  
  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);
  
  const { isOpen } = useSelector((state) => state.openReducer);
  const { openChekout } = useSelector((state) => state.checkoutReducer);
  return (
    <div className="App overflow-hidden min-w-[340px]">
      {openChekout ? (
        <Checkout />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="home" element={<Hero />} />
            <Route path="lookbook" element={<Gallery />} />
            <Route path="features" element={<Features />} />
            <Route path="pages" element={<Pages />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {isOpen && <Cart />}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
