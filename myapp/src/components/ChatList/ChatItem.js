import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import "./styles.css"

export const ChatItem = ({ chat }) => (
    <ListItem key={chat.id}>
        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
        <DeleteButton id={chat.id} />
    </ListItem> 
);
