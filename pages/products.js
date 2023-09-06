import React from 'react';

const Products = ({ posts }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from an API or another data source
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Products;