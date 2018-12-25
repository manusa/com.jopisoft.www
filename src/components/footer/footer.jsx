import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
import Switch from './switch';

const Footer = ({className}) => (
  <div className={`${className} footer`}>
    <div className={'column-container'}>
      <div className={'column'}>
        <h3>Contact</h3>
        <div className={'address'}>
          <p>1640 Riverside Drive</p>
          <p>Hill Valley, California (CA 91905)</p>
          <p>USA</p>
        </div>
      </div>
      <div className={'column'}>
        <h3>Quick Access</h3>
      </div>
    </div>
    <div>
      <Switch className={'switch'} />
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
