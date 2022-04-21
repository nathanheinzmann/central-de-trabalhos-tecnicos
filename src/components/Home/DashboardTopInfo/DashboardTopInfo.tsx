import React from 'react';
import * as S from './DashboardTopInfo.style';
import { DashboardTopInfoProps } from './DashboardTopInfo.types';
import { Filter } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@src/store/store.types';
import { inputsActions } from '@src/store/modules/inputs';
import { InputsState } from '@src/store/modules/inputs/inputs.types';

const DashboardTopInfo = ({ dashboardContent, filterContent }: DashboardTopInfoProps) => {
  const { title, placeholder } = dashboardContent;
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);
  const dispatch = useDispatch();

  const handleAddFilter = (value: string) => {
    dispatch(inputsActions.addFilter(value, 'title'));
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Form>
        <S.MainInput
          onChange={({ target }) => handleAddFilter(target.value)}
          placeholder={placeholder}
          value={inputs.title}
        />
        <Filter filterContent={filterContent} />
      </S.Form>
    </S.Container>
  );
};

export default DashboardTopInfo;
