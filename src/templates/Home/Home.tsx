import React from 'react';
import { Response, DashboardTopInfo } from '@src/components/Home';

const Home = ({ articles, homeContent, selectOptions }: any) => {
  const {
    dashboardTopInfo,
    response,
  } = homeContent;

  return (
    <>
      <DashboardTopInfo selectOptions={selectOptions} content={dashboardTopInfo} />
      <Response articles={articles} content={response} />
    </>
  );
}

export default Home;