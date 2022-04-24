import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import React from 'react';
import GlobalStyle from '@src/themes/global';
import Menu from '@src/components/Common';
import vanilla from '@src/themes/theme';
import store from '@src/store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={vanilla}>
        <Head>
          <title key="title">CTT</title>
        </Head>
        <Menu />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
