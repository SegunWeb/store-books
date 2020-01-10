import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'

import books from './books'
import cart from './cart'
import filter from './filter'

export default combineReducers({
    books,
    cart,
    filter,
    form: formReducer,
})