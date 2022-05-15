import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme && css`
    display: flex;
    flex-direction: column;
    padding: 24px;
    align-items: center;
    @media (max-width: ${theme.breakpoints.lg}) {
      padding: 16px;
    }
  `}
`;