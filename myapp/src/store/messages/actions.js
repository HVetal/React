import { onChildChanged, onValue, set, onChildAdded } from "firebase/database";
import { AUTHORS } from "../../components/utils/constants";
import { getMessageEditRefById, getMessagesRefByChatId } from "../../services/firebase";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';
export const EDIT_MESSAGE = 'MESSAGES::EDIT_MESSAGE';

export const addMessage = (chatId, newMsg) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        newMsg,
    },
});

export const deleteMessage = (chatId, idToDelete) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        idToDelete,
    },
});

export const editMessage = (chatId, idToEdit, newText) => ({
    type: EDIT_MESSAGE,
    payload: {
        chatId,
        idToEdit,
        newText,
    },
});

let timeout;

export const addMessageWithThunk = (chatId, newMsg) => (dispatch, getState) => {
    dispatch(addMessage(chatId, newMsg));

    if (newMsg.author !== AUTHORS.BOT) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
        const msgFromBot = {
            text: 'i am robot',
            author: AUTHORS.BOT,
            id: `msg-${Date.now()}`,
          };
          dispatch(addMessage(chatId, msgFromBot));
    }, 1000);
  }
};