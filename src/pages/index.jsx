import React from 'react';
import {Helmet} from 'react-helmet';
import MainLayout from '../layouts/microjopi/main-layout';
import './index.scss';
import Logo from '../components/microjopi/logo/logo';

export const MAIN_TITLE = 'JopiSoft - Where software development meets god';

const Index = () => (
  <MainLayout>
    <Helmet>
      <title>{MAIN_TITLE}</title>
    </Helmet>
    <div className={'banner'}>
      <Logo size={100}/> Jopisoft
    </div>
  </MainLayout>
);

export default Index;
