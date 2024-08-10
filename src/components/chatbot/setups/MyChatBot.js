import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "../../../config/MessageParser";
import ActionProvider from "../../../config/ActionProvider";
import "./MyChatBot.css";

const MyChatBot = ({ config }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    console.log("Chatbot re-rendered with config:", config);
    setKey((prevKey) => prevKey + 1); // Increment the key to force re-render
  }, [config]);

  return (
    <div className="chatbot-container">
      <Chatbot
        key={key}
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText="궁금한 사항이 있으시다면 적어주십시오."
      />
    </div>
  );
};

export default MyChatBot;
