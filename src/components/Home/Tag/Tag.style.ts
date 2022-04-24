import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: none;
    margin: 20px 5px 0;
    min-width: 32px;
    justify-content: center;
    padding: 5px;
    font-size: ${theme.font.sizes.xxxs};
    line-height: ${theme.font.heights.xxxs};
    background-color: ${theme.colors.denim};
    color: ${theme.colors.white};
    cursor: pointer;
    &::after {
      content: '';
      display: block;
      background-image: url('assets/images/close.svg');
      height: 15px;
      width: 15px;
      margin-left: 5px;
    }
  `}
`;