import React from 'react';
import {Helmet} from 'react-helmet';
import {MAIN_TITLE} from './index';
import MainLayout from '../../layouts/econosoft/main-layout';
import JopiCloud from './jopicloud';

const Team = () => (
  <MainLayout>
    <Helmet>
      <title>{MAIN_TITLE}</title>
    </Helmet>
  </MainLayout>
);

export default JopiCloud;
