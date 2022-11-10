import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductsContextProvider from "./Global/ProductContext"
import CartContextProvider from './Global/CartContext';
import Products from './components/Products';
import Cart from './components/Cart'
import Example from './components/example'
import NotFound from './components/NotFound';
function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar/>
        
      
       
      
          <Routes>
            <Route path='/' index element={<Products/>} />
            <Route path='/cart'  element={<Cart/>}/>
            <Route path='/example' element={<Example/>}/>
            <Route  element={<NotFound/>}/>
          </Routes>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider>
   
    </div>
  );
}

export default App;
