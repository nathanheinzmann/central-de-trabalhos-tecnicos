import styled, { css } from 'styled-components';
import { ModalStyleProps } from './ArticleMainInfo.types';
import { DefaultContainer } from '@src/themes/common';

export const Container = styled(DefaultContainer)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    margin-top: 80px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.colors.silver};
    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
      justify-items: unset;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxl};
    line-height: ${theme.font.heights.xxxl};
    padding: 0px 32px 0px 0px;
    border-right: 1px solid ${theme.colors.silver};
    
    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.font.sizes.xxl};
      line-height: ${theme.font.heights.xxl};
    }
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0 0 32px;
      border-right: unset;
      border-bottom: 1px solid ${theme.colors.silver};
    }
    @media (max-width: ${theme.breakpoints.xs}) {
      font-size: ${theme.font.sizes.xl};
      line-height: ${theme.font.heights.xl};
    }
  `}
`;

export const SideBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-left: 32px;
    @media (max-width: ${theme.breakpoints.md}) {
      align-items: unset;
      padding: 32px 0 0;
    }
  `}
`;

export const AuthorName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    line-height: ${theme.font.heights.xl};
  `}
`;

export const TeacherName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    line-height: ${theme.font.heights.lg};
  `}
`;

export const Modal = styled.div<ModalStyleProps>`
  ${({ isModalOpen }) => css`
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: rgba(0,0,0,0.9);
    z-index: 1;
    transition: 0.4s;
    ${!isModalOpen && css`
      opacity: 0;
      transition: visibility 0s .4s, opacity .4s ease-out, transform 0s .4s;
      visibility: hidden;
    `}
  `}
`;

export const PDF = styled.iframe`
  ${({ theme }) => css`
  margin: 16px 0;
  height: 100%;
  width: 100%;
  padding: 15px 100px;
  position: fixed;
  z-index: 0;
  border: none;
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0;
  }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.silver};
    border-radius: 4px;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weights.bold};
    line-height: ${theme.font.sizes.lg};
    margin-top: 8px;
    max-width: 340px;
    padding: 12px 12px 17px 14px;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: 100%;

    &:after,
    &:before {
      background-color: ${theme.colors.mineShaft};
      bottom: 0;
      content: '';
      display: block;
      position: absolute;
      right: 0;
    }

    &:before {
      height: 5px;
      left: 0;
      transition: height 0.2s;
      border-radius: 4px;
    }

    &:hover {
      &:after {
        width: 0;
      }

      &:before {
        height: 0;
      }
    }
    
    @media (max-width: ${theme.breakpoints.lg}) {
      display: block;
      margin: 30px auto 0;
      max-width: 100%;
    }
  `}
`;
