import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

const Footer = ({className}) => {
  const language = typeof navigator !== 'undefined' ? navigator.language : 'EN';
  return (
    <div className={`${className} microjopi footer`}>
      <div className={'motto'}>
        &copy; Jopisoft&nbsp;
        {new Date().toLocaleString(language, {year: 'numeric'})}
        &nbsp;- Where software development meets god
      </div>
    </div>);
};

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: ''
};

export default Footer;
