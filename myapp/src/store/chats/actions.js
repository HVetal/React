import { onChildAdded, onChildRemoved, set, onValue } from "firebase/database";
import { chatsRef, getChatsRefById, getMessagesRefByChatId } from "../../services/firebase";

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
});

export const addChat = (id, name) => ({
    type: ADD_CHAT,
    payload: {
        id,
        name,
    },
});

export const initChatsTracking = () => (dispatch) => {
onChildAdded(chatsRef, (snapshot) => {
  dispatch(addChat(snapshot.val().id, snapshot.val().name));
        });

onChildRemoved(chatsRef, (snapshot) => {
  dispatch(deleteChat(snapshot.val().id));
      });
};

export const addChatWithFirebase = (newId, newChatName) => (dispatch) => {
    set(getChatsRefById(newId), { id: newId, name: newChatName });
    set(getMessagesRefByChatId(newId), { empty: true });
    dispatch(addChat(newId, newChatName));
}