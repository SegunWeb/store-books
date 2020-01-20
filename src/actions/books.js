import axios from "axios";

export const setBooks = books => ({
    type: 'SET_BOOKS',
    payload: books
});

export const setBooksThunk = () => {
    return (dispatch) => {
       return axios.get("/books.json")
            .then(({data}) => {
                dispatch(setBooks(data))
            })
    }
};

