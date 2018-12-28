import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';

const DrawerMenu = ({visible, onScrimClick}) => (
  <Fragment>
    <aside className={`mdc-drawer mdc-drawer--modal ${visible && 'mdc-drawer--open'}`}>
      <div className='mdc-drawer__content'>
        <nav className={'mdc-list'}>
          <Menu className={'menu'} linkClassName={'mdc-list-item'}/>
        </nav>
      </div>
    </aside>
    <div className='mdc-drawer-scrim' onClick={onScrimClick}></div>
  </Fragment>
);

DrawerMenu.propTypes = {
  onScrimClick: PropTypes.func,
  visible: PropTypes.bool
};

DrawerMenu.defaultProps = {
};

export default DrawerMenu;
