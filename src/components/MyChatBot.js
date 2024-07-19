import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../config/config.js";
import MessageParser from "../config/MessageParser.js";
import ActionProvider from "../config/ActionProvider.js";
import CustomInput from "./CustomInput.jsx";
import "./MyChatBot.css";

const MyChatBot = () => {
  const onSendMessage = (message) => {
    // Implement the send message functionality here
    console.log("Sending message:", message);
    // You can dispatch the message to the chatbot's message state
  };
  return (
    <div class="chatbot-container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText="궁금한 사항이 있으시다면 적어주십시오."
      />
      {/* <CustomInput onSendMessage={onSendMessage} /> */}
    </div>
  );
};
export default MyChatBot;
