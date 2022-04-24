import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '..';
import * as S from './DashboardTopInfo.style';
import { DashboardTopInfoProps } from './DashboardTopInfo.types';
import { AppState } from '@src/store/store.types';
import { inputsActions } from '@src/store/modules/inputs';
import { InputsState, InputsTypes } from '@src/store/modules/inputs/inputs.types';
import { Tag } from '@src/components/Home';

const DashboardTopInfo = ({ content, selectOptions }: DashboardTopInfoProps) => {
  const { title, placeholder, filter } = content;
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);
  const dispatch = useDispatch();
  const tags = inputs && Object.keys(inputs).map((input) => ({ type: input as InputsTypes, value: inputs[input as InputsTypes] }));
  const isValidTag = (value: string) => value.length > 0 && value !== "TODOS" && value && value !== `${1995},${new Date().getFullYear()}`;

  const handleAddFilter = (value: string) => {
    dispatch(inputsActions.addFilter(value, 'title'));
  };

  const mapTags = tags.map(({ value, type }) => isValidTag(String(value)) && <Tag value={String(value)} type={type} key={type} />);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Form>
        <S.MainInput
          onChange={({ target }) => handleAddFilter(target.value)}
          placeholder={placeholder}
          value={inputs.title}
        />
        <Filter content={filter} selectOptions={selectOptions} />
      </S.Form>
      <S.Tags>
        {tags && mapTags}
      </S.Tags>
    </S.Container>
  );
};

export default DashboardTopInfo;
