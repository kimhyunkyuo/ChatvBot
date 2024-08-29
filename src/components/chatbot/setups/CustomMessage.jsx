import React from "react";
import "./MyChatBot.css";
import QuickGuide from "../wigets/QuickGuide";
import PdfViewer from "../wigets/PdfViewer";
import RenewableGraph from "../wigets/RenewableGraph";
import NonRenewableGraph from "../wigets/NonRenewableGraph";
import ProductIntro from "../wigets/ProductIntro";
import ChatbotHeader from "../ChatbotHeader";

const CustomMessage = (props) => {
  const { messageType, message } = props;
  const pdf_icon = process.env.PUBLIC_URL + "/assets/pdf_icon26.png";
  const botAvatar = process.env.PUBLIC_URL + "/assets/avatar.png";
  const samplePdf = process.env.PUBLIC_URL + "/assets/test.pdf";

  console.log(message);

  let content;
  switch (messageType) {
    case "quickGuide":
      return (
        <div className="flex items-center">
          <div class="flex">
            <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
            <div>
              <ChatbotHeader />
              <div class="ml-2 h-[360px] w-[400px] bg-white p-3">
                <div class="mb-1 flex text-base font-semibold leading-[24px] text-Text-Normal">
                  퀵 가이드
                </div>
                <div class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative">
                  보험 상품에 대한 FAQ입니다.
                </div>
                <QuickGuide />
              </div>
            </div>
          </div>
        </div>
      );
    case "productIntro":
      return (
        <div className="flex items-center">
          <div class="flex">
            <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
            <div>
              <ChatbotHeader />
              <ProductIntro />
            </div>
          </div>
        </div>
      );
    case "simulation":
      return <div>시뮬레이션@@</div>;
    case "cancellationRefund":
      return (
        <div>
          <div className="mt-[20px] flex items-center">
            <div class="flex">
              <img
                src={botAvatar}
                alt="Bot Avatar"
                className="chatbot-avatar"
              />
              <div>
                <ChatbotHeader />
                <div class="mb-2 ml-2 max-h-[150px] w-[420px] rounded-[0_12px_12px_12px] bg-white p-3">
                  <div class="mb-1 flex text-base font-semibold leading-6 text-Text-Normal">
                    iM 암보험 무배당 2404
                  </div>
                  <div class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative">
                    iM 암보험 무배당 2404 가입시 알아두실 사항에 대해
                    소개하겠습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RenewableGraph />
          <NonRenewableGraph />
        </div>
      );
    case "pdfViewer":
      return (
        <div className="mb-[42px] flex items-center">
          <div class="flex">
            <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
            <div>
              <ChatbotHeader />
              <div class="ml-2 h-[160px] w-[460px] rounded-[0_12px_12px_12px] bg-white p-3">
                <div class="mb-1 flex text-base font-semibold leading-6 text-Text-Normal">
                  iM 암보험 무배당 2404
                </div>
                <div class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative">
                  iM 암보험 무배당 2404 가입시 알아두실 사항에 대해
                  소개하겠습니다.
                </div>
                <div class="flex h-[66px] w-[434px] items-center rounded-lg bg-Fill-Gray-Assistive p-3">
                  <div>
                    <img src={pdf_icon} />
                  </div>
                  <div class="ml-4">
                    <div class=" mb-1 text-sm font-semibold leading-5 text-Text-Normal">
                      240328 가입시알아두실사항_DT.pdf
                    </div>
                    <div class="flex items-center">
                      <PdfViewer fileUrl={samplePdf} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      content = <div>{message}</div>; // Display the message prop
      break;
  }

  // 빈 메시지 박스를 렌더링하지 않음
  if (props.message === "") {
    return null;
  }

  return (
    <div className="flex items-center">
      <div>
        <ChatbotHeader />
        <div className="react-chatbot-kit-chat-bot-message">{content}</div>
      </div>
    </div>
  );
};

export default CustomMessage;
