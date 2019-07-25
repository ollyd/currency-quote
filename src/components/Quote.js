import React, { useState } from 'react';
import styled from 'styled-components';
import GetQuote from './GetQuote';
import ShowQuote from './ShowQuote';
import Title from './ui/Title';

export default function Quote() {
  const [response, setResponse] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  const [fromCurrency, setFromCurrency] = useState('AUD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('');


  return (
    <Container>
      <Title title="Quick Quote" />
      {!showQuote ? (
        <GetQuote
          response={response}
          setResponse={setResponse}
          setShowQuote={setShowQuote}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
          setAmount={setAmount}
        />
      ) : (
        <ShowQuote
          response={response}
          setShowQuote={setShowQuote}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
        />
      )}
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
