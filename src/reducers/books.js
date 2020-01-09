const initialState = {
    items: null,
    ready: false,
    filterBy: 'all',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload,
                ready: true,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload,
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