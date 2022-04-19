import { GetStaticProps } from 'next';
import getContent from '@src/content';
import { formatData, getFilterOptions } from '@src/utils';

import React from 'react';
import { Response, DashboardTopInfo } from '@src/components/Home';

const HomePage = ({ articles, dashboardContent, filterContent }) => (
    <>
      <DashboardTopInfo filterContent={filterContent} dashboardContent={dashboardContent} />
      <Response articles={articles} dashboardContent={dashboardContent} />
    </>
  );

export const getStaticProps: GetStaticProps = async () => {
  const dashboardContent = getContent('dashboard');
  const response = await fetch('https://ctt-next-ts.tk/wp-json/wp/v2/academic-works?_fields=acf,id');
  const data = await response.json();
  const articles = data.map((article) => formatData(article));
  const filterContent = await getFilterOptions();
  return {
    props: {
      dashboardContent,
      articles,
      filterContent,
    },
  };
};

export default HomePage;
