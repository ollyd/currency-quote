import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default styled(Button)`
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

      @media (max-width: 600px) {
        margin: 0 auto;
      }
    }
  `}
`;
