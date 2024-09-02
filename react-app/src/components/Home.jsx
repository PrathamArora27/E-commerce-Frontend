import React, { useEffect, useState } from 'react';
import Product from './Product';

const Home = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const request = await fetch(apiUrl);
      const data = await request.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error, "fetching error");
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>Nothing left to show</p>
      )}
    </div>
  );
};

export default Home;
