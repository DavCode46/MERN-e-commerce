import { useState, useEffect } from "react";
import ProductCard from "@ui/ProductCard";
import { PRODUCTS } from "@data/data.js";
import { useSearch } from "@contexts/SearchContext"; 
import FadeAnimation from '@animations/FadeAnimation'
import ScrollAnimation from "@animations/ScrollAnimation";

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
    <div className="products__grid bg-primary-bg p-6 mt-5 w-full">
      {filteredProducts.map(product => (
        <ScrollAnimation key={product.id}>
          <ProductCard
            brand={product.brand}
            product={product.product}
            productImage={product.productImage}
            price={product.price}
            productStars={product.stars}
          />
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default Products;
