import { GetStaticProps } from 'next';
import { formatData, getAll } from '@src/utils';
import Article from '@src/templates/Article';

export const getStaticProps: GetStaticProps = async (context: any) => {
  const article = await getAll(`https://ctt-next-ts.tk/wp-json/acf/v3/academic-works/${context.params.id}`, 'article');

  return {
    props: {
      article,
    },
  };
};

export async function getStaticPaths() {
  const paths = await getAll('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=id', 'paths');

  return {
    paths,
    fallback: false,
  };
}

export default Article;
