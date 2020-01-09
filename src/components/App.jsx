import React, {Component} from 'react';
import axios from 'axios'
import { Container, Card } from 'semantic-ui-react'
import Spiner from "./Spiner";
import BooksCard from "./BooksCard";
import Filter from "../containers/Filter";
import Menu from "./HeaderMenu";

export default class App extends Component {

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
                <Menu/>
                <Filter/>

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
