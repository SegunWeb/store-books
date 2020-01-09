import { connect } from 'react-redux';
import * as booksActions from "../actions/books";
import { bindActionCreators } from "redux";
import App from '../components/App'
import orderBy from 'lodash/orderBy'


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

const mapStateToProps = ({ books, filter }) => ({
    books: books.items && searchBook(books.items, filter.filterBy, filter.searchQuery),
    ready: books.ready,
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
