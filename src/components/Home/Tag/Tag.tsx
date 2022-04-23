import React from 'react';
import * as S from './Tag.style';
import { useDispatch } from 'react-redux';
import { inputsActions } from '@src/store/modules/inputs';
import { TagProps } from './Tag.types';

const Tag = ({ value, type }: TagProps) => {
  const dispatch = useDispatch();

  const handleRemoveFilter = () => {
    dispatch(inputsActions.removeFilter(type));
  };

  return (
    <S.Button onClick={handleRemoveFilter}>{type}: {value}</S.Button>
  );
};

export default Tag;
