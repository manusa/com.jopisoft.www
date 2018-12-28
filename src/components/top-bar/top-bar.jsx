import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';
import './top-bar.scss';

const TopBar = ({onMenuClick}) => (
  <header className={'mdc-top-app-bar top-bar'}>
    <div className={'mdc-top-app-bar__row'}>
      <section className={'mdc-top-app-bar__section mdc-top-app-bar__section--align-start'}>
        <span className={'mdc-top-app-bar__title title'}>JopiSoft</span>
      </section>
      <section className={'mdc-top-app-bar__section mdc-top-app-bar__section--align-end'}>
        <Menu className={'expanded-menu'}/>
        <button className={'menu material-icons mdc-top-app-bar__navigation-icon'}
          onClick={onMenuClick}
        >
          menu
        </button>
      </section>
    </div>
  </header>
);

TopBar.propTypes = {
  onMenuClick: PropTypes.func
};

TopBar.defaultProps = {
};

export default TopBar;
