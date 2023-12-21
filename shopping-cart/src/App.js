import Navbar from "./Components/Navbar.js";
import Product from "./Components/Product.js";
import Cart from "./Components/Cart.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { list } from "./data.js";

function App() {
  // State variables for managing the cart and product items in the cart
  const [cart, setCart] = useState([]);
  const [productItemsInCart, setProductItemsInCart] = useState([
    { id: 1, num: 0, price: 29.97 },
    { id: 2, num: 0, price: 23.76 },
    { id: 3, num: 0, price: 18.99 },
    { id: 4, num: 0, price: 56.77 },
    { id: 5, num: 0, price: 15.99 },
    { id: 6, num: 0, price: 19.98 },
    { id: 7, num: 0, price: 7.5 },
    { id: 8, num: 0, price: 14.94 },
    { id: 9, num: 0, price: 25.99 },
    { id: 10, num: 0, price: 17.99 },
    { id: 11, num: 0, price: 34.99 },
    { id: 12, num: 0, price: 32.87 },
  ]);

  // Function to handle adding an item to the cart
  const handleAddItem = (product) => {
    let newCart = [...cart];
    let newProductItemsInCart = [...productItemsInCart];

    newCart.push(product);
    setCart(() => {
      return newCart;
    });

    newProductItemsInCart = newProductItemsInCart.map((productItem) => {
      if (productItem.id === product.id) {
        productItem.num = productItem.num + 1;
      }
      return productItem;
    });

    setProductItemsInCart(newProductItemsInCart);
  };

  // Function to handle removing an item from the cart
  const handleRemoveItem = (product) => {
    let newCart = [...cart];
    let newProductItemsInCart = [...productItemsInCart];

    if (newCart.length > 0) {
      let itemIndex = newCart.findIndex((item) => {
        return item.id === product.id;
      });
      if (itemIndex > -1) {
        newCart.splice(itemIndex, 1);
        setCart(() => {
          return newCart;
        });

        newProductItemsInCart = newProductItemsInCart.map((productItem) => {
          if (productItem.id === product.id) {
            productItem.num = productItem.num - 1;
          }
          return productItem;
        });

        setProductItemsInCart(newProductItemsInCart);
      }
    }
  };

  // Function to handle removing an entire product from the cart
  const handleRemoveProduct = (product) => {
    let newCart = [...cart];
    let newProductItemsInCart = [...productItemsInCart];

    let filteredNewCart = newCart.filter((cartItem) => {
      return cartItem.id !== product.id;
    });

    setCart(() => {
      return filteredNewCart;
    });

    // Reset the quantity of the specified product to zero in productItemsInCart
    newProductItemsInCart = newProductItemsInCart.map((productItem) => {
      if (productItem.id === product.id) {
        productItem.num = 0;
      }
      return productItem;
    });

    setProductItemsInCart(newProductItemsInCart);
  };

  return (
    <div>
      <BrowserRouter>
        {/* Navbar component with cartSize prop to display the number of items in the cart */}
        <Navbar cartSize={cart.length}></Navbar>
        <Routes>
          {/* Route for the Product component */}
          <Route
            path="/"
            element={
              <Product
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
                productItemsInCart={productItemsInCart}
              ></Product>
            }
          ></Route>
          {/* Route for the Cart component */}
          <Route
            path="/cart"
            element={
              <Cart
                list={list}
                productItemsInCart={productItemsInCart}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
                handleRemoveProduct={handleRemoveProduct}
              ></Cart>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
