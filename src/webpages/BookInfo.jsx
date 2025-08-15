import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link, useParams} from "react-router-dom";
import Rating from '../Components/UI/Rating.jsx';
import Price from "../Components/UI/Price.jsx";
import Book from "../Components/UI/Book.jsx";
import {useState}from 'react';



const BookInfo = ({books, addToCart, cart}) => {
    const {id} = useParams();
    const book = books.find((book) => +book.id === +id);
   // const [cart, setAdded] = useState([]);

    function addBookToCart(book){
    addToCart(book);
    }

    function bookInCart() {
        return cart.find(book => book.id === +id);
    }


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
                                    <h3 className="book__summary--title">Summary</h3>
                                        <p className="book__summary--para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem nam doloremque, quidem id modi distinctio rerum hic laudantium quo quia accusantium officia fugiat amet aliquid. Reiciendis odio ad provident.
                                        </p>
                                         <p className="book__summary--para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem nam doloremque, quidem id modi distinctio rerum hic laudantium quo quia accusantium officia fugiat amet aliquid. Reiciendis odio ad provident.
                                        </p>
                                    </div>
                                    {bookInCart() ? (
                                        <Link to={`/cart`} className="book__link">
                                        <button className="btn">Checkout</button>
                                        </Link>
                                         ) : (
                                    <button className="btn" onClick={() => addBookToCart(book)}>
                                    Add to Cart
                                    </button>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="books__container">
                <div className="row">
                    <div className="books__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    </div>
                    <div className="books">
                {
                    books
                    .filter((book) => book.rating === 5 && book.id !== +id)
                    .slice(0,4)
                    .map((book) => (<Book book={book} key={book.id} />

                    ))}
                </div>
                </div>
            </div>
        </main>
    </div>
    );

};

export default BookInfo;