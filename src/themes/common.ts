import styled, { css } from 'styled-components';

export const DefaultWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
  `}
  `;

export const DefaultSection = styled.section`
  ${({ theme }) => css`
    padding: 60px 0px;
    position: relative;
    @media (max-width: ${theme.breakpoints.lg}) {
      padding: 40px 0;
    }
  `}
`;

export const DefaultContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const DefaultImage = styled.img`
  height: auto;
  max-width: 100%;
`;
