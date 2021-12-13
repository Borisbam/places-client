import React from 'react';
import env from 'react-dotenv';
import './Avatar.css';

const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={`${env.BACKEND}/${props.image}`}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
