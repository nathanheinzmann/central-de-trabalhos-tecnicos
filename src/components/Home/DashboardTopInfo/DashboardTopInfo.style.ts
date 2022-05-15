import styled, { css } from 'styled-components';
import { DefaultContainer } from '@src/themes/common';

export const Container = styled(DefaultContainer)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    
    @media (max-width: ${theme.breakpoints.lg}) {
      display: flex;
      justify-content: center;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxl};
    line-height: ${theme.font.heights.xxxl};
    margin-top: 80px;
    max-width: 500px;
    
    @media (max-width: ${theme.breakpoints.lg}) {
      margin-top: 40px;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.font.sizes.xl};
      line-height: ${theme.font.heights.xl};
    }
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border-radius: 5px;
    display: flex;
    margin: 40px 0 24px;
    width: 100%;
    
    @media (max-width: ${theme.breakpoints.lg}) {
      margin: 30px 0 16px;
    }
  `}
`;

export const MainInput = styled.input`
  ${({ theme }) => css`
    border: none;
    background-color: transparent;
    color: ${theme.colors.mineShaft};
    flex: 1;
    font-size: ${theme.font.sizes.lg};
    height: 70px;
    line-height: ${theme.font.heights.lg};
    padding: 0 24px;
    
    ::placeholder {
      color: ${theme.colors.spunPearl};
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.font.sizes.sm};
      line-height: ${theme.font.heights.sm};
      height: 50px;
      padding: 0 12px;
    }
  `}
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WrapperInfoDialog = styled.div`
  ${({ theme }) => theme && css`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 0px;
  `};
`;