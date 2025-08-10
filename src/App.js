
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Start from "./webpages/Start.jsx";
import Books from "./webpages/Books.jsx";
import {books} from"./Data.js";
import BookInfo from "./webpages/BookInfo.jsx";
import Price from "./Components/UI/Price.jsx"


function App() {
  return (
   <Router>
     <div className="App">
      <Nav />
      <Route path="/" exact component={Start} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books:id" render={() => <BookInfo books={books} />} /> 
      

      <Footer />
    </div>
   </Router>
  );
}

export default App;
