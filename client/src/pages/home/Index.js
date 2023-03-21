import React, { lazy, useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toolbar, Drawer } from "@mui/material";
// constants
import {products as productsData} from "../../constants/data";
// components
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import HomeContext from "../../contexts/HomeContext";
import Footer from "../../components/Footer";
// pages
const Home = lazy(() => import("./Home"));

const mdTheme = createTheme();

const Index = () => {
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setProducts(productsData);
        setWishlist(productsData);
        setCart(productsData);
        setOrders(productsData);
    }, []);

    return (
        <ThemeProvider theme={mdTheme}>
            <HomeContext.Provider value={{ product, setProduct, products, setProducts, wishlist, setWishlist, cart, setCart, orders, setOrders }}>
                <Navbar />
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Drawer anchor={"bottom"} open={Boolean(product)} onClose={() => setProduct(null)} onOpen={() => { }} sx={{ zIndex: 10000 }}><Product /></Drawer>
                <Footer />
            </HomeContext.Provider>
        </ThemeProvider>
    )
}

export default Index