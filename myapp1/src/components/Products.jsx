import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "popular") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>;
};

export default Products;
