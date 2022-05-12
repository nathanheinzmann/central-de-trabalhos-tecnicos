import styled, { css } from 'styled-components';
import { DefaultContainer } from '@src/themes/common';

export const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const BackArea = styled.a`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  padding-bottom: 20px;
`;

export const BackText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    line-height: ${theme.font.heights.md};
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.mineShaft};
  `}
`;

export const BackIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    line-height: ${theme.font.heights.xl};

    @media (max-width: ${theme.breakpoints.xs}) {
      font-size: ${theme.font.sizes.lg};
      line-height: ${theme.font.heights.lg};
    }
  `}
`;

export const AuthorName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    line-height: ${theme.font.heights.md};
  `}
`;

export const TeacherName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    line-height: ${theme.font.heights.md};
  `}
`;

export const PDF = styled.iframe`
  ${({ theme }) => css`
    border: none;
    height: 90vh;
    margin-top: 20px;
    width: 100%;
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0;
    }
  `}
`;
