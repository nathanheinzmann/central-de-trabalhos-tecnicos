import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.mineShaft};
    font-size: ${theme.font.sizes.sm};
    left: 10px;
    padding: 0px 5px;
    top: 16px;
    pointer-events: none;
    position: absolute;
    transition: transform 200ms ease-in-out, color 200ms ease-in-out;

    @media (max-width: ${theme.breakpoints.md}) {
      top: 12px;
    }

    &.out {
      background: linear-gradient(0deg, transparent 50%, '${theme.colors.white}' 50%);
      color: ${theme.colors.mineShaft};
      transform: translateY(-24px) scale(0.9);
      @media (max-width: ${theme.breakpoints.md}) {
      transform: translateY(-20px) scale(0.9);
        
      }

      &.disabled {
        background: linear-gradient(0deg, transparent 40%, ${theme.colors.white} 40%);
      }
    }

    &.selected {
      color: ${theme.colors.denim};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid;
    border-color: ${theme.colors.spunPearl};
    color: ${theme.colors.mineShaft};
    display: flex;
    flex: 1;
    font-size: ${theme.font.sizes.xs};
    max-height: 48px;
    outline: none;
    padding: 16px 16px 14px 16px;
    transition: border-color 200ms ease-in-out;

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 10px 10px 8px 10px;
      min-height: 40px;
    }

    &:-webkit-autofill {
      background-color: transparent !important;
      -webkit-box-shadow: 0 0 0 50px ${theme.colors.white} inset;
    }

    &:focus {
      border-color: ${theme.colors.denim};
    }
  `}
`;