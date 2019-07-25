import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import currencies from '../../utils/currencies.json';

export default function Currencies(props) {
  const {
    label,
    value,
    marginRight,
    marginLeft,
    ...rest
  } = props;

  return (
    <StyledFormControl marginleft={marginLeft ? 'true' : null} marginright={marginRight ? 'true' : null} required>
      <InputLabel htmlFor="currencies">{label}</InputLabel>
      <Select {...rest} value={value}>
        {currencies.map(currency => (
          <StyledMenuItem key={currency.value} value={currency.value}>
            {currency.type}
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
}

const StyledFormControl = styled(FormControl)`
  ${({ marginleft, marginright }) => `
    && {
      margin-top: 0.8rem;
      margin-bottom: 0.8rem;
      margin-left: ${marginleft ? '0.8rem' : '0'};
      margin-right: ${marginright ? '0.8rem' : '0'};
      width: 35%;

      & div {
        font-size: 1.6rem;
        line-height: 2rem;
      }

      & label {
        font-size: 1.6rem;
      }

      @media (max-width: 600px) {
        width: 100%;
        margin: 0.8rem 0;
      }
    }
  `}
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    font-size: 1.6rem;
  }
`;

Currencies.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  marginRight: PropTypes.bool,
  marginLeft: PropTypes.bool,
};

Currencies.defaultProps = {
  marginLeft: false,
  marginRight: false,
};
