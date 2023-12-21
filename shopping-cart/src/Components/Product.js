import React from "react";
import { list as products } from "../data.js";
import "../Styles/Product.css";
import ProductCard from "./ProductCard.js";

const Product = ({ handleRemoveItem, handleAddItem, productItemsInCart }) => {
  return (
    // Container for displaying product cards
    <div className="product-container">
      <section>
        {/* Iterate over each product in the list and render a ProductCard */}
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
              handleAddItem={handleAddItem}
              // Number of items in the cart for the current product
              numOfItemsInCart={
                productItemsInCart.filter((item) => {
                  return item.id === product.id;
                })[0].num
              }
            ></ProductCard>
          );
        })}
      </section>
    </div>
  );
};

export default Product;
