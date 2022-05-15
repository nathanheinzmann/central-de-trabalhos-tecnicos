import Link from 'next/link';
import * as S from './Response.style';
import { ResponseTypes } from './Response.types';

const Response = ({ showResponse, allArticles, content }: ResponseTypes) => {
  const { title, options } = content;

  const mapNotFoundOptions = options.map(option => <S.NotFoundDescription key={option}>{option}</S.NotFoundDescription>);

  const resultsFoundText = () => {
    const textOptions = {
      0: "Nenhum resultado encontrado",
      1: "1 resultado encontrado",
      default: `${allArticles.length} resultados encontrados`,
    };

    return textOptions[allArticles.length as keyof typeof textOptions] || textOptions.default;
  }

  const notFound = (
    <>
      <S.NotFoundWrapper>
        <S.NotFoundBox>
          <S.NotFoundTitle>{title}</S.NotFoundTitle>
          <S.NotFoundOptions>
            {mapNotFoundOptions}
          </S.NotFoundOptions>
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
      {showResponse && <S.ResultsFoundWrapper>
        <S.ResultsFound>
          {resultsFoundText()}
        </S.ResultsFound>
      </S.ResultsFoundWrapper>}
      {showResponse && mapResponse}
    </S.Container>
  );
};

export default Response;
