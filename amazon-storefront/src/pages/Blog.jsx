import React, { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost';
import styled from 'styled-components';

const BlogPage = styled.div`
  padding: 2rem;
  background: white;

background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data/blogPosts.json')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
  

  return (
    <BlogPage>
      <h1>Blog</h1>
      <div>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </BlogPage>
  );
};

export default Blog;
