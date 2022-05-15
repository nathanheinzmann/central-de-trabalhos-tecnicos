import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '..';
import * as S from './DashboardTopInfo.style';
import { DashboardTopInfoProps } from './DashboardTopInfo.types';
import { AppState } from '@src/store/store.types';
import { inputsActions } from '@src/store/modules/inputs';
import { InputsState, InputsTypes } from '@src/store/modules/inputs/inputs.types';
import { Tag } from '@src/components/Home';
import { Modal } from '@src/components/Home';

const DashboardTopInfo = ({ content, selectOptions }: DashboardTopInfoProps) => {
  const { title, placeholder, filter } = content;
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);
  const tags = inputs && Object.keys(inputs).map((input) => ({ type: input as InputsTypes, value: inputs[input as InputsTypes] }));
  const [open, setOpen] = useState(false);

  const handleClickFilter = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const isValidTag = (value: string, type: string) => type !== 'title' && value.length > 0 && value !== "TODOS" && value && value !== `${1995},${new Date().getFullYear()}`;

  const handleAddFilter = (value: string) => {
    dispatch(inputsActions.addFilter(value, 'title'));
  };

  const mapTags = tags.map(({ value, type }) => isValidTag(String(value), type) && <Tag value={String(value)} type={type} key={type} />);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Form>
        <S.MainInput
          onChange={({ target }) => handleAddFilter(target.value)}
          placeholder={placeholder}
          value={inputs.title}
        />
        <Filter handleClickFilter={handleClickFilter} content={filter} />
      </S.Form>
      <Modal
        open={open}
        selectOptions={selectOptions}
        setOpen={setOpen}
      />
      <S.Tags>
        {tags && mapTags}
      </S.Tags>
    </S.Container>
  );
};

export default DashboardTopInfo;
