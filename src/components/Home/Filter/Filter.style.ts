import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.alto};
    border-radius: 0 5px 5px 0;
    height: 70px;

    @media (max-width: ${theme.breakpoints.md}) {
      height: 50px;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
      padding: 0 24px;
      border: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: ${theme.breakpoints.md}) {
        height: 50px;
        padding: 0 12px;
      }
  `}
`;

export const TitleButton = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    line-height: ${theme.font.heights.xl};
    color: ${theme.colors.mineShaft};
    font-weight: ${theme.font.weights.bold};
    margin-right: 24px;
    @media (max-width: ${theme.breakpoints.md}) {
      margin-right: 12px;
      font-size: ${theme.font.sizes.sm};
      line-height: ${theme.font.heights.sm};
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    height: 28px;

    @media (max-width: ${theme.breakpoints.md}) {
      height: 20px;
    }
  `}
`;