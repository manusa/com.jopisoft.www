import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = ({className}) => (
  <ul className={className}>
    <li><Link to='/team/'>team</Link></li>
    <li>solutions</li>
    <li>careers</li>
    <li>jopicloud</li>
  </ul>
);

Menu.propTypes = {
  className: PropTypes.string
};

Menu.defaultProps = {
  className: ''
};

export default Menu;

