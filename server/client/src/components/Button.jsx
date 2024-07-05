import React from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    var out = "1px solid " + props.color;
    const buttonStyle = {
    backgroundColor: props.bgColor,
    color:props.color,
    outline:out 

  };

  return (
    <>
      <button  className="button" style={buttonStyle}>
        <Link to= {props.route} style={{'textDecoration':'none','color':props.color}}>
        {props.name}
        </Link>
      </button>
    </>
  );
}

export default Button