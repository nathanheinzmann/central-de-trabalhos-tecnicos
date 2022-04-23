import React from 'react';
import * as S from './DashboardTopInfo.style';
import { DashboardTopInfoProps } from './DashboardTopInfo.types';
import { Filter } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@src/store/store.types';
import { inputsActions } from '@src/store/modules/inputs';
import { InputsState, InputsTypes } from '@src/store/modules/inputs/inputs.types';
import { Tag } from '@src/components/Home';

const DashboardTopInfo = ({ dashboardContent, filterContent }: DashboardTopInfoProps) => {
  const { title, placeholder } = dashboardContent;
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);
  const dispatch = useDispatch();
  const tags = inputs && Object.keys(inputs).map((input) => ({ type: input as InputsTypes, value: inputs[input as InputsTypes] }));
  const isValidTag = (value: string) => value.length > 0 && value !== "TODOS" && value;

  const handleAddFilter = (value: string) => {
    dispatch(inputsActions.addFilter(value, 'title'));
  };

  const mapTags = tags && tags.map(({ value, type }) => isValidTag(String(value)) && <Tag value={String(value)} type={type} />);

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
      <S.Tags>
        {mapTags}
      </S.Tags>
    </S.Container>
  );
};

export default DashboardTopInfo;
