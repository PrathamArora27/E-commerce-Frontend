import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/Cartslice';

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(remove(post.id));
  };

  const addHandler = () => {
    dispatch(add(post));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-2">Price: ${post.price}</p>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <div className="flex justify-center mb-4">
        <img src={post.image} alt={post.title} className="w-48 h-auto" />
      </div>
      <div className="text-gray-500 mb-4">
        Rating: {post.rating.rate} ({post.rating.count} people)
      </div>
      <div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={removeHandler}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={addHandler}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
