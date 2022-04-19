import ArticleMainInfo from '@src/components/Article';
import React from 'react';

const Article = ({ article }: any) => {

  return (
    <>
      <ArticleMainInfo article={article} />
    </>
  );
};

export default Article;