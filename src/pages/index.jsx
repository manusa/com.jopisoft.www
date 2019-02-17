import React from 'react';
import {Helmet} from 'react-helmet';
import MainLayout from '../layouts/microjopi/main-layout';
import './index.scss';
import Logo from '../components/microjopi/logo/logo';

export const TITLE = 'JopiSoft';
export const DESCRIPTION = 'Where software development meets god';
export const MAIN_TITLE = `${TITLE} - ${DESCRIPTION}`;
export const MAIN_URL = 'https://www.jopisoft.com';

const Index = () => (
  <MainLayout>
    <Helmet>
      <title>{MAIN_TITLE}</title>
      <meta name='twitter:url' content={MAIN_URL} />
      <meta property='og:url' content={MAIN_URL} />
      <meta name='twitter:title' content={TITLE} />
      <meta property='og:title' content={TITLE} />
      <meta name='twitter:description' content={DESCRIPTION} />
      <meta property='og:description' content={DESCRIPTION} />
      <meta name='description' content={DESCRIPTION} />
      <meta name='twitter:site' content='@MarcNuri'/>
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
    </Helmet>
    <div className={'banner'}>
      <Logo size={100}/> Jopisoft
    </div>
  </MainLayout>
);

export default Index;
