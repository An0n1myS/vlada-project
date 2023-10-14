import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../screens/Home/Home';
import Product from "../screens/Products/Products";
import About from "../screens/About/About";
import Contact from "../screens/Contact/Contact";


const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"/>
                <Route element={<Product />} path="/products/"/>
                <Route element={<About />} path="/about/"/>
                <Route element={<Contact />} path="/contact/"/>
                <Route element={<div>Page not found</div>} path="*"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router