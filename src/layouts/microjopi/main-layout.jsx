import React from 'react';
import './main-layout.scss';
import '../../styles/main.scss';
import TopBar from '../../components/microjopi/top-bar/top-bar';
import Footer from '../../components/microjopi/footer/footer';

class MainLayout extends React.Component {
  render() {
    return (
      <div className={'microjopi main-layout'}>
        <TopBar/>
        <div className={'mdc-top-app-bar--fixed-adjust content'}>
          {this.props.children}
        </div>
        <Footer/>
      </div>);
  }
}
export default MainLayout;
