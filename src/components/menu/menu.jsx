import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = ({className, itemClassName, linkClassName}) => (
  <ul className={className}>
    <li className={itemClassName}>
      <Link className={linkClassName} to='/team/'>team</Link>
    </li>
    <li className={itemClassName}>
      <Link className={linkClassName} to='/solutions/'>solutions</Link>
    </li>
    <li className={itemClassName}>
      <Link className={linkClassName} to='/careers/'>careers</Link>
    </li>
    <li className={itemClassName}>
      <Link className={linkClassName} to='/jopicloud/'>jopicloud</Link>
    </li>
  </ul>
);

Menu.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  linkClassName: PropTypes.string
};

Menu.defaultProps = {
  className: '',
  itemClassName: '',
  linkClassName: ''
};

export default Menu;

