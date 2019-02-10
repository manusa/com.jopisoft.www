import React from 'react';
import './main-layout.scss';
import '../../styles/main.scss';
import TopBar from '../../components/microjopi/top-bar/top-bar';

class MainLayout extends React.Component {
  render() {
    return (
      <div className={'microjopi main-layout'}>
        <TopBar/>
        {this.props.children}
      </div>);
  }
}
export default MainLayout;
