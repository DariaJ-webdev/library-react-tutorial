import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faShoppingCart, faTimes} from '@fortawesome/free-solid-svg-icons';
import LibraryLogo from '../assets/Library.svg';
import {Link} from "react-router-dom";


const Nav = () => {
function openMenu() {
    document.body.classList += " menu--open";
}
function closeMenu() {
    document.body.classList.remove("menu--open");
 }
    return(
        <nav>
            <div className="nav__container">
                <Link to="/"><img src={LibraryLogo} className="logo" alt=" "/>
                </Link>
<ul className="nav__links">
    <li className="nav__list">
        <Link to="/" className="nav__link">Home
        </Link>
    </li>
         <li className="nav__list">
        <Link to="/books" className="nav__link books__link" >Books
        </Link>
    </li>
    <button className="btn__menu" onClick={openMenu}>
        <FontAwesomeIcon icon="bars" />
    </button>
    <li className="nav__icon">
        <Link to="/cart" className="nav__link">
         <FontAwesomeIcon icon="shopping-cart" />
        </Link>
        <span className="cart__length">2</span>
    </li>
</ul>
<div className="menu__backdrop">
    <button className="btn menu btn__menu--close" onClick={closeMenu}>
         <FontAwesomeIcon icon="times"/>
    </button>
    <ul className="menu__links">
        <li className="menu__list">
            <Link to="/"><h2 className="menu__link">Home</h2></Link>
        </li>
        <li className="menu__list">
            <Link to="/books"><h2 className="menu__link">Books</h2></Link>
        </li>
        <li className="menu__list">

            <Link to="/cart"><h2 className="menu__link">Cart</h2></Link>
        </li>
    </ul>
</div>
            </div>
        </nav>
    );
}

export default Nav;