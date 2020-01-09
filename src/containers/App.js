import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setBooks, } from "../actions/books";
import axios from 'axios'
import { Container, Card } from 'semantic-ui-react'
import Spiner from "../components/spiner";
import BookCard from "../components/BookCard";
import Filter from "../components/Filter";
import MainMenu from "../components/MainMenu";


class App extends Component {

    componentDidMount() {
        const {setBooks} = this.props;
        axios.get("/books.json")
            .then(({data}) => {
                setBooks(data)
            })
    }

    render() {
    const { books, ready } = this.props;
    return (
        <Container>
            <MainMenu/>
            <Filter/>

            <Card.Group itemsPerRow={4}>
                {!ready
                    ? <Spiner/>
                    : books.map((book, i) => (<BookCard key={i} {...book} />))
                }
            </Card.Group>
        </Container>
    );
  }
}

const mapStateToProps = ({ books }) => ({
    books: books.items,
    ready: books.ready,
});
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
