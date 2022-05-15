import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Response, DashboardTopInfo } from '@src/components/Home';
import { ResponseTypes } from '@src/components/Home/Response/Response.types';
import { AppState } from '@src/store/store.types';
import { InputsState } from '@src/store/modules/inputs/inputs.types';
import { fuseSearch } from '@src/utils';
import { hasFilter } from '@src/utils';

const Home = ({ articles, homeContent, selectOptions }: any) => {
  const {
    dashboardTopInfo,
    response,
  } = homeContent;
  const [allArticles, setAllArticles] = useState<ResponseTypes['allArticles']>(articles);
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);
  const [showResponse, setShowResponse] = useState<boolean>(false);

  useEffect(() => {
    fuseSearch({ articles, setAllArticles, inputs });
    let show = hasFilter(inputs);
    console.log(show)
    setShowResponse(show);
  }, [articles, inputs]);

  return (
    <>
      <DashboardTopInfo selectOptions={selectOptions} content={dashboardTopInfo} />
      <Response showResponse={showResponse} allArticles={allArticles} content={response} />
    </>
  );
}

export default Home;