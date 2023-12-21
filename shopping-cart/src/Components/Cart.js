import React, { useState, useEffect } from "react";
import "../Styles/Cart.css";

const Cart = ({
  list,
  productItemsInCart,
  handleAddItem,
  handleRemoveItem,
  handleRemoveProduct,
}) => {
  // State variables to manage cart visibility and total price
  const [showCartFlag, setShowCartFlag] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Filter cart items with quantity greater than 0
  let filteredCart = productItemsInCart.filter((item) => {
    return item.num > 0;
  });

  // Update cart visibility and total price when the cart items change
  useEffect(() => {
    if (filteredCart.length > 0) {
      setShowCartFlag(true);
      setTotalPrice(
        filteredCart.reduce((a, c) => {
          return a + c.price * c.num;
        }, 0)
      );
    } else if (filteredCart.length === 0) {
      setShowCartFlag(false);
      setTotalPrice(0);
    }
  }, [productItemsInCart]);

  return (
    <div className="cart-container">
      {/* Cart is empty message */}
      <div className={showCartFlag ? "cart-not-empty" : "cart-empty"}>
        <p>Cart is Empty!</p>
      </div>

      {/* Cart content */}
      <div className={showCartFlag ? "" : "show-no-cart"}>
        {filteredCart.map((item, index) => {
          // Get product details for the current cart item
          let product = list.filter((prodItem) => {
            return prodItem.id === item.id;
          });

          // Render individual cart item
          return (
            <div className="cart-section" key={index}>
              {/* Remove button */}
              <div className="remove-button-section">
                <button
                  onClick={() => {
                    handleRemoveProduct(product[0]);
                  }}
                >
                  Remove
                </button>
              </div>

              {/* Cart item details */}
              <div className="cart-inner-section">
                {/* Product image and title */}
                <div className="img-section">
                  <img src={product[0].img} alt={product[0].title}></img>
                  <div>{product[0].title}</div>
                </div>

                {/* Quantity control and item price */}
                <div className="button-section">
                  <button
                    onClick={() => {
                      handleRemoveItem(product[0]);
                    }}
                  >
                    -
                  </button>
                  <div>{item.num}</div>
                  <button
                    onClick={() => {
                      handleAddItem(product[0]);
                    }}
                  >
                    +
                  </button>
                </div>
                <div>Price: ${(item.price * item.num).toFixed(2)}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total price section */}
      <div
        className={showCartFlag ? "totalPrice-section" : "show-no-total-price"}
      >
        Total Price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
