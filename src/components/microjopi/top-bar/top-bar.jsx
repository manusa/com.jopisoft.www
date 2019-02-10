import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import './top-bar.scss';
import Logo from '../logo/logo';

const TopBar = ({onMenuClick}) => (
  <header className={'mdc-top-app-bar microjopi top-bar'}>
    <div className={'mdc-top-app-bar__row'}>
      <section className={'mdc-top-app-bar__section mdc-top-app-bar__section--align-start'}>
        <Link to='/' className={'mdc-top-app-bar__title title'}>
          <Logo className={'logo'} size={20}/>
          Jopisoft
        </Link>
      </section>
      <section className={'mdc-top-app-bar__section mdc-top-app-bar__section--align-end'}>

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
