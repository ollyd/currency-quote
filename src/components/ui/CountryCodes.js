import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import countries from '../../utils/countries.json';

export default function CountryCodes(props) {
  const { value, ...rest } = props;

  return (
    <StyledFormControl>
      <InputLabel>Code</InputLabel>
      <Select {...rest} value={value}>
        {countries.map(country => (
          <StyledMenuItem key={country.cca2} value={country.code} disabled={country.code === 0 ? 'disabled' : false}>
            {`${country.cca2} (+${country.code})`}
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
}

const StyledFormControl = styled(FormControl)`
  && {
    margin: 0.8rem 0;

    & div {
      font-size: 1.6rem;
      line-height: 2rem;
    }

    & label {
      font-size: 1.6rem;
    }
  }
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    font-size: 1.6rem;
  }
`;

CountryCodes.propTypes = {
  value: PropTypes.number.isRequired,
};
