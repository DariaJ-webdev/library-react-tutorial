import React from 'react';
import LibraryLogo from '../assets/Library.svg';
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <footer>
        <div className="container">
            <div className="row row__column">
                <a href="#">
                    <figure className="footer__logo">
                           <img src={LibraryLogo} className="footer__logo--img" alt=" "/>
                    </figure>
                </a>
                <div className="footer__list">
                    <Link to="#" className="footer__link">Home</Link>
                    <a className="footer__link no cursor">About</a>
                    <a href="#features" className="footer__link">Books</a>
                    <Link to="/cart" className="footer__link">Cart</Link>
                </div>
                <div className="footer__copyright"> Copyright &copy 2021 Library </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;