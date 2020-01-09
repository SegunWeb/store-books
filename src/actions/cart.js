export const addBook = obj => ({
    type: 'ADD_BOOK',
    payload: obj
});
export const removeBook = id => ({
    type: 'REMOVE_BOOK',
    payload: id,
});