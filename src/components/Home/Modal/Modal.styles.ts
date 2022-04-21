import styled, { css } from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  ${({ theme }) => theme && css`
    border: solid 1px ${theme.colors.silver};
    color: ${theme.colors.mineShaft};
    background-color: transparent;
    font-size: ${theme.font.sizes.md};
    line-height: ${theme.font.sizes.md};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px 0;
    border-radius: 5px;
    margin: 15px 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      border: solid 1px ${theme.colors.mineShaft};
    }
  `};
`;

export const WrapperInfoDialog = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;