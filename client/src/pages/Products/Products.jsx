import { useState, useEffect } from "react";
import ProductCard from "@ui/ProductCard";
import { PRODUCTS } from "@data/data.js";

const Products = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category === "all") {
      setFilteredProducts(PRODUCTS);
    } else {
      const filtered = PRODUCTS.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  }, [category]);

  return (
    <div className="products__grid bg-primary-bg p-6 mt-5">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          brand={product.brand}
          product={product.product}
          productImage={product.productImage}
          price={product.price}
          productStars={product.stars}
        />
      ))}
    </div>
  );
};

export default Products;
