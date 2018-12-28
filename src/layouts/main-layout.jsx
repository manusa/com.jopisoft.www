import React from 'react';
import TopBar from '../components/top-bar/top-bar';
import DrawerMenu from '../components/drawer-menu/drawer-menu';
import Footer from '../components/footer/footer';
import './main-layout.scss';
import '../styles/main.scss';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        open: true
      }
    };
    this.handleToggleMenu = this.toggleMenu.bind(this);
  }

  render() {
    return (
      <div className={'main-layout'}>
        <TopBar onMenuClick={this.handleToggleMenu} />
        {this.state.menu.open && <DrawerMenu onScrimClick={this.handleToggleMenu}/>}
        <div className={'mdc-top-app-bar--fixed-adjust content'}>
          {this.props.children}
        </div>
        <Footer />
      </div>);
  }

  toggleMenu() {
    this.setState({menu: {open: !this.state.menu.open}});
  }
}

export default MainLayout;
