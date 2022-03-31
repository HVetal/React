import { onChildAdded } from "firebase/database";
import { addChat, ADD_CHAT, deleteChat, DELETE_CHAT, initChatsTracking } from "../actions";

describe("deleteChat tests", () => {
    it("returns obj with type and payload", () => {
        const id = "";
        const expected = {
            type: DELETE_CHAT,
            payload: id,
        };

        const received = deleteChat(id);
        expect(expected).toEqual(received);
    });
});

// describe("initChatsTracking Test", () => {
//     it("calls fn passed as an arg with onChildAdded", () => {
//         // const id = "";
//         // const name = "";
//         const mockDispatch = jest.fn();


//         const expected = {
//             type: ADD_CHAT,
//             payload: {
                    // id,
                    // name,
//             },
//         };

//         expect(mockDispatch).toHaveBeenCalledWith(addChat(expected));

    //     initChatsTracking()(mockDispatch);

    //     expect(mockDispatch).toHaveBeenCalledWith(onChildAdded(expect(mockDispatch2).toHaveBeenCalledWith(addChat())));
    // });
// });