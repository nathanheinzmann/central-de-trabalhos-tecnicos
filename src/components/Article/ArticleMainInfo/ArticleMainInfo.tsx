import { useState, useCallback, useEffect, useRef } from 'react';
import * as S from './ArticleMainInfo.style';
import { ArticleProps } from './ArticleMainInfo.types';

const ArticleMainInfo = ({ article }: ArticleProps) => {
  const { title, student, teacher, year, file } = article;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.AuthorName>{student}</S.AuthorName>
      <S.TeacherName>Prof. {teacher}</S.TeacherName>
      <p>{year}</p>

      <S.PDF src={file} />
    </S.Container>
  );
};

export default ArticleMainInfo;
