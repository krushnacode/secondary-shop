import React, { useEffect } from "react";
import axios from "axios";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import { createStore } from "redux";

const ProductPage = () => {
    const dispatch = useDispatch();
    const store = createStore();
    const products = useSelector((state) => state.allProducts.products);
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products :", products);
    return (
        <Provider store={store}>
            <div className="ui grid container">
                <ProductComponent />
            </div>
        </Provider>
    );
};

export default ProductPage;