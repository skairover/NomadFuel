import Navbar from './Components/Navbar';
import Home from './pages/Home'
import Products from './pages/Products';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  
  return (
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    
  );
};

export default App;