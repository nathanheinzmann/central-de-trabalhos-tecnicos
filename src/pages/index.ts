import { GetStaticProps } from 'next';
import getContent from '@src/content';
import { getAll, getFilterOptions } from '@src/utils';
import Home from '@src/templates/Home';

export const getStaticProps: GetStaticProps = async () => {
  const homeContent = getContent('homeContent');
  const articles = await getAll('https://ctt-next-ts.tk/wp-json/acf/v3/academic-works');
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
