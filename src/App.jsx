import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

import {CarritoProvider } from './context/CarritoContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';





function App() {



  return (
    <div>
      <CarritoProvider>

        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          
        </BrowserRouter>
        

      </CarritoProvider>
    </div>
  );
}

export default App;
