import Link from 'next/link';
import * as S from './ArticleMainInfo.style';
import { ArticleProps } from './ArticleMainInfo.types';

const ArticleMainInfo = ({ article }: ArticleProps) => {
  const { title, student, teacher, year, file, keywords } = article;

  const mapKeywords = keywords && keywords.map((keyword) => <p key={keyword}>{keyword}</p>);

  return (
    <S.Container>
      <Link passHref href="/">
        <S.BackArea>
          <S.BackIcon src='/assets/images/back.svg' alt='voltar' />
          <S.BackText>Voltar</S.BackText>
        </S.BackArea>
      </Link>
      <S.Title>{title}</S.Title>
      <S.AuthorName>{student}</S.AuthorName>
      <S.TeacherName>Prof. {teacher}</S.TeacherName>
      <p>{year}</p>
      <p>{mapKeywords}</p>
      <S.PDF src={file} />
    </S.Container>
  );
};

export default ArticleMainInfo;
