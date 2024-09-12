import { createChatBotMessage } from "react-chatbot-kit";
import CustomMessage from "../components/chatbot/setups/CustomMessage";
import UserMessage from "../components/chatbot/setups/UserChatMessage";
import Options3 from "./Options3";
import MainContractsOptions from "./mainOption/MainContractsOptions";
import MainPaymentOptions from "./mainOption/MainPaymentOptions";
import MainTerminateOptions from "./mainOption/MainTerminateOptions";
import MainPersonalOptions from "./mainOption/MainPersonalOptions";
import SideContractsOptions from "./sideOption/SideContractsOptions";
import DefalutOptions from "./mainOption/DefalutOptions";
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
          <>
            <div class="mb-10 h-[100px] w-full ">
              {" "}
              <DefalutOptions
                {...props}
                options={[
                  {
                    text: "보험 계약 및 가입 관련",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "보험료 및 납입 관리",
                    handler: "InsurancePayment",
                  },
                  {
                    text: "보험료 지급 및 해지 처리",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "개인정보 및 증명 서류",
                    handler: "PersonalInformation",
                  },
                ]}
              />
            </div>
            {/* Dynamically render the selected widget */}
            {props.state.currentWidget === "InsuranceContractsWidget" && (
              <MainContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입",
                    handler: "SideContracts",
                  },
                  {
                    text: "보험증권",
                    handler: "SidePolicy",
                  },
                  {
                    text: "계약사항",
                    handler: "SideContractDetails",
                  },
                  {
                    text: "보험수익자",
                    handler: "SideInsuranceBeneficiary",
                  },
                  {
                    text: "수익자",
                    handler: "SideBeneficiary",
                  },
                  {
                    text: "마케팅 동의",
                    handler: "MarketingConsent",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "InsurancePaymentWidget" && (
              <MainPaymentOptions
                {...props}
                options={[
                  {
                    text: "보험료 납입",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "자동이체",
                    handler: "InsurancePayment",
                  },
                  {
                    text: "적립금",
                    handler: "InsuranceTerminate",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "InsuranceTerminateWidget" && (
              <MainTerminateOptions
                {...props}
                options={[
                  {
                    text: "보험금 청구",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "지급금 우편접수",
                    handler: "InsurancePayment",
                  },
                  {
                    text: "만기보험금",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "해약환급금",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "해약",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "중도인출",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "청약철회",
                    handler: "InsuranceTerminate",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "PersonalInformationWidget" && (
              <MainPersonalOptions
                {...props}
                options={[
                  {
                    text: "개인정보",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "증명서",
                    handler: "InsurancePayment",
                  },
                ]}
              />
            )}
          </>
        ),
      },

      {
        widgetName: "SideContractsWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-[434px] w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="h-[240px] w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 시 준비해야 할 것이 무엇인가요?",
                    handler: "InsurancePreparations",
                  },
                  {
                    text: "제가 아닌 다른 사람을 피보험자로 할 수 없나요?",
                    handler: "handleOption1",
                  },
                  {
                    text: "보험가입 후 보험증권은 언제 받아볼 수 있나요?",
                    handler: "handleOption2",
                  },
                  {
                    text: "보험가입 후 언제부터 보장이 되나요?",
                    handler: "handleOption3",
                  },
                  {
                    text: "수익자 지정은 어떻게 하나요?",
                    handler: "handleOption1",
                  },
                  {
                    text: "보험가입금액이 무엇인가요?",
                    handler: "handleOption2",
                  },
                  {
                    text: "보험가입이 되지 않을 경우도 있나요?",
                    handler: "handleOption2",
                  },
                  {
                    text: "보험 가입은 언제든 가능 한건가요?",
                    handler: "handleOption2",
                  },
                  {
                    text: "보험가입 시 한도초과로 나오는 것은 왜그렇죠?",
                    handler: "handleOption2",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SidePolicyWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-[434px] w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="h-[240px] w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험증권을 다시 받고 싶은데 어떻게 신청하면 되나요?",
                    handler: "ReApplicationInsurancePolicy",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideContractDetailsWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-[434px] w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="h-[240px] w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 후 가입한 보험의 계약사항은 어디서 확인 할 수 있나요?",
                    handler: "handleOption1",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideInsuranceBeneficiaryWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-[434px] w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="h-[240px] w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험수익자 지정,변경 약정 동의가 무엇인가요?",
                    handler: "handleOption1",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideBeneficiaryWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-[434px] w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="h-[240px] w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "수익자를 법정상속인으로 지정할 경우 상속 순위는 어떻게 되나요?",
                    handler: "handleOption1",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "MarketingConsentWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-[434px] w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="h-[240px] w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "마케팅 동의에 대한 철회는 어떻게 하나요?",
                    handler: "handleOption1",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsurancePreparationsWidget",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="InsurancePreparations" />
        ),
      },
      {
        widgetName: "ReApplicationInsurancePolicyWidget",
        widgetFunc: (props) => (
          <CustomMessage
            {...props}
            messageType="ReApplicationInsurancePolicy"
          />
        ),
      },
      {
        widgetName: "quickGuide",
        widgetFunc: (props) => (
          <div class="mt-[220px] h-[434px] w-full">
            <CustomMessage {...props} messageType="quickGuide" />
            <div class="h-[240px] w-full">
              <Options3
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
              <DefalutOptions
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
