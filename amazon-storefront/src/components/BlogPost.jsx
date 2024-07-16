import React from "react";
import styled from "styled-components";
import ReactMarkDown from 'react-markdown';

const Post = styled.div`
    border: 1px solid #ff0000;
    padding: 1rem;
    margin: 1rem;
    background: white;
`;

const BlogPost = ({ post }) => {
    return (
        <Post>
            <h2>{post.title}</h2>
            <ReactMarkDown>{post.content}</ReactMarkDown>
        </Post>
    );
};

export default BlogPost;