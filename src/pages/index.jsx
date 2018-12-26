import React from 'react';
import {Helmet} from 'react-helmet';
import MainLayout from '../layouts/main-layout';
import './index.scss';

const Card = ({children, banner, type}) => (
  <div className={'card'}>
    <div className={'card-content'}>
      {children}
    </div>
    <div className={'card-banner'}>
      {banner}
    </div>
    <div className={'card-type'}>
      {type}
    </div>
  </div>
);

const jForJQuery = (
  <div className={'j-for-j-query'}>
    <span className={'j'}>j</span> for jQuery
  </div>
);

const Index = () => {
  const title = 'JopiSoft - Where software development meets god';
  return (
    <MainLayout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <span>{title}</span>
      <div className={'card-container'}>
        <Card type={'Press Release'}>
          <h3>Press Release</h3>
          <p>New JopiSoft CEO appointed
          </p>
        </Card>
        <Card type={'Find out more'} banner={jForJQuery}>
          <h3>En course for jQuery</h3>
          <p>As our lead Front-End developer and janitor usually says
            <i>"Give me a dollar and I'll find you the world"</i>.
            JopiSoft is presenting its 1337 strategic plan "J for jQuery".
          </p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Index;
