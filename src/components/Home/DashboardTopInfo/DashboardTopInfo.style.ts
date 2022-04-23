import { DefaultContainer } from '@src/themes/common';
import styled, { css } from 'styled-components';

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

    @media (max-width: ${theme.breakpoints.xs}) {
      font-size: ${theme.font.sizes.xxl};
      line-height: ${theme.font.heights.xxl};
    }
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border-radius: 5px;
    display: flex;
    margin-top: 40px;
    width: 100%;
    
    @media (max-width: ${theme.breakpoints.lg}) {
      margin-top: 30px;
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
    width: 200px;
    
    ::placeholder {
      color: ${theme.colors.spunPearl};
    }

    @media (max-width: ${theme.breakpoints.lg}) {
      height: 50px;
    }
  `}
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 20px;
`;