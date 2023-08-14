import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #292c2e;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header: React.FC = () => {
  return <Wrapper>都道府県別の人口推移グラフ</Wrapper>;
};

export { Header };
