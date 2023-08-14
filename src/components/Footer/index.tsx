import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  border-top: 1px solid #ccc;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.75rem;
`;

const Footer: React.FC = () => {
  return <Wrapper>&copy; 2023 Natsuneko</Wrapper>;
};

export { Footer };
