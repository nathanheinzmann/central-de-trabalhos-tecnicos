import Link from 'next/link';
import * as S from './Response.style';
import { ResponseTypes } from './Response.types';

const Response = ({ allArticles, content }: ResponseTypes) => {
  const { title, options } = content;
  const notFoundImageSrc = "assets/images/dog-search.png";

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
              {infos.map(({ value, info }: any) => <S.Info title={info} key={value}>{value}</S.Info>)}
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
