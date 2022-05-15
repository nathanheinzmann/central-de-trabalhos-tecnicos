import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }
    
    body {
      background: ${theme.colors.gallery};
      color: ${theme.colors.mineShaft};
      
      font: 400 16px Roboto, sans-serif;
      &::-webkit-scrollbar {
        width: 0px;
        position: absolute;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.danube};
        border-radius: 4px;
      }
      &::-webkit-scrollbar-track {
        background-color: ${theme.colors.spunPearl};
      }
    }
  `}
`;
