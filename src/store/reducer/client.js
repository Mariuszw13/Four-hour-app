import {SET_CLIENTS} from "../action/actionTypes";

const initialState = {
    clients: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CLIENTS:
            return {
                ...state,
                clients: action.clients
            };
        default:
            return state;
    }
};

export default reducer;