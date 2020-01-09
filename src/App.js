import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setBooks} from "./actions/books";
import './App.css';
import books from './books'


class App extends Component {

  render() {
    // const {books, setBooks} = this.props;

    return (
        <div className="App">
          <ul>
              {
               books.map(book => (
                 <li>{book.title}</li>
               ))
              }
          </ul>
        </div>
    );
  }
}

const mapStateToProps = ({ books }) => ({
    books: books.items,
});
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
