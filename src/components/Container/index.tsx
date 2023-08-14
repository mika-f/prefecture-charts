"use client";

import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

export { Container };
