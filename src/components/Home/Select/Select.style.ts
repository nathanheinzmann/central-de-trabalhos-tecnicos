import styled, { css } from 'styled-components';
import * as Types from './Select.types';

export const Wrapper = styled.div<Types.OptionsProps>`
  ${({ label, show, theme }) => label && css`
    display: flex;
    flex: 1;
    position: relative;
    text-align: center;
    &:after {
      content: '${label}';
      background-color: ${theme.colors.white};
      color: ${show ? theme.colors.denim : theme.colors.mineShaft};
      font-size: ${theme.font.sizes.sm};
      left: 10px;
      padding: 0px 5px;
      top: -7px;
      pointer-events: none;
      position: absolute;
      transition: transform 200ms ease-in-out, color 200ms ease-in-out;
      height: 24px;
    }
  `}
`;

export const Field = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.spunPearl};
    cursor: pointer;
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 48px;
    padding: 14px 8px;
    position: relative;
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.mineShaft};
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
    border-bottom: 1px solid ${theme.colors.spunPearl};
    border-left: 1px solid ${theme.colors.spunPearl};
    border-right: 1px solid ${theme.colors.spunPearl};
    left: 0px;
    list-style: none;
    position: absolute;
    right: 0px;
    max-height: 250px;
    overflow-y: auto;
    top: calc(100% - 1px);
    transition: opacity 200ms ease-in-out;
    z-index: 100;

    ${show
      ? css`
      opacity: 1;
      visibility: visible;
    `
      : css`
      opacity: 0;
      visibility: hidden;
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
      background-color: ${theme.colors.silver};
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
