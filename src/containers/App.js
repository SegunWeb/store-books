import React, {Component} from 'react';
// import axios from 'axios'
import { Container, Card } from 'semantic-ui-react'
import Spiner from "../components/Spiner";
import BooksCard from "../containers/BooksCard";
import Filter from "../containers/Filter";
import HeaderMenu from "../containers/HeaderMenu";
import FormCart from '../components/FormCart'
import { connect } from 'react-redux';
import * as booksActions from "../actions/books";
// import * as cartActions from "../actions/cart";
import { bindActionCreators } from "redux";
import orderBy from 'lodash/orderBy'
// import App from '../components/App'

class App extends Component {

    componentDidMount() {
        // const {setBooks} = this.props;
        // axios.get("/books.json")
        //     .then(({data}) => {
        //         setBooks(data)
        //     })
        this.props.setBooksThunk()
    }
    render() {
        const { books, ready } = this.props;
        return (
            <Container>
                <HeaderMenu/>
                <Filter/>
                <div className='wrap-form'>
                    <FormCart />
                </div>
                <Card.Group itemsPerRow={4}>
                    {!ready
                        ? <Spiner/>
                        : books.map((book, i) => (<BooksCard key={i} {...book} />))
                    }
                </Card.Group>
            </Container>
        );
    }
}

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
