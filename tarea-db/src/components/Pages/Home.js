import React from 'react';
import { useEffect, useState } from 'react';
import { getLstProductos } from '../../Providers/products';
import { ProductCard } from '../ProductCard';
import './Home.css';
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      const [data, error] = await getLstProductos({ signal });
      if (error === null) {
        setProducts(data);
      }
    };
    fetchData();
    return () => {
      controller.abort();
      window.scrollTo(0, 0);
    };
  }, []);

  const random = () => Math.floor(Math.random() * (120 - 30 + 1)) + 30;

  return (
    <>
      <section className="m-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} seconds={random()} />
        ))}
      </section>
    </>
  );
};

export default Home;
