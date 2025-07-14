import React from 'react';

const Card = (props) => {
  console.log('Props = ', props);
  return (
    <div className="card">
      <img className="card_img" src={props.src} />
      <div className="card_info">
        <span className="card_category">A Netflix Original Series</span>
        <h3 className="card_title">{props.name}</h3>
        <a href={props.url} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
