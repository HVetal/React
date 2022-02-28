import { ADD_MESSAGE } from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state, id: action.payload.id, msg: action.payload.msg};
        }
        // case ADD_CHAT: {
        //     return [...state, { name: action.payload.name, id: action.payload.id }];
        // }
        // case DELETE_CHAT: {
        //     return state.filter(({ id }) => id !== action.payload);
        // }
        default:
            return state;
    }
};