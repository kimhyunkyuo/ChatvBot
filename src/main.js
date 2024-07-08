import React from "react";
import ChatBot from "react-chatbotify";
import "react-chatbotify/dist/react-chatbotify.css";

const MyChatBot = () => {
  const flow = {
    start: {
      message: "안녕, 여기는 FAQ 봇이야!",
      options: ["야이", "깃허브", "디스코드"],
      path: "process_options",
    },
    process_options: {
      message: (params) => {
        let link = "";
        switch (params.userInput) {
          case "예시":
            link =
              "https://react-chatbotify.tjtanjin.com/docs/examples/basic_form";
            break;
          case "깃허브":
            link = "https://github.com/tjtanjin/react-chatbotify/";
            break;
          case "디스코드":
            link = "https://discord.gg/6R4DK4G5Zh";
            break;
          default:
            return "unknown_input";
        }
        setTimeout(() => {
          window.open(link);
        }, 1000);
        return `잠시만 기다려! ${params.userInput} 페이지로 안내할게!`;
      },
      transition: { duration: 1 },
      path: "loop",
    },
    loop: {
      message: "더 도움이 필요하신가요?",
      options: ["예시", "깃허브", "디스코드"],
      path: "process_options",
    },
  };

  return <ChatBot />;
};

export default MyChatBot;
