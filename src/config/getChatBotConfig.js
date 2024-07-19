import { createChatBotMessage } from "react-chatbot-kit";
import CustomMessage from "../components/CustomMessage";
import Options from "./Options";
import botAvatar from "../assets/avatar.png";
import UserMessage from "../components/UserChatMessage";

const getChatBotConfig = (menuItem) => {
  const config = {
    lang: "ko",
    botName: "전문적인 상담사 똑디",
    initialMessages: [],
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
      {
        widgetName: "productIntroWidget",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="productIntro" />
        ),
      },
      {
        widgetName: "simulationWidget",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="simulation" />
        ),
      },
      // Add other widgets here
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

  switch (menuItem) {
    case "quickGuide":
      config.initialMessages = [
        createChatBotMessage(
          "안녕하세요! 전문적인 상담사 똑디입니다. 저희가 도와드릴 부분이 있을까요?",
          {
            widget: "quickGuide",
          },
        ),
      ];
      break;
    case "productIntro":
      config.initialMessages = [
        createChatBotMessage("상품소개에 대한 내용을 안내해드리겠습니다.", {
          widget: "productIntroWidget",
        }),
      ];
      break;
    case "simulation":
      config.initialMessages = [
        createChatBotMessage("시뮬레이션에 대한 내용을 안내해드리겠습니다.", {
          widget: "simulationWidget",
        }),
      ];
      break;
    // Add other cases for other menu items
    default:
      config.initialMessages = [
        createChatBotMessage(
          "안녕하세요! 전문적인 상담사 똑디입니다. 저희가 도와드릴 부분이 있을까요?",
          {
            widget: "optionsWidget",
          },
        ),
      ];
      break;
  }

  return config;
};

export { getChatBotConfig };
