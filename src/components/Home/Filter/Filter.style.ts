import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    padding: 0 24px 0 0;
    height: 28px;

    @media (max-width: ${theme.breakpoints.md}) {
      height: 20px;
      padding: 0 16px 0 0;
    }
  `}
`;