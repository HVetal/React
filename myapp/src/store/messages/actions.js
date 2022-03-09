import { AUTHORS } from "../../components/utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, newMsg) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        newMsg,
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