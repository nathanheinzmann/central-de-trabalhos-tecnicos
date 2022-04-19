import { useState, useCallback, useEffect, useRef } from 'react';
import {
  AuthorName,
  Button,
  Container,
  Modal,
  PDF,
  SideBox,
  TeacherName,
  Title
} from './ArticleMainInfo.style';
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
    <Container>
      <Title>{article.title}</Title>
      <SideBox>
        <AuthorName>{article.student}</AuthorName>
        <TeacherName>Prof. {article.teacher}</TeacherName>
        <p>{article.year}</p>
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>ver pdf</Button>
        <Modal
          isModalOpen={isModalOpen}
          ref={modalRef}
        >
          <PDF src={article.file} />
        </Modal>
      </SideBox>
    </Container>
  );
};

export default ArticleMainInfo;
