import React from 'react';
import TopBar from '../components/top-bar/top-bar';
import '../styles/main.scss';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopBar />
        <div className={'mdc-top-app-bar--fixed-adjust'}>
          {this.props.children}
        </div>
      </div>);
  }
}

export default MainLayout;
