import React from 'react';
import * as S from './Filter.style';

const Filter = ({ content, handleClickFilter }: any) => {
  const {
    image,
  } = content;

  return (
    <S.Wrapper>
      <S.Button onClick={handleClickFilter}>
        <S.TitleButton>Filtrar</S.TitleButton>
        <S.Image alt={image.alt} src={image.src} />
      </S.Button>
    </S.Wrapper>
  );
};

export default Filter;
