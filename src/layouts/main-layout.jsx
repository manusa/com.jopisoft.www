import React from 'react';
import TopBar from '../components/top-bar/top-bar';
import Footer from '../components/footer/footer';
import './main-layout.scss';
import '../styles/main.scss';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'main-layout'}>
        <TopBar />
        <div className={'mdc-top-app-bar--fixed-adjust content'}>
          {this.props.children}
        </div>
        <Footer />
      </div>);
  }
}

export default MainLayout;
