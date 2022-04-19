import { GetStaticProps } from 'next';
import getContent from '@src/content';
import { formatData, getFilterOptions } from '@src/utils';
import Home from '@src/templates/Home';

export const getStaticProps: GetStaticProps = async () => {
  const dashboardContent = getContent('dashboard');
  const response = await fetch('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=acf,id');
  const data = await response.json();
  const articles = data.map((article: any) => formatData(article));
  const filterContent = await getFilterOptions();
  return {
    props: {
      dashboardContent,
      articles,
      filterContent,
    },
  };
};

export default Home;
