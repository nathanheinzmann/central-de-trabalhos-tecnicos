import { GetStaticProps } from 'next';
import { formatData } from '@src/utils';
import Article from '@src/templates/Article';

export const getStaticProps: GetStaticProps = async (context: any) => {
  const response = await fetch(`https://ctt-next-ts.tk/wp-json/acf/v3/academic-works/${context.params.id}`);
  const article = await response.json();

  const modelArticle = {
    id: context.params.id,
    acf: article.acf
  };

  const formattedArticle = formatData(modelArticle);

  return {
    props: {
      article: formattedArticle,
    },
  };
};

export async function getStaticPaths() {
  const response = await fetch('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=id');
  const data = await response.json();
  const paths = data.map((item: any) => ({ params: { id: String(item.id) } }));

  return {
    paths,
    fallback: false,
  };
}

export default Article;
