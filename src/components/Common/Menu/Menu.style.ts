import { DefaultSection } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Container = styled(DefaultSection)`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.denim};
    padding: 5px 0;
  `}
`;

export const MainLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    text-decoration: none;
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.white};
    padding: 15px;
    border-right: 1px solid ${theme.colors.silver};
  `}
`;