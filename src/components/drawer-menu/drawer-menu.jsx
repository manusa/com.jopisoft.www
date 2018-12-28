import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';

const DrawerMenu = ({onScrimClick}) => (
  <Fragment>
    <aside className='mdc-drawer mdc-drawer--modal mdc-drawer--open'>
      <div className='mdc-drawer__content'>
        <Menu className={'menu'}/>
      </div>
    </aside>
    <div className='mdc-drawer-scrim' onClick={onScrimClick}></div>
  </Fragment>
);

DrawerMenu.propTypes = {
  onScrimClick: PropTypes.func
};

DrawerMenu.defaultProps = {
};

export default DrawerMenu;
