import { ThemeContext } from "../utils/ThemeContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { NoChat } from "../Nochat";
import { Profile } from "../Profile";
import './styles.css'
import { Articles } from "../Articles/Articles";
import { Emojis } from "../Emojis/Emojis";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
  const [messageColor, setMessageColor] = useState('blue');

    const contextValue = {
      messageColor,
      setMessageColor,
    };

    return (
      <ThemeContext.Provider value={{messageColor, setMessageColor}}>
        <BrowserRouter>
          <div>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>home</NavLink>
          </div>
          <div>
            <NavLink to="/emojis" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>emojis</NavLink>
          </div>  
          <div>
            <NavLink to="/articles" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>articles</NavLink>
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
              <Route path="/emojis" element={<Emojis />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="profile" element={<Profile />} />
              <Route path="chats" element={<ChatList />}>
                  <Route path=":chatId" element={<Chat />} />
              </Route>
              {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
              <Route path="/nochat" element={<NoChat />} />
            </Routes>  
          </div>
        </BrowserRouter>
    </ThemeContext.Provider>
    );
};
