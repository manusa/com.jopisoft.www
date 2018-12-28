import React from 'react';
import PropTypes from 'prop-types';
import Switch from './switch';
import Menu from '../menu/menu';
import './footer.scss';

const Footer = ({className}) => (
  <div className={`${className} footer`}>
    <div className={'column-container'}>
      <div className={'column'}>
        <h3>Contact</h3>
        <div className={'address'}>
          <p>USA Headquarters</p>
          <p>
            1640 Riverside Drive<br/>
            Hill Valley, California (CA 91905)<br/>
            USA
          </p>
          <p>+1 555-6162</p>
        </div>
      </div>
      <div className={'column'}>
        <h3>Quick Access</h3>
        <Menu className={'quick-access'}/>
      </div>
    </div>
    <div>
      <Switch className={'switch'} />
    </div>
    <div className={'motto'}>
      JopiSoft - Where software development meets god
    </div>
  </div>
);

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: ''
};

export default Footer;
