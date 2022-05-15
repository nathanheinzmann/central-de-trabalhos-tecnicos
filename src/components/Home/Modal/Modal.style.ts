import styled, { css } from "styled-components";
import { ButtonProps, ModalProps } from "./Modal.types";

export const Modal = styled.div<ModalProps>`
    max-height: 0;
    overflow: hidden;
    align-items: center;
    display: flex;
    justify-content: center;
    transition: max-height 0.1s ease-in;
    width: 100%;

    &.open {
      max-height: 900px;
      transition: max-height 0.1s ease-out;
    }
`;

export const Buttons = styled.div`
  ${({ theme }) => theme && css`
    display: flex;
    justify-content: space-around;
    @media (max-width: ${theme.breakpoints.sm}) {
      flex-direction: column;
    }
  `}

`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, isBlue }) => theme && css`
    border: solid 1px ${theme.colors.silver};
    color: ${isBlue ? theme.colors.white : theme.colors.mineShaft};
    background-color: ${isBlue ? theme.colors.denim : 'transparent'};
    font-size: ${theme.font.sizes.md};
    line-height: ${theme.font.sizes.md};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px 0;
    border-radius: 5px;
    margin: 15px 5px 0px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      border: solid 1px ${theme.colors.mineShaft};
    }

    @media (max-width: ${theme.breakpoints.md}) {
      margin: 8px 5px 0px;
      padding: 10px 0;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme && css`
    border-radius: 5px;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    max-width: 1140px;
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 16px;
    }
  `};
`;

export const WrapperInfoDialog = styled.div`
  ${({ theme }) => theme && css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
    }
    @media (max-width: ${theme.breakpoints.sm}) {
      grid-template-columns: 1fr;
    }
  `};
`;