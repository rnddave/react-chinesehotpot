import React from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';

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
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </Post>
    );
};

export default BlogPost;