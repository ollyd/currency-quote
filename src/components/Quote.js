import React, { useState } from 'react';
import styled from 'styled-components';
import GetQuote from './GetQuote';
import ShowQuote from './ShowQuote';
import Title from './ui/Title';

export default function Quote() {
  const [response, setResponse] = useState(null);

  return (
    <Container>
      <Title title="Quick Quote" />
      {response === null ? <GetQuote setResponse={setResponse} /> : <ShowQuote />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column
  padding: 8rem;

  @media (max-width: 600px) {
    padding: 1.6rem;
  }
`;
