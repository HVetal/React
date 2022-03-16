import { Button } from "@mui/material"
import { remove, set } from "firebase/database";
import { useCallback } from "react"
import { useDispatch } from "react-redux";
import { getChatsRefById } from "../../services/firebase";
import { deleteChat } from "../../store/chats/actions";

export const DeleteButton = ({ id }) => {
    // const dispatch = useDispatch();

    const handleDeleteChat = () => {
        // dispatch(deleteChat(id));
        // set(getChatsRefById(id), null);
        remove(getChatsRefById(id));
      };
    return <Button className="delete_btn" onClick={handleDeleteChat}>X</Button>
}