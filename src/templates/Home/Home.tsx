import React from 'react';
import { Response, DashboardTopInfo } from '@src/components/Home';

const Home = ({ articles, dashboardContent, filterContent }: any) => (
  <>
    <DashboardTopInfo filterContent={filterContent} dashboardContent={dashboardContent} />
    <Response articles={articles} dashboardContent={dashboardContent} />
  </>
);

export default Home;