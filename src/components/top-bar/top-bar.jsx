import React from 'react';
import './top-bar.scss';

const TopBar = () => (
  <header className={'mdc-top-app-bar top-bar'}>
    <div className={'mdc-top-app-bar__row'}>
      <section className={'mdc-top-app-bar__section mdc-top-app-bar__section--align-start'}>
        <span className={'mdc-top-app-bar__title title'}>JopiSoft</span>
      </section>
    </div>
  </header>
);

export default TopBar;
