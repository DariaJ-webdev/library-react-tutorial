import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Start from "./webpages/Start.jsx";
import Books from "./webpages/Books.jsx";
import {books} from"./Data.js";
import BookInfo from "./webpages/BookInfo.jsx";
import Cart from "./webpages/Cart.jsx";
import React, {useState, useEffect} from 'react';

function App() {
  const [cart,setCart] = useState([]);

function addToCart(book) {
    const bookInCart = cart.find(item => item.id === book.id);
    if (bookInCart) {
        changeQuantity(book, bookInCart.quantity + 1);
    } else {
        setCart([...cart, {...book, quantity: 1}]);
    }
}

function removeFromCart(bookId) {
  setCart(cart.filter(book => book.id !== bookId));
}


function changeQuantity(book, quantity) {
  console.log(book, quantity);
  setCart(
    cart.map((item) =>
      item.id === book.id
        ? {
            ...item,
            quantity: +quantity,
          }
        : item
    )
  );
}

useEffect(() => {
  console.log(cart)
 }, [cart])
 
  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} /> 
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} onRemove={removeFromCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;