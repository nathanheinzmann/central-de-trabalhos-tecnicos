import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from './Tag.style';
import { TagProps } from './Tag.types';
import { inputsActions } from '@src/store/modules/inputs';
import { translate } from '@src/utils';

const Tag = ({ value, type }: TagProps) => {
  const dispatch = useDispatch();

  const handleRemoveFilter = () => {
    dispatch(inputsActions.removeFilter(type));
  };

  return (
    <S.Button onClick={handleRemoveFilter}>{translate(type)}: {value}</S.Button>
  );
};

export default Tag;
