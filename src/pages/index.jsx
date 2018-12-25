import React from 'react';
import {Helmet} from 'react-helmet';
import MainLayout from '../layouts/main-layout';

const Index = () => {
  const title = 'JopiSoft - Where software development meets god';
  return (
    <MainLayout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <span>{title}</span>
    </MainLayout>
  );
};

export default Index;
