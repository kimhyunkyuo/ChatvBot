import { createChatBotMessage } from "react-chatbot-kit";
import CustomMessage from "../components/chatbot/setups/CustomMessage";
import UserMessage from "../components/chatbot/setups/UserChatMessage";
import Options2 from "./Options2";
import Options from "./Options";
import "../components/chatbot/setups/MyChatBot.css";

const ChatBotConfig = (menuItem) => {
  const botAvatar = process.env.PUBLIC_URL + "/assets/avatar.png";
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
        <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
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
        widgetFunc: (props) => (
          <div class="h-[60px] w-full">
            {" "}
            <Options
              {...props}
              options={[
                {
                  text: "인터넷 보험 상품 목록",
                  handler: "handleInsuranceList",
                },
                { text: "퀵 가이드", handler: "handleQuickGuide" },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "quickGuide",
        widgetFunc: (props) => (
          <div class="mt-[20px] h-[434px] w-full">
            <CustomMessage {...props} messageType="quickGuide" />
            <div class="h-[240px] w-full">
              <Options2
                {...props}
                options={[
                  { text: "마케팅 동의 철회", handler: "handleOption1" },
                  {
                    text: "중도인출금 신청",
                    handler: "handleOption1",
                  },
                  { text: "만기보험금 신청 방법", handler: "handleOption1" },
                  {
                    text: "해약 방법",
                    handler: "handleOption2",
                  },
                  {
                    text: "보험료가 통장잔고 미인출 문의",
                    handler: "handleOption3",
                  },
                  {
                    text: "자동이체 신청/변경/해지",
                    handler: "handleOption1",
                  },
                  {
                    text: "자동이체 해지시 보험료 납입",
                    handler: "handleOption2",
                  },
                  {
                    text: "적립금과 해약환급금의 차이",
                    handler: "handleOption8",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "productIntroWidget",
        widgetFunc: (props) => (
          <>
            <CustomMessage {...props} messageType="productIntro" />
            <div class="h-[120px] w-full">
              <Options
                {...props}
                options={[
                  { text: "iM 암보험 무배당 2404", handler: "handleOption1" },
                  {
                    text: "iM 간편정기보험 무배당 2404",
                    handler: "handleOption2",
                  },
                  { text: "iM 저축보험 무배당 2404", handler: "handleOption3" },
                  {
                    text: "iM 교통상해보험 무배당 2404",
                    handler: "handleOption4",
                  },
                ]}
              />
            </div>
          </>
        ),
      },
      {
        widgetName: "simulationWidget",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="simulation" />
        ),
      },
      {
        widgetName: "pdfViewer",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="pdfViewer" />
        ),
      },
      {
        widgetName: "cancellationRefundWidget",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="cancellationRefund" />
        ),
      },
    ],
  };

  switch (menuItem) {
    case "quickGuide":
      config.initialMessages = [
        createChatBotMessage("", {
          widget: "quickGuide",
          withAvatar: false,
        }),
      ];
      break;
    case "productIntro":
      config.initialMessages = [
        createChatBotMessage("", {
          widget: "productIntroWidget",
          withAvatar: false,
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

export { ChatBotConfig };
