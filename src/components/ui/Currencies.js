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
    <StyledFormControl marginleft={marginLeft} marginright={marginRight}>
      <InputLabel htmlFor="currencies">{label}</InputLabel>
      <Select {...rest} value={value}>
        {currencies.map(currency => (
          <MenuItem key={currency.value} value={currency.value}>
            {currency.type}
          </MenuItem>
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
      width: 33.3%;

      @media (max-width: 600px) {
        width: 100%;
        margin: 0.8rem 0;
      }
    }
  `}
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
