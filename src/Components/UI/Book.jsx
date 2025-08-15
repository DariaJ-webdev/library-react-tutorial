import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import Rating from "./Rating.jsx";
import Price from "./Price.jsx";
import React, { useState, useEffect, useRef } from 'react';

const Book = ({ book }) => {
const [img, setImg] = useState(null);
const mountedRef = useRef(true);
useEffect(() => {
  if(!book.url){
    console.error("No image URL provided for book:", book);
    setImg(null);
    return;
  }
const image = new Image();
image.src = book.url;
image.onload = () => {
  console.log("image loaded:", book.url);
  setImg(image);
};
image.onerror = () => {
  console.error("Failed to load image:", book.url);
  setImg(null);
};

// Cleanup if URL changes or component unmounts

return () => {

setImg(null);

};

}, [book.url]);
    return (
        <div className="book">
      {img ? (
          <>
            <Link to={`/books/${book.id}`}>
              <figure className="book__img--wrapper">
                <img 
                  src={img.src} 
                  alt={book.title}
                  className="book__img"/>
              </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                {book.title}
              </Link>
            </div>
            <Rating rating={book.rating}/>
            <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
          </>
        ) : (
        <> 
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>            
          </>
        )}
    </div>
    );
};

export default Book;