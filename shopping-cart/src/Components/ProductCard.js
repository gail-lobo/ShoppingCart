import React from "react";
import "../Styles/ProductCard.css";

const ProductCard = ({
  product,
  handleRemoveItem,
  handleAddItem,
  numOfItemsInCart,
}) => {
  return (
    // Container for displaying individual product card
    <div className="productCard">
      {/* Image container */}
      <div className="image-container">
        {/* Product image */}
        <img src={product.img} alt={product.title}></img>
      </div>

      {/* Details section */}
      <div className="details">
        {/* Product details */}
        <p>{product.title}</p>
        <p>{product.author}</p>
        <p>Price: ${product.price}</p>

        {/* Quantity control buttons */}
        <button
          onClick={() => {
            // Click handler for removing an item from the cart
            handleRemoveItem(product);
          }}
        >
          -
        </button>
        {/* Number of items in the cart */}
        {numOfItemsInCart}
        <button
          onClick={() => {
            // Click handler for adding an item to the cart
            handleAddItem(product);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
