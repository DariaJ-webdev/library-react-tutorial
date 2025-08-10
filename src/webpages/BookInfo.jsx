import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link, useParams} from "react-router-dom";
import Rating from '../Components/UI/Rating.jsx';
import Price from "../Components/UI/Price.jsx";



const BookInfo = ({books}) => {
    const {id} = useParams();
    const book = books.find((book) => book.id === parseInt(id));
    const recommendedBooks = books.filter(b => book && b.rating ===book.rating && b.id).slice(0, 4);
    console.log(book)
    return(
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left"/>
                            </Link>
                            <Link to="/books" className="book__link"><h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt={book.title}className="book__selected--img" />
                            </figure>
                            <div className="book__selected--descriptions">
                                <h2 className="book__selected--title"> {book.title}</h2>
                                <Rating rating="4.5" />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">Summary</div>
                                        <p className="book__summary__para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem nam doloremque, quidem id modi distinctio rerum hic laudantium quo quia accusantium officia fugiat amet aliquid. Reiciendis odio ad provident.
                                        </p>
                                         <p className="book__summary__para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem nam doloremque, quidem id modi distinctio rerum hic laudantium quo quia accusantium officia fugiat amet aliquid. Reiciendis odio ad provident.
                                        </p>
                                    </div>
                            <button className="btn">
                            Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div ClassName="books__container">
                <div className="row">
                    <div className="books__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    </div>
                
                </div>
            </div>
        </main>
    </div>
    );

};

export default BookInfo;