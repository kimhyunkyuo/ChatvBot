import React from "react";
import "./MyChatBot.css";
import QuickGuide from "../wigets/QuickGuide";
import PdfViewer from "../wigets/PdfViewer";
import RenewableGraph from "../wigets/RenewableGraph";
import NonRenewableGraph from "../wigets/NonRenewableGraph";
import ProductIntro from "../wigets/ProductIntro";
import DefalutOptions from "../../../config/mainOption/DefalutOptions";
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
      return "";
    // <div className="flex items-center">
    //   <div class="flex">
    //     <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
    //     <div>
    //       <ChatbotHeader />
    //       <div class="ml-2 h-[360px] w-[400px] bg-white p-3">
    //         <div class="mb-1 flex text-base font-semibold leading-[24px] text-Text-Normal">
    //           퀵 가이드
    //         </div>
    //         <div class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative">
    //           보험 상품에 대한 FAQ입니다.
    //         </div>
    //         <QuickGuide />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    case "ReApplicationInsurancePolicy":
      return (
        <div>
          <div class="mb-[30px] mt-[-320px] w-full">
            <div class="react-chatbot-kit-user-chat-message">
              보험증권을 다시 받고 싶은데 어떻게 신청하면 되나요?
            </div>
          </div>
          <div className="mb-10 flex items-center">
            <div class="flex">
              <img
                src={botAvatar}
                alt="Bot Avatar"
                className="chatbot-avatar"
              />
              <div>
                <ChatbotHeader />
                <div className="react-chatbot-kit-chat-bot-message">
                  <div> 보험증권 재발행 방법은 아래 방법을 참고해주세요.</div>
                  <div class="h-5 w-full"></div>
                  <div> 1. 콜센터(☎ 1588-4770)</div>
                  <div>. 고객센터</div>
                  <div class="pl-5"> - 계약자 내방시 : 주민등록증 지참</div>
                  <div class="pl-5">
                    - 대리인 내방시 : 계약자 인감증명서, 인감도장, 대리인 신분증
                    지참
                  </div>
                  <div>
                    3. 모바일 고객센터 : 모바일 앱 로그인 후, [고객센터
                    →증권재발행]{" "}
                  </div>
                  <div class="pl-5">
                    - 증권 재발행은 계약별 연 3회까지 신청 가능하며, 등록된
                    이메일로 발송되요.
                  </div>
                  <div class="h-5 w-full"></div>
                  <div> ※주의사항</div>
                  <div></div>
                  <div>
                    {" "}
                    - 증권재발행 우편수령 시 일반우편으로 발송함에 따라 수령하는
                    시점이 다소 지연되거나 분실의 우려가 있을 수 있어요.
                  </div>

                  <div>
                    - 모바일 고객센터 증권재발행은 계약별 연3회까지 신청
                    가능하며,
                  </div>
                  <div> 등록된 이메일로 발송되요.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "InsurancePreparations":
      return (
        <div>
          <div class="mb-[30px] mt-[-40px] w-full">
            <div class="react-chatbot-kit-user-chat-message">
              보험가입 시 준비해야 할 것이 무엇인가요?
            </div>
          </div>
          <div className="mb-10 flex items-center">
            <div class="flex">
              <img
                src={botAvatar}
                alt="Bot Avatar"
                className="chatbot-avatar"
              />
              <div>
                <ChatbotHeader />
                <div className="react-chatbot-kit-chat-bot-message">
                  <div> 보험가입을 위해서 필요해요.</div>
                  <div>
                    1. 본인소유 휴대폰 : 청약(가입) 1단계에서 본인인증이
                    필요해요.
                  </div>
                  <div>
                    {" "}
                    2. 주민등록증(혹은 운전면허증(외국인일 경우 외국인등록증)
                  </div>
                  <div> 3. 본인 소유의 결제 계좌 혹은 카드정보</div>
                  <div class="pl-5">
                    {" "}
                    - 해당 계좌는 1회 보험료 결제 및 향후 보험료 자동이체를 위한
                  </div>
                  <div class="pl-5">
                    {" "}
                    것으로 가입 전에 계좌잔고를 확인해 주세요.
                  </div>
                </div>
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
