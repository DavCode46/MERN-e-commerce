import { useState, useEffect } from "react";
import ProductCard from "@ui/ProductCard";
import { PRODUCTS } from "@data/data.js";
import { useSearch } from "@contexts/SearchContext"; 

const Products = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchTerm } = useSearch(); 

  useEffect(() => {
    let filtered = PRODUCTS;

    if (category !== "all") {
      filtered = filtered.filter(product => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.product.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [category, searchTerm]);

  return (
    <div className="products__grid bg-primary-bg p-6 mt-5">
      {filteredProducts.map(product => (
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
