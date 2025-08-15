import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../assets/emptyCart.svg";

const Cart = ({ cart, onRemove, changeQuantity }) => {
    
    console.log("Cart component received cart:", cart);
    const subtotal = cart.reduce((total, book) => total + (book.salePrice || book.originalPrice) * book.quantity, 0);
    const tax = subtotal * 0.075; // Assuming 7.5% tax
    const total = subtotal + tax;

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">
                                Cart
                            </h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <div className="cart__header--book">Book</div>
                                <div className="cart__header--quantity">Quantity</div>
                                <div className="cart__header--price">Price</div>
                            </div>
                            <div className="cart__body">
                                {cart.map((book) => {
                                    return (
                                        <div className="cart__item" key={book.id || book.title}>
                                            <div className="cart__book">
                                                <img src={book.url}
                                                    className="cart__book--img"
                                                    alt={book.title} />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">{book.title}</span>
                                                    <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                                                    <button className="cart__book--remove" onClick={() => onRemove(book.id)}>Remove</button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input
                                                    type="number"
                                                    min={0}
                                                    max={99}
                                                    className="cart__input"
                                                    value={book.quantity}
                                                    onChange={(event) => changeQuantity(book, event.target.value)}
                                                />
                                            </div>
                                            <div className="cart__book--price">${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            {cart.length === 0 && (
                                <div className="cart__empty">
                                    <img src={emptyCart} alt="" className="cart__empty--img" />
                                    <h2>You don't have any books in your cart!</h2>
                                    <Link to="/books">
                                        <button className="btn">Browse books</button>
                                    </Link>
                                </div>
                            )}
                            {cart.length > 0 && (
                                <div className="cart__footer--total">
                                    <div className="total">
                                        <div className="
                                        total__item                             
                                        total__sub-total">
                                            <span>Subtotal </span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="
                                        total__item                            
                                        total__tax">
                                            <span>Tax </span>
                                            <span>${tax.toFixed(2)}</span>
                                        </div>
                                        <div className="
                                        total__item                             
                                        total__price">
                                            <span>Total </span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                        <button className="btn btn__checkout no-cursor" onClick={() => alert(`Will code another time`)}>
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Cart;