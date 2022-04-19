import { useContext } from 'react';
import React from 'react';
import UserInputContext from '@src/contexts';
import * as S from './DashboardTopInfo.style';
import { DashboardTopInfoProps } from './DashboardTopInfo.types';
import { Filter } from '..';

const DashboardTopInfo = ({ dashboardContent, filterContent }: DashboardTopInfoProps) => {
  const { title, placeholder } = dashboardContent;
  const { inputTitle, setInputTitle } = useContext(UserInputContext);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Form>
        <S.MainInput
          onChange={({ target }) => setInputTitle(target.value)}
          placeholder={placeholder}
          value={inputTitle}
        />
        <Filter filterContent={filterContent} />
      </S.Form>
    </S.Container>
  );
};

export default DashboardTopInfo;
