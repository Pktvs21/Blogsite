import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import styled from 'styled-components';

const Blogheading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
  color:red;
`;
const SubTitle=styled.p`
{font-size: 33px;}
`;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log('posts', posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      <Blogheading>Tech Blog</Blogheading>
      <div id="blog-by">Name</div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <SubTitle>{post.subTitle}</SubTitle>
        </div>
      ))}
    </div>
  );
}
