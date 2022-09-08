import "./assets/css/style.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/ion.rangeSlider.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/Pe-icon-7-stroke.css";
import "./assets/css/plugins.min.css";
import "./assets/css/swiper-bundle.min.css";
import { Footer } from "./components/footer/Footer";
import { NavbarPrincipal } from "./components/navbar/NavbarPrincipal";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/cart/Cart";
import { ProductDetail } from "./components/productDetail.jsx/ProductDetail";
import { Error404 } from "./components/error404/Error404";
function App() {
  return (
    <>
      <div className="app">
        <NavbarPrincipal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
