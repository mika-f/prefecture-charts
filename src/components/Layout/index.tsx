"use client";

import React from "react";
import styled from "styled-components";

import { Header } from "../Headers";
import { Footer } from "../Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.main`
  flex-grow: 1;
`;

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export { Layout };
