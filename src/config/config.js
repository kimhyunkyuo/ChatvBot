import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import Options from "./Options";

const config = {
  botName: "MyBot",
  initialMessages: [
    createChatBotMessage("Choose an option:", {
      widget: "optionsWidget",
    }),
  ],

  widgets: [
    {
      widgetName: "optionsWidget",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          {
            text: "가",
            handler: (props) => props.actionProvider.handleOption("가"),
            id: 1,
          },
          {
            text: "나",
            handler: (props) => props.actionProvider.handleOption("나"),
            id: 2,
          },
          {
            text: "다",
            handler: (props) => props.actionProvider.handleOption("다"),
            id: 3,
          },
          {
            text: "라",
            handler: (props) => props.actionProvider.handleOption("라"),
            id: 4,
          },
        ],
      },
    },
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "var(--Fill-Gray-Assistive)",
      Color: "var(--Text-Normal)",
      color: "#00000",
    },
    chatButton: {
      backgroundColor: "var(--Primary-Normal)",
    },
  },
};

export default config;
