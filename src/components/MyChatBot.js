import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../config/config.js";
import MessageParser from "../config/MessageParser.js";
import ActionProvider from "../config/ActionProvider.js";
import "./MyChatBot.css";

const MyChatBot = () => {
  return (
    <div class="chatbot-container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText="궁금한 사항이 있으시다면 적어주십시오."
      />
    </div>
  );
};
export default MyChatBot;
