const initialState = {
    books: [
        {
            id: 0,
            title: 'test'
        }
    ],
    ready: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                books: action.payload,
                ready: true,
            };
        case 'IS_READY':
            return {
                ...state,
                ready: action.payload,
            };
        default:
            return state;
    }
}