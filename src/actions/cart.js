export const addToCart = obj => ({
    type: 'ADD_BOOK',
    payload: obj
});
export const removeFromCart = id => ({
    type: 'REMOVE_BOOK',
    payload: id,
});