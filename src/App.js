import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Page/Home';
import NoPage from './Page/NoPage';
import Contact from "./Page/Contact";
import New from "./Page/New";
import Category from "./Components/Cart/Category";
import ShopCart from "./Components/Cart/ShopCart";
import Todolist from "./Components/Admin/Cart";
import Admin from "./Components/Admin/Admin";
import EditCart from "./Components/Admin/EdiitCart";
import Detail from "./Layout/Detail";
import Cards from "./Components/Cart/Card";

export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/about' element={<Todolist/>}/>
            <Route path="products/:id" element={<Detail />} />
            <Route path="products/category/:id" element={<Category />} />
            <Route path="products/cart/:id" element={<ShopCart />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="admin/" element={<Admin />} />
            <Route path="/card/" element={<Cards />} />
            <Route path="/edit/:id" element={<EditCart />} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
