import { GetStaticProps } from 'next';

import ArticleMainInfo from '@src/components/Article';
import React from 'react';

const Article = ({ article }) => {

  return (
    <>
      <ArticleMainInfo article={article} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(`https://ctt-next-ts.tk/wp-json/acf/v3/academic-works/${context.params.id}`);
  const article = await response.json();

  return {
    props: {
      article: article.acf,
    },
  };
};

export async function getStaticPaths() {
  const response = await fetch('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=id');
  const data = await response.json();
  const paths = data.map((item) => ({ params: { id: String(item.id) } }));

  return {
    paths,
    fallback: false,
  };
}

export default Article;
