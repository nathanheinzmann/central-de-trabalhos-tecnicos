import styled, { css } from 'styled-components';
import * as Types from './Select.types';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

export const Field = styled.div<Types.FieldProps>`
  ${({ disabled, theme, isOpen }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.mineShaft};
    cursor: pointer;
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 48px;
    padding: 14px 8px;
    position: relative;

    ${isOpen
      ? css`
          background-color: ${theme.colors.silver};
        `
      : css`
          background-color: transparent;
        `}
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.denim};
    font-size: ${theme.font.sizes.sm};
  `}
`;

export const IconAdapter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 18px;
`;

export const Options = styled.ul<Types.OptionsProps>`
  ${({ theme, show }) => css`
    background-color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.mineShaft};
    border-left: 1px solid ${theme.colors.mineShaft};
    border-right: 1px solid ${theme.colors.mineShaft};
    left: 0px;
    list-style: none;
    position: absolute;
    right: 0px;
    top: calc(100% - 1px);
    transition: opacity 200ms ease-in-out;
    z-index: 50;

    ${show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
  `}
`;

export const Option = styled.li`
  ${({ theme }) => css`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 15px 8px;

    &:hover {
      background-color: ${theme.colors.mineShaft};
    }
  `}
`;

export const OptionLabel = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danube};
    font-size: ${theme.font.sizes.sm};
  `}
`;

export const TagAdapter = styled.div`
  margin-left: 10px;
  max-height: 16px;
`;
