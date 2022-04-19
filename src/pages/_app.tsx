import { AppProps } from 'next/app';
import Menu from '@src/components/Common';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@src/themes/global';
import Head from 'next/head';
import React from 'react';
import vanilla from '@src/themes/theme';
import { UserInputProvider } from '@src/contexts';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={vanilla}>
      <UserInputProvider>
        <Head>
          <title key="title">CTT</title>
        </Head>
        <Menu />
        <Component {...pageProps} />
        <GlobalStyle />
      </UserInputProvider>
    </ThemeProvider>
  )
}

export default MyApp
