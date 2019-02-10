import React from 'react';
import PropTypes from 'prop-types';


class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      id: Math.random().toString(36),
      checked: true
    };
  }

  render() {
    const {id, checked} = this.state;
    return (
      <span
        className={this.props.className}
        onClick={e => {
          e.preventDefault();
          this.setState({checked: !checked});
        }}>
        <div className={`mdc-switch ${checked ? 'mdc-switch--checked' : ''}`}>
          <div className={'mdc-switch__track'} />
          <div className={'mdc-switch__thumb-underlay'}>
            <div className={'mdc-switch__thumb'}>
              <input type='checkbox' ref={this.inputRef}
                className={`${'mdc-switch__native-control'}`}
                checked={checked}
                readOnly={true}
                role='switch' />
            </div>
          </div>
        </div>
        <label htmlFor={id}>{checked ? 'we switch' : 'D\'oh!'}</label>
      </span>
    );
  }
}

Switch.propTypes = {
  className: PropTypes.string
};

Switch.defaultProps = {
  className: ''
};


export default Switch;
