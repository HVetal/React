import { DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
          return {
            ...state,
            [action.payload.chatId]: [...state[action.payload.chatId], action.payload.newMsg],
          };
        }
        case ADD_MESSAGE: {
            return {
                ...state, [action.payload.id]: [],
            };
        }
        case DELETE_CHAT: {
            const newMsg = { ...state };
            delete newMsg[action.payload];
            return newMsg;
        }
        default:
            return state;
    }
};