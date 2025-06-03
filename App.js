
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import ProductList from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails';
import { CartProvider } from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import Footer from './components/Footer/Footer';


function App() {
  const [search, setSearch] = useState("");
  return (
    <CartProvider>
      <div className="App">
        <header>
          <Header onSearch={setSearch} />
         
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<ProductList searchTerm={search} />} />
            <Route path='/products/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>

        </main>
        <Footer/>




      </div>
    </CartProvider>
  );
}

export default App;
