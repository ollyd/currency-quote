import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Loading from 'components/ui/Loading';
import CountryCodes from 'components/ui/CountryCodes';
import Currencies from 'components/ui/Currencies';
import Card from 'components/ui/Card';
import StyledButton from 'components/ui/StyledButton';

export default function GetQuote(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [setError] = useState(null);

  const {
    response,
    setResponse,
    setShowQuote,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
  } = props;

  const handleSubmit = async () => {
    setIsLoading(true);
    let json;

    try {
      const res = await fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json'`);
      json = await res.json();
      setResponse(json);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
    if (json.CustomerRate) setShowQuote(true);
  };

  return (
    <Form
      onSubmit={(event) => {
        handleSubmit();
        event.preventDefault();
      }}
    >
      <Card>
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
            type="number"
            min="1"
            required
            fullWidth
            marginleft="true"
          />
        </InputGroup>

        {response ? response.SystemMessage && <ErrorMessage>{response.SystemMessage}</ErrorMessage> : null}

        <ButtonWrapper>
          <StyledButton variant="contained" type="submit" disabled={isLoading}>Get Quote</StyledButton>
          {isLoading && <Loading size={24} />}
        </ButtonWrapper>
      </Card>
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin: 1.6rem 0;
`;

const StyledTextField = styled(TextField)`
  ${({ marginleft, marginright }) => `
    && {
      flex: 1;

      margin-top: 0.8rem;
      margin-bottom: 0.8rem;
      margin-left: ${marginleft ? '0.8rem' : '0'};
      margin-right: ${marginright ? '0.8rem' : '0'};

      & label, input {
        font-size: 1.6rem;
      }

      @media (max-width: 600px) {
        margin: 0.8rem 0;
      }
    }
  `}
`;

GetQuote.propTypes = {
  setResponse: PropTypes.func.isRequired,
  setShowQuote: PropTypes.func.isRequired,
  fromCurrency: PropTypes.string.isRequired,
  setFromCurrency: PropTypes.func.isRequired,
  toCurrency: PropTypes.string.isRequired,
  setToCurrency: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  response: PropTypes.shape({}),
};

GetQuote.defaultProps = {
  response: null,
};
