import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loading from 'components/ui/Loading';
import CountryCodes from 'components/ui/CountryCodes';
import Currencies from 'components/ui/Currencies';

export default function GetQuote({ setResponse }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [number, setNumber] = useState('');
  const [fromCurrency, setFromCurrency] = useState('AUD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(0.00);
  const [isLoading, setIsLoading] = useState(false);
  const [setError] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json'`);
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  return (
    <Form
      onSubmit={(event) => {
        handleSubmit();
        event.preventDefault();
      }}
    >
      <StyledPaper>
        <InputGroup>
          <StyledTextField
            label="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            fullWidth
            marginright="true"
          />
          <StyledTextField
            label="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
            fullWidth
            marginleft="true"
          />
        </InputGroup>

        <InputGroup>
          <StyledTextField
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
        </InputGroup>

        <InputGroup>
          <CountryCodes
            name="countryCode"
            onChange={e => setCountryCode(e.target.value)}
            value={countryCode || 61}
          />
          <StyledTextField
            label="Telephone/Mobile"
            name="number"
            onChange={e => setNumber(e.target.value)}
            value={number}
            fullWidth
            marginleft="true"
          />
        </InputGroup>

        <InputGroup>
          <Currencies
            name="fromCurrency"
            label="From Currency"
            onChange={e => setFromCurrency(e.target.value)}
            value={fromCurrency}
            fullWidth
            marginRight
          />
          <Currencies
            name="toCurrency"
            label="To Currency"
            onChange={e => setToCurrency(e.target.value)}
            value={toCurrency}
            fullWidth
            marginRight
            marginLeft
          />
          <StyledTextField
            name="amount"
            label="Amount"
            onChange={e => setAmount(e.target.value)}
            value={amount}
            fullWidth
            marginleft="true"
          />
        </InputGroup>

      </StyledPaper>

      <ButtonWrapper>
        <StyledButton variant="contained" type="submit" disabled={isLoading}>Get Quote</StyledButton>
        {isLoading && <Loading size={24} />}
      </ButtonWrapper>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const InputGroup = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  right: 2.4rem;
  bottom: 2.4rem;
  z-index: 1;
`;

const StyledPaper = styled(Paper)`
  && {
    flex: 1;
    padding: 1.6rem;
    max-width: 90rem;
  }
`;

const StyledTextField = styled(TextField)`
  ${({ marginleft, marginright }) => `
    && {
      flex: 1;
      margin-top: 0.8rem;
      margin-bottom: 0.8rem;
      margin-left: ${marginleft ? '0.8rem' : '0'};
      margin-right: ${marginright ? '0.8rem' : '0'};

      @media (max-width: 600px) {
        margin: 0.8rem 0;
      }
    }
  `}
`;

const StyledButton = styled(Button)`
  ${({ theme }) => `
    && {
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};

      &:hover {
        background-color: ${theme.palette.primary.dark};
      }
    }
  `}
`;

GetQuote.propTypes = {
  setResponse: PropTypes.func.isRequired,
};
