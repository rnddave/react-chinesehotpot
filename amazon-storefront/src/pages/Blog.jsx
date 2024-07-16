import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getSortedPostsData } from '../utils/loadPosts';

const BlogPage = styled.div`
  padding: 2rem;
  background: white;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const PostLink = styled.div`
  margin-bottom: 1rem;
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getSortedPostsData();
      console.log('All posts on Blog:', postsData); // Log all posts
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  return (
    <BlogPage>
      <h1>Blog</h1>
      {posts.map(({ id, date, title }) => (
        <PostLink key={id}>
          <Link to={`/blog/${id}`}>
            <h2>{title}</h2>
            <small>{date}</small>
          </Link>
        </PostLink>
      ))}
    </BlogPage>
  );
};

export default Blog;