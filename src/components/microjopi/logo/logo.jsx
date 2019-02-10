import React from 'react';
import './logo.scss';

const Logo = ({className = '', size = 100}) => (
  <div className={`${className} logo squares`} style={{width: `${size}px`, height: `${size}px`}}>
    <div className={'square square1'}></div>
    <div className={'square square2'}></div>
    <div className={'square square3'}></div>
    <div className={'square square4'}></div>
  </div>
);

export default Logo;
