import ProductCard from "@ui/ProductCard";
import { PRODUCTS } from '@data/data.js';

const Products = () => {
  return (
    <div className="products__grid bg-primary-bg p-6 mt-5">
      {PRODUCTS.map((product) => (
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
