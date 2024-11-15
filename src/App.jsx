import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/hero";
import Menus from "./component/Menu/Menu";
import Banner from "./component/Banner/Banner";
import Banner2 from "./component/Banner/Banner2";
import Banner3 from "./component/Banner/Banner3";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact"; 
import Shop from "./component/Shop/Shop";
import Product from './component/Product/Product'
import About from "./component/About/About";


function App() {
  return (
    <BrowserRouter>
      <main className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Menus />
              <Banner />
              <Banner2 />
              <Banner3 />
              <Footer />

            </>
          } />
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
