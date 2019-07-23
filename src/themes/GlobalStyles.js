import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => `
    html {
      font-family: 'Roboto', sans-serif;
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.palette.background.default};
      color: ${theme.palette.text.primary};
      font-size: 1.4rem;
      line-height: 1.5;
      margin: 0;
      padding: 0;

      &.no-scroll {
        overflow: hidden;
      }
    }

    html,
    body,
    #root {
      height: 100%;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: ${theme.palette.text.primary};
      text-decoration: none;
    }
  `}
`;
