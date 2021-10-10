import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9e9e9e;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <div>
      <ul id="nav">
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/create-post">CreatePost</StyledLink>
        </li>
      </ul>
    </div>
  );
}
