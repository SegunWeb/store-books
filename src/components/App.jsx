import React, {Component} from 'react';
import axios from 'axios'
import { Container, Card } from 'semantic-ui-react'
import Spiner from "./Spiner";
import BooksCard from "../containers/BooksCard";
import Filter from "../containers/Filter";
import HeaderMenu from "../containers/HeaderMenu";
import FormCart from './FormCart'

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
