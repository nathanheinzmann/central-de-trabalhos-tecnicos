import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
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
      margin-top: 20px;
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
    margin-bottom: 24px;
    padding: 24px;
    width: 100%;
  `}
`;

export const ResultsFound = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    line-height: ${theme.font.heights.xl};
  `}
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotFoundTitle = styled.p`
  ${({ theme }) => css`
    font-size: 32px;
    font-weight: ${theme.font.weights.bold};
    max-width: 350px;
  `}
`;

export const NotFoundOptions = styled.ul`
  padding: 24px 0 0 40px;
`;

export const NotFoundDescription = styled.li`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: ${theme.font.weights.regular};
    margin-bottom: 16px;
    &::marker {
      color: ${theme.colors.denim};
    }
  `}
`;

export const NotFoundImage = styled.img`
  filter: grayscale();
  width: 200px;
`;