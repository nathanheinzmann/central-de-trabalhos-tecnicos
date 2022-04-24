import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Response.style';
import { ResponseTypes } from './Response.types';
import { fuseSearch } from '@src/utils';
import { InputsState } from '@src/store/modules/inputs/inputs.types';
import { AppState } from '@src/store/store.types';

const Response = ({ articles, content }: ResponseTypes) => {
  const { title, options } = content;
  const [allArticles, setAllArticles] = useState<ResponseTypes['articles']>(articles);
  const notFoundImageSrc = "assets/images/dog-search.png";
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);

  useEffect(() => {
    fuseSearch({ articles, setAllArticles, inputs });
  }, [inputs, articles]);

  const resultsFoundText = allArticles.length > 1 ?
    `${allArticles.length} resultados encontrados` :
    !allArticles.length ?
      'nenhum resultado encontrado' :
      '1 resultado encontrado';

  const notFound = (
    <>
      <S.NotFoundWrapper>
        <S.NotFoundBox>
          <S.NotFoundTitle>{title}</S.NotFoundTitle>
          <S.NotFoundOptions>
            {options.map(option => <S.NotFoundDescription key={option}>{option}</S.NotFoundDescription>)}
          </S.NotFoundOptions>
        </S.NotFoundBox>
        <S.NotFoundBox>
          <S.NotFoundImage src={notFoundImageSrc} />
        </S.NotFoundBox>
      </S.NotFoundWrapper>
    </>
  );

  const mapResponse = allArticles.length ?
    allArticles.map(({
      id,
      student,
      title,
      infos,
    }) => {
      return (
        <Link passHref href="/[id]" as={`/${id}`} key={id}>
          <S.ResponseWrapper>
            <S.TitleName>
              <S.ArticleTitle>{title}</S.ArticleTitle>
              <S.AuthorName>{student}</S.AuthorName>
            </S.TitleName>
            <S.Infos>
              {
                infos.map((info) => (
                  <S.Info key={info}>{info}</S.Info>
                ))
              }
            </S.Infos>
          </S.ResponseWrapper>
        </Link>
      );
    }) : notFound;

  return (
    <S.Container>
      <S.ResultsFoundWrapper>
        <S.ResultsFound>
          {resultsFoundText}
        </S.ResultsFound>
      </S.ResultsFoundWrapper>
      {mapResponse}
    </S.Container>
  );
};

export default Response;
