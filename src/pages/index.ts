import { GetStaticProps } from 'next';
import getContent from '@src/content';
import { formatData, getFilterOptions } from '@src/utils';
import Home from '@src/templates/Home';

export const getStaticProps: GetStaticProps = async () => {
  const homeContent = getContent('homeContent');
  const response = await fetch('https://ctt-next-ts.tk/wp-json/acf/v3/academic-works');
  const data = await response.json();
  const articles = data.map((article: any) => formatData(article));
  const selectOptions = await getFilterOptions();
  return {
    props: {
      homeContent,
      articles,
      selectOptions,
    },
  };
};

export default Home;
