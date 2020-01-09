import React from 'react';
import { Menu, Popup, Button, List, Image  } from 'semantic-ui-react'

// const Cart = () => (
//
//     <List selection divided verticalAlign='middle'>
//         <List.Item>
//             <List.Content floated='right'>
//                 <Button >Remove</Button>
//             </List.Content>
//             <Image avatar  />
//             <List.Content>title</List.Content>
//         </List.Item>
//     </List>
//
// );

const MainMenu = () => (
    <Menu>
        <Menu.Item
            // name='browse'
        >
            Магазин книг
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item
                // name='signup'
            >
                Итого: &nbsp;<b>totalPrice</b>
            </Menu.Item>


            {/*<Popup*/}
            {/*    trigger={*/}
            {/*        <Menu.Item*/}
            {/*            name='help'*/}
            {/*        >*/}
            {/*            Корзина: &nbsp;(<b>{count}</b>)*/}
            {/*        </Menu.Item>*/}
            {/*    }*/}
            {/*    content={items.map((book, i) => <Cart key={i} {...book}/>)}*/}
            {/*    on="click"*/}
            {/*    hideOnScroll*/}
            {/*/>*/}
        </Menu.Menu>
    </Menu>
);


export default MainMenu;