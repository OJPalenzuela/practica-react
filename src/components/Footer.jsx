import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <Items>A</Items>
        <li>B</li>
        HEllo world
      </ul>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #5b5b5b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Items = styled.li`
  padding: 4px;
  background-color: white;
`;

export default Footer;
