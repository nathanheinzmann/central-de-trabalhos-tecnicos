import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Response, DashboardTopInfo } from '@src/components/Home';
import { ResponseTypes } from '@src/components/Home/Response/Response.types';
import { AppState } from '@src/store/store.types';
import { InputsState } from '@src/store/modules/inputs/inputs.types';
import { fuseSearch } from '@src/utils';

const Home = ({ articles, homeContent, selectOptions }: any) => {
  const {
    dashboardTopInfo,
    response,
  } = homeContent;
  const [allArticles, setAllArticles] = useState<ResponseTypes['allArticles']>(articles);
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);

  useEffect(() => {
    fuseSearch({ articles, setAllArticles, inputs });
  }, [articles, inputs]);

  return (
    <>
      <DashboardTopInfo selectOptions={selectOptions} content={dashboardTopInfo} />
      <Response allArticles={allArticles} content={response} />
    </>
  );
}

export default Home;