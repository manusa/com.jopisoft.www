import React from 'react';
import {Helmet} from 'react-helmet';
import {MAIN_TITLE} from './index';
import MainLayout from '../layouts/main-layout';
import './jopicloud.scss';

const JopiCloud = () => (
  <MainLayout>
    <Helmet>
      <title>{MAIN_TITLE}</title>
    </Helmet>
    <div className={'sky'}>
      <div className={'title'}>| jopicloud |</div>
      <div className={'cloud first'}></div>
      <div className={'cloud second'}></div>
      <div className={'cloud third'}></div>
      <div className={'cloud fourth'}></div>
      <div className={'cloud fifth'}></div>
    </div>
  </MainLayout>
);

export default JopiCloud;
