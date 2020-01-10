import React from 'react';
import {Menu, Popup, Button, List, Image, Icon} from 'semantic-ui-react'

const Cart = ({title, id, image, removeFromCart, count}) => (

    <List selection divided verticalAlign='middle' id={id}>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromCart.bind(this, id)}><Icon name='trash alternate'/></Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
            <List.Content>{count}</List.Content>
        </List.Item>
    </List>

);

const HeaderMenu = ({totalPrice, count, items}) => (

    <Menu>
        <Menu.Item name='browse'>
            Магазин книг
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item name='signup'>
                Итого: &nbsp;<b>{totalPrice}</b><Icon name='usd' />
            </Menu.Item>


            <Popup
                trigger={
                    <Menu.Item name='help'>
                        Корзина: &nbsp;(<b>{count}</b>)<Icon name='usd' />
                    </Menu.Item>
                }
                content={items.map((book, i) => <Cart key={i} {...book}/>)}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
);
export default HeaderMenu;