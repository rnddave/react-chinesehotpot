import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPostData } from '../utils/loadPosts';

const PostPage = styled.div`
  padding: 2rem;
  background: white;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Post = () => {
    const { id } = useParams();
    const [postData, setPostData] = useState({});
  
    useEffect(() => {
      const fetchPostData = async () => {
        const data = await getPostData(id);
        setPostData(data);
      };
      fetchPostData();
    }, [id]);
  
    return (
      <PostPage>
        {postData.title && (
          <>
            <h1>{postData.title}</h1>
            <small>{postData.date}</small>
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
          </>
        )}
      </PostPage>
    );
  };
  
  export default Post;