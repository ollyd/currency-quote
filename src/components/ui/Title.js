import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Title(props) {
  const { title } = props;

  return (
    <TitleContainer>
      <H1>{title}</H1>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    flex: 1;
    border-bottom: ${theme.border};
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 90rem;
    margin: 2rem auto;

    @media (max-width: 600px) {
      margin: 8rem 0 2rem 0;
    }
  `}
`;

const H1 = styled.h1`
  ${({ theme }) => `
    margin-bottom: 0.8rem;
    font-size: 2.4rem;
    color: ${theme.palette.text.primary};
    font-weight: 300;
  `}
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
