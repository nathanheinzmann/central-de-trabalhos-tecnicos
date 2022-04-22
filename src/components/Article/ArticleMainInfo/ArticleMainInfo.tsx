import { useState, useCallback, useEffect, useRef } from 'react';
import * as S from './ArticleMainInfo.style';
import { ArticleProps } from './ArticleMainInfo.types';

const ArticleMainInfo = ({ article }: ArticleProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOutsideClick = useCallback(() => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <S.Container>
      <S.Title>{article.title}</S.Title>
      <S.SideBox>
        <S.AuthorName>{article.student}</S.AuthorName>
        <S.TeacherName>Prof. {article.teacher}</S.TeacherName>
        <p>{article.year}</p>
        <S.Button onClick={() => setIsModalOpen(!isModalOpen)}>ver pdf</S.Button>
        <S.Modal
          isModalOpen={isModalOpen}
          ref={modalRef}
        >
          <S.PDF src={article.file} />
        </S.Modal>
      </S.SideBox>
    </S.Container>
  );
};

export default ArticleMainInfo;
