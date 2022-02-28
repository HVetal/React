export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (id, msg) => ({
    type: ADD_MESSAGE,
    payload: {
        id,
        msg,
    },
});

// export const addChat = (id, name) => ({
//     type: ADD_CHAT,
//     payload: {
//         id,
//         name,
//     },
// });