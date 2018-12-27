import React from 'react';
import './top-bar.scss';

const TopBar = () => (
  <header className={'mdc-top-app-bar top-bar'}>
    <div className={'mdc-top-app-bar__row'}>
      <section className={'mdc-top-app-bar__section mdc-top-app-bar__section--align-start'}>
        <span className={'mdc-top-app-bar__title title'}>JopiSoft</span>
      </section>
      <section className={'mdc-top-app-bar__section mdc-top-app-bar__section--align-end'}>
        <ul className={'expanded-menu'}>
          <li>team</li>
          <li>activities</li>
          <li>news</li>
          <li>media</li>
          <li>blogs</li>
        </ul>
      </section>
    </div>
  </header>
);

export default TopBar;
