import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, addToCart } from "../features/productSlice";

import axios from "axios";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/productList")
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  const handleAddToCart = (productId) => {
    dispatch(addToCart({ productId, quantity: 1 }));
  };

  return (
    <div>
      <div className="container ">
        <h2>Product List</h2>
        &nbsp;&nbsp;
        <ul className="list-group">
          {products.map((product) => (
            <li key={product.id} className="list-group-item">
              {product.name} - {product.price} - {product.category}
              &nbsp;&nbsp;
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
