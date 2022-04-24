import styled, { css } from "styled-components";
import { ModalProps } from "./Modal.types";

export const Modal = styled.div<ModalProps>`
  ${({ open }) => css`
    opacity: ${open ? 1 : 0};
    visibility: ${open ? 'visible' : 'hidden'};
  `}
  align-items: center;
  background: green;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: auto;
  z-index: 10;
`;

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

export const Wrapper = styled.div`
  padding: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperInfoDialog = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-bottom: 20px;
`;