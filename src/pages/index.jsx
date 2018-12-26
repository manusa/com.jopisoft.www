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

const sharePriceBanner = (
  <svg viewBox='0 0 256 100' className={'share-price-banner'}>
    <polyline
      fill='none'
      stroke='#f9d957'
      strokeWidth='2'
      points='
       00,00
       20,30
       40,10
       60,12
       80,15
       100,20
       120,18
       140,12
       160,90
       180,60
       200,90
       220, 85
       240, 88
       256, 70
     '
    />
  </svg>
);

const Index = () => {
  const title = 'JopiSoft - Where software development meets god';
  return (
    <MainLayout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={'card-container'}>
        <Card type={'Press Release'}>
          <h3>Press Release</h3>
          <p>New JopiSoft CEO appointed
          </p>
        </Card>
        <Card type={'View previous movements'} banner={sharePriceBanner}>
          <h3>Share Price</h3>
          <div className={'share-price'}>
            13.37 &euro;
          </div>
          <p>{new Date().toLocaleString(navigator.language,
            {year: 'numeric', month: '2-digit', day: '2-digit'})}&nbsp;
            at {new Date().toLocaleString(navigator.language, {hour: '2-digit'})}
          </p>
          <p>
            Euronext
          </p>
        </Card>
        <Card type={'Find out more'} banner={jForJQuery}>
          <h3>On course for jQuery</h3>
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
