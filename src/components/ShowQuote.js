import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Card from 'components/ui/Card';

export default function ShowQuote(props) {
  const {
    response,
    setResponse,
    fromCurrency,
    toCurrency,
    amount,
  } = props;

  const toAmount = amount * response.CustomerRate;

  const format = (num) => {
    return num.replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  return (
    <Container>
      <Card>
        <Heading>OFX Customer Rate</Heading>
        <CustomerRate>{response.CustomerRate}</CustomerRate>
        <Groups>
          <Group>
            <Heading>From</Heading>
            <Value>
              <CurrencySpan>{fromCurrency}</CurrencySpan>
              {format(parseInt(amount).toFixed(2))}
            </Value>
          </Group>
          <Group>
            <Heading>To</Heading>
            <Value>
              <CurrencySpan>{toCurrency}</CurrencySpan>
              {format(toAmount.toFixed(2))}
            </Value>
          </Group>
        </Groups>
        <ButtonWrapper onClick={() => setResponse(null)}>
          <StyledButton variant="contained" type="submit">New Quote</StyledButton>
        </ButtonWrapper>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Heading = styled.p`
  font-size: 2.2rem;
  font-weight: 300;
  text-align: center;
  margin: 0.8rem;
`;

const CustomerRate = styled.p`
  ${({ theme }) => `
    font-size: 3.6rem;
    font-weight: 300;
    text-align: center;
    color: ${theme.palette.primary.main};
    margin: 0.8rem;
  `}
`;

const Groups = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Group = styled.div`
  flex: 0 49%;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex: 1;
  }
`;

const Value = styled.p`
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

const CurrencySpan = styled.span`
  ${({ theme }) => `
    font-size: 2rem;
    color: ${theme.palette.primary.main};
    margin-right: 0.8rem;
  `}
`;

const ButtonWrapper = styled.div`
  margin: 1.6rem 0;
`;

const StyledButton = styled(Button)`
  ${({ theme }) => `
    && {
      height: 3.8rem;
      font-size: 1.6rem;
      margin-left: auto;
      display: block;
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};

      &:hover {
        background-color: ${theme.palette.primary.dark};
      }
    }
  `}
`;

ShowQuote.propTypes = {
  response: PropTypes.shape({}),
  setResponse: PropTypes.func.isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

ShowQuote.defaultProps = {
  response: null,
};
