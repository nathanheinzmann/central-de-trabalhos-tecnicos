import styled, { css } from 'styled-components';
import { InfoProps } from './Response.types';
import { DefaultContainer } from '@src/themes/common';

export const Container = styled(DefaultContainer)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;

    @media (max-width: ${theme.breakpoints.lg}) {
      padding-bottom: 15px;
    }
  `}
`;

export const ResponseWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    margin-top: 40px;
    padding: 24px;
    text-decoration: none;
    transition: 0.2s;
    width: 100%;
    
    &:hover {
      box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.1);
    }
    
    @media (max-width: ${theme.breakpoints.lg}) {
      margin-top: 15px;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      align-items: flex-start;
      flex-direction: column;
    }
  `}
`;

export const TitleName = styled.div`
  ${({ theme }) => css`
    align-items: center;
    flex: 1;
    margin: 0 16px;

    @media (max-width: ${theme.breakpoints.md}) {
      margin: 0;
    }
` }
`;

export const ArticleTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gunPowder};
    font-size: ${theme.font.sizes.lg};
    line-height: ${theme.font.heights.lg};
    width: 600px;

    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.font.sizes.md};
      line-height: ${theme.font.heights.md};
      width: 400px;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      width: 100%;
    }
  `}
`;

export const AuthorName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.spunPearl};
    font-size: ${theme.font.sizes.lg};
    line-height: ${theme.font.heights.lg};
    margin-top: 4px;
    
    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.font.sizes.sm};
      line-height: ${theme.font.heights.sm};
    }
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 32px;
    text-align: end;
    @media (max-width: ${theme.breakpoints.lg}) {
      height: 30px;
    }
    @media (max-width: ${theme.breakpoints.md}) {
      height: unset;
      margin: 24px 0 0 0;
      text-align: start;
    }
  `}
`;

export const Info = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gunPowder};
    font-size: ${theme.font.sizes.md};
    line-height: ${theme.font.heights.md};
    margin-top: 3px;
    position: relative;

    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.font.sizes.sm};
      line-height: ${theme.font.heights.sm};
    }
  `}
`;

export const ResultsFoundWrapper = styled.div`
  ${({ theme }) => css`
    border-bottom: solid ${theme.colors.silver} 1px;
    display: flex;
    padding: 24px;
    width: 100%;
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 16px 16px 16px 0px;
    }
  `}
`;

export const ResultsFound = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    line-height: ${theme.font.heights.xl};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.font.sizes.md};
      line-height: ${theme.font.heights.md};
    }
  `}
`;

export const NotFoundWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 24px;
    @media (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotFoundTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxl};
    line-height: ${theme.font.heights.xxxl};
    font-weight: ${theme.font.weights.bold};
    max-width: 350px;
  `}
`;

export const NotFoundOptions = styled.ul`
  padding: 24px 0 0 40px;
`;

export const NotFoundDescription = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    line-height: ${theme.font.heights.md};
    font-weight: ${theme.font.weights.regular};
    margin-bottom: 12px;
    &::marker {
      color: ${theme.colors.denim};
    }
  `}
`;

export const NotFoundImage = styled.img`
  ${({ theme }) => css`
    filter: grayscale();
    width: 200px;
    
    @media (max-width: ${theme.breakpoints.md}) {
      margin-top: 16px;
    }
  `}
`;