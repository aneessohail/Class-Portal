import React from 'react';
import './Card.css'; 
function Card({name,src,btn="Explore CV",desc,cv}) {
  return (
    <div className="custom-card">
      <img
        src={src}
        className="custom-img"
        alt="..."
      />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{name}</h5>
        <p className="custom-card-text">
          {desc}
        </p>
        <a href={cv} target='blank' className="custom-btn btn btn-primary">
          {btn}
        </a>
      </div>
    </div>
  );
}

export default Card;
