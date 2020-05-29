import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  ref?: string;
}

export const Theorem: FC<Props> = ({ name, ref, children }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Contents>{children}</Contents>
    </Container>
  );
};

const Container = styled.dl`
  background: #00000011;
`;

const Title = styled.dt`
  padding: 0 0.7rem;
  font-size: 1.3rem;
  border-bottom: solid 1px #000;
`;

const Contents = styled.dd`
  padding: 0.7rem;
`;
