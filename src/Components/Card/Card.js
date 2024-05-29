import React from 'react';

const Card = ({ title, content, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};
