import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react'

const BooksCard = book => {

    const {title, author, price, image, addToCart, addedCount} = book;
    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>

            </Card.Content>
            <Card.Content extra>
            <span>
                <Icon name='usd' />
                {price}
            </span>
            </Card.Content>
            <Button onClick={addToCart.bind(this, book)}>Add to cart {addedCount && `(${addedCount})`}</Button>
        </Card>
    )
};

export default BooksCard;