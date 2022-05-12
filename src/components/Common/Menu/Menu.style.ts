import styled, { css } from 'styled-components';
import { DefaultSection } from '@src/themes/common';

export const Container = styled(DefaultSection)`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.denim};
    padding: 5px 15px;
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 5px 10px;
    }
  `}
`;

export const LinkArea = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    /* width: 40px; */
    height: 40px;
    padding-right: 15px;

    @media (max-width: ${theme.breakpoints.sm}) {
      padding-right: 10px;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.white};
    padding: 15px 0px 15px 15px;
    border-left: 1px solid ${theme.colors.silver};
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 15px 0px 15px 10px;
    }
  `}
`;