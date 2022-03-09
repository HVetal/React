import { Button } from "@mui/material"
import { useCallback } from "react"
import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/actions";

export const DeleteButton = ({ id }) => {
    const dispatch = useDispatch();

    const handleDeleteChat = () => {
        dispatch(deleteChat(id));
      };
    return <Button className="delete_btn" onClick={handleDeleteChat}>X</Button>
}