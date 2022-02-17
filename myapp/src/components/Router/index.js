import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { NoChat } from "../Nochat";
import { ProfilePage } from "../Profile";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
    return (
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
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chats" element={<ChatList />}>
          <Route path=":chatId" element={<Chat />} />
        </Route>
        {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
        <Route path="/nochat" element={<NoChat />} />
      </Routes>  
    </BrowserRouter>
    );
};
