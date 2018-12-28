import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({className}) => (
  <ul className={className}>
    <li>team</li>
    <li>solutions</li>
    <li>careers</li>
    <li>blogs</li>
  </ul>
);

Menu.propTypes = {
  className: PropTypes.string
};

Menu.defaultProps = {
  className: ''
};

export default Menu;

