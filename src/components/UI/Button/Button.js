import React from 'react';

import './Button.css';

const Button = props => {


  return (
    <button style={{backgroundColor: !props.btnValid ? 'rgba(255, 0, 0, 0.5)' : 'red'}} type={props.type} className="button">
      {props.children}
    </button>
  );
};

export default Button;
