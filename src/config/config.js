import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import CustomMessage from "../components/CustomMessage";
import UserMessage from "../components/UserChatMessage";
import CustomInput from "../components/CustomInput";

import Options from "./Options";
import botAvatar from "../assets/avatar.png";

const config = {
  lang: "ko",
  botName: "전문적인 상담사 똑디",
  initialMessages: [
    createChatBotMessage(
      "안녕하세요! 전문적인 상담사 똑디입니다. 저희가 도와드릴 부분이 있을까요?",
      {
        widget: "optionsWidget",
      },
    ),
    // 이게찔끔 나오는 글자 없는 부분 7/17 04:42 캡쳐
    // createCustomMessage(
    //   -"Hello! I’m Tokdi, a professional counselor. Is there anything we can help you with?",
    //   "custom",
    // ),
  ],
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  customComponents: {
    botChatMessage: (props) => <CustomMessage {...props} />,
    botAvatar: (props) => (
      <img
        src={botAvatar}
        alt="Bot Avatar"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "yellow",
        }}
      />
    ),
    botMessageBox: (props) => (
      <CustomMessage {...props}>{props.children}</CustomMessage>
    ),
    userChatMessage: (props) => (
      <UserMessage {...props}>{props.children}</UserMessage>
    ),
    customInput: (props) => <CustomInput {...props} />,
  },
  widgets: [
    {
      widgetName: "optionsWidget",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "quickGuide",
      widgetFunc: (props) => (
        <CustomMessage {...props} messageType="quickGuide" />
      ),
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "lightblue",
    },
    chatButton: {
      backgroundColor: "var(--Primary-Normal)",
    },
  },
};

export default config;
