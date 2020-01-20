import { connect } from 'react-redux';
import * as booksActions from "../actions/books";
// import * as cartActions from "../actions/cart";
import { bindActionCreators } from "redux";
import orderBy from 'lodash/orderBy'
import App from '../components/App'

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books;
    }
};

const filterBook = (books, searchQuery) =>
    books.filter(
        o =>
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );
const searchBook = (books, filterBy, searchQuery) => {
    return sortBy(filterBook(books, searchQuery), filterBy);
};

// cart}, {id}

const mapStateToProps = ({ books, filter, }) => ({
    books: books.items && searchBook(books.items, filter.filterBy, filter.searchQuery),
    ready: books.ready,

    // addedCount: cart.items.reduce(
    //     (count, book) => count + (book.id === id ? 1 : 0), 0),
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
    // ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
