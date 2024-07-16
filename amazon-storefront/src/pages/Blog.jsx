import React from "react";
import BlogPost from "../components/BlogPost";
import styled from "styled-components";

const BlogPage = styled.div`
    padding: 2rem;
    background: white;
`;

const Blog = () => {

    // I don't think this is optimal,
    // but until I see how other blogs do this#
    // then I'll just make an array of posts in this space
    const posts = [
        // blog posts here (but this will not work long term)
    ];

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
