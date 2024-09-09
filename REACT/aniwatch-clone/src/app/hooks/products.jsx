"use client";
import { Press_Start_2P } from "next/font/google";
import { useEffect, useState } from "react";

const p2 = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin-ext"],
});

export const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component dismounted");
    };
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [limit]);

  return (
    <div className="flex items-center justify-center w-full h-screen gap-4">
      <select
        defaultValue={10}
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <ul className={p2.className}>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
