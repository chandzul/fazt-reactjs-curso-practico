// rcc
import React, { useState, useEffect } from 'react';

const Posts = () => {

  console.log('Posts');

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([])

  useEffect(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    setPosts(data);
    setLoading(false);
    console.log(posts);
  }, [])

  return (
    <div>
      { loading ? 'cargando' : '' }
      {
        posts && posts.map( post => {
          return <h1 key={post.id}> { post.title } </h1>
        })
      }
    </div>
  );
}

export default Posts;