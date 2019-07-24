import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import v4 from 'uuid/v4';
import countries from '../../utils/countries.json';

export default function CountryCodes(props) {
  const { value, ...rest } = props;

  return (
    <StyledFormControl>
      <InputLabel>Code</InputLabel>
      <NativeSelect {...rest} value={value} input={<Input />}>
        {countries.map(country => (
          <option key={v4()} value={country.code} disabled={country.code === 0 ? 'disabled' : false}>
            {`${country.cca2} (+${country.code})`}
          </option>
        ))}
      </NativeSelect>
    </StyledFormControl>
  );
}

const StyledFormControl = styled(FormControl)`
  && {
    margin: 0.8rem 0;
  }
`;

CountryCodes.propTypes = {
  value: PropTypes.number.isRequired,
};
