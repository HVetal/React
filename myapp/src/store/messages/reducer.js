import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
          return {
            ...state,
            [action.payload.chatId]: [...state[action.payload.chatId], action.payload.newMsg],
          };
        }
        case DELETE_MESSAGE: {
            return {
              ...state,
              [action.payload.chatId]: state[action.payload.chatId].filter((message) => message.id !== action.payload.idToDelete),
            };
          }
          case EDIT_MESSAGE: {
              const { chatId, idToEdit, newText } = action.payload;
              console.log('chatId', chatId);
              console.log('idToEdit', idToEdit);
              console.log('newText', newText);
              console.log('state', state);
              console.log('state[chatId]', state[chatId]);
              const editIndex = state[chatId].findIndex(message => message.id === idToEdit);
              console.log('editIndex', editIndex);
              console.log('state[chatId]', state[chatId]);
              const newState = { ...state };
              newState[chatId][editIndex] = {
                ...newState[chatId][editIndex],
                text: newText,
              }
            return newState;
          }
        case ADD_CHAT: {
            return {
                ...state, [action.payload.id]: [],
            };
        }
        case DELETE_CHAT: {
            const newMsgs = { ...state };
            delete newMsgs[action.payload];
            return newMsgs;
        }
        default:
            return state;
    }
};