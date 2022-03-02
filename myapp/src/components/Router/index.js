import { ThemeContext } from "../utils/ThemeContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { NoChat } from "../Nochat";
import { Profile } from "../Profile";
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/actions";
import { addMessage } from "../../store/messages/actions";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
  const [messageColor, setMessageColor] = useState('blue');

    const messages = useSelector(selectMessages);
    const chatList = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddMessage = (chatId, newMsg) => {
    dispatch(addMessage(chatId,newMsg));
    };

    const handleAddChat = (newChatName) => {
      const newId = `chat-${Date.now()}`;
      dispatch(addChat(newId, newChatName));
    };

  const handleDeleteChat = (idToDelete) => {
    dispatch(deleteChat(idToDelete));
  }

    return (
      <ThemeContext.Provider value={{messageColor, setMessageColor}}>
    <BrowserRouter>
      <div>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>home</NavLink>
      </div>
      <div>
        <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>profile</NavLink>
      </div> 
      <div>
        <NavLink to="/chats" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>chats</NavLink>
      </div>    
      <div className="router_chatlist">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats" element={<ChatList onAddChat={handleAddChat} onDeleteChat={handleDeleteChat} chats={chatList} />}>
            <Route path=":chatId" element={<Chat messages={messages} addMessage={handleAddMessage}/>} />
        </Route>
        {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
        <Route path="/nochat" element={<NoChat chatList={chatList} />} />
      </Routes>  
      </div>
    </BrowserRouter>
    </ThemeContext.Provider>
    );
};
