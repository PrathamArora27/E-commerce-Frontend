import React, { useEffect, useState } from 'react'
import Product from './Product';

const Home = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [posts,setposts] = useState([]);
  const fetchData = async()=>{
    setLoading(true);
    try {
        const request = await fetch(apiUrl);
        const data = await request.json();
        console.log(data);
        setposts(data);
        
    } catch (error) {
        console.log(error,"fetch karte time error");
        setposts([])
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      {loading
      ?(<p>loading..</p>)
      :posts.length>0?(
        posts.map((post)=>{
            <Product key={post.id} post={post}/>
        })
      )
    :(<p>Nothing left to show</p>)}
    </div>
  )
}

export default Home
