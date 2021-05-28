import React from 'react';
import './style.css';

const Book = ({ id, title, author, year, cover, read, handleUpdate }) => {
  const handleClick = () => {
    handleUpdate(id);
  };

  return (
    <div className="book">
      <img className="book__cover" src={`/assets/${cover}`} />
      <div className="book__details">
        <h2 className="book-title">{title}</h2>

        <p className="book-meta">
          {author},{year}
        </p>
        <button onClick={handleClick} className="book__read">
          {read ? 'přečteno' : 'nepřečteno'}
        </button>
      </div>
    </div>
  );
};
export default Book;
