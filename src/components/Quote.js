import React, { useState } from 'react';
import styled from 'styled-components';
import GetQuote from './GetQuote';
import ShowQuote from './ShowQuote';

export default function Quote() {
  const [response, setResponse] = useState(null);

  return (
    <Container>
      {response === null ? <GetQuote setResponse={setResponse} /> : <ShowQuote />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem;
  height: 100vh;

  @media (max-width: 600px) {
    padding: 1.6rem;
  }
`;
