import { ChatList } from "../ChatList";

export const NoChat = ({ chatState }) => (
    <>
      <ChatList chatState={chatState} />
      <span>Please select a chat</span>
    </>
   );