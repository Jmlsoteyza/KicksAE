import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import StoreProduct from "./Pages/StoreProduct";
import Products from "./Pages/Products";
import Layouts from "./Pages/Layouts";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import BlogsSingle from "./Pages/BlogsSingle";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Checkout from "./Pages/Checkout";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Blogs/:id" element={<BlogsSingle />} />
          <Route path="StoreProduct" element={<StoreProduct />} />
          <Route path="StoreProduct/:id" element={<Products />} />
          <Route path="StoreProduct/:id/Payments" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
