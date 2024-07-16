import React from "react";

const UserChatMessage = (props) => {
  return (
    <div>
      <div className="react-chatbot-kit-user-chat-message">{props.message}</div>
      {/* <span>df</span> */}
    </div>
  );
};

export default UserChatMessage;
