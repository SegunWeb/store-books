import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setBooks} from "./actions/books";
import './App.css';


class App extends Component {

  render() {
      const {books, setBooks} = this.props;

      const newBooks = [
          {
              id: 2,
              title: 'Shoping'
          }
      ];

    return (
        <div className="App">
          <h1>{books[0].title}</h1>
          <button onClick={() => setBooks(newBooks)}>test</button>
        </div>
    );
  }
}

const mapStateToProps = ({ books }) => ({
    books: books.books,
});
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
