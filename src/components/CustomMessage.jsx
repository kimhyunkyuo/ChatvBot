import React, { useState, useEffect } from "react";
import "./MyChatBot.css";
import PdfViewer from "./PdfViewer";
import RenewableGraph from "./RenewableGraph";
import NonRenewableGraph from "./NonRenewableGraph";

const CustomMessage = (props) => {
  const { messageType, message } = props;
  const [currentTime, setCurrentTime] = useState("");
  const pdf_icon = process.env.PUBLIC_URL + "/assets/Pdf_icon_26.png";
  const botAvatar = process.env.PUBLIC_URL + "/assets/avatar.png";
  const samplePdf = process.env.PUBLIC_URL + "/assets/test.pdf";

  console.log(message);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const isAm = hours < 12;
      const formattedHours = isAm ? hours : hours - 12;
      const ampm = isAm ? "오전" : "오후";
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      setCurrentTime(
        `${ampm} ${formattedHours === 0 ? 12 : formattedHours}:${formattedMinutes}`,
      );
    };

    updateCurrentTime();
    const timerId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(timerId);
  }, []);

  let content;
  switch (messageType) {
    case "quickGuide":
      return (
        <div className="flex items-center ">
          <div class="flex">
            <img
              src={botAvatar}
              alt="Bot Avatar"
              s
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <div>
              <div className="mb-[5px] ml-2 flex font-bold">
                전문적인 상담사 똑디
                <span className="ml-2 mt-0.5 text-[11px] font-normal leading-4 text-Text-Alternative">
                  {currentTime}
                </span>
              </div>
              <div
                className="quick-guide-container1"
                class="ml-2 h-[360px] w-[400px] bg-white p-3"
              >
                <div
                  className="quick-guide-title"
                  class="mb-1 flex text-base font-semibold leading-[24px] text-Text-Normal"
                >
                  퀵 가이드
                </div>
                <div
                  className="quick-guide-subtitle"
                  class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative"
                >
                  보험 상품에 대한 FAQ입니다.
                </div>
                <div class=" h-[280px] w-[376px] rounded-lg bg-Fill-Gray-Assistive ">
                  <div class="flex cursor-pointer items-center justify-between  hover:bg-slate-200">
                    <div class="mt-1 flex h-[34px] p-2 text-xs font-normal leading-[18px]  text-Text-Normal hover:font-semibold">
                      마케팅 동의에 대한 철회는 어떻게 하나요?
                    </div>
                  </div>
                  <div class="flex cursor-pointer items-center justify-between hover:bg-slate-200">
                    <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px]  text-Text-Normal hover:font-semibold">
                      중도인출금 신청은 어떻게 하나요?
                    </div>
                  </div>
                  <div class="flex cursor-pointer items-center justify-between hover:bg-slate-200">
                    <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px]  text-Text-Normal hover:font-semibold">
                      만기보험금 신청은 어떻게 하나요?
                    </div>
                  </div>
                  <div class="flex cursor-pointer items-center justify-between hover:bg-slate-200">
                    <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px]  text-Text-Normal hover:font-semibold">
                      해약은 어떻게 하나요?
                    </div>
                  </div>
                  <div class="flex cursor-pointer items-center justify-between hover:bg-slate-200">
                    <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px]  text-Text-Normal hover:font-semibold">
                      보험료가 통장잔고 부족으로 미납되었습니다. 언제까지
                      청구되나요?
                    </div>
                  </div>
                  <div class="flex cursor-pointer items-center justify-between hover:bg-slate-200">
                    <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px]  text-Text-Normal hover:font-semibold">
                      자동이체 신청/변경/해지는 어떻게 하나요?
                    </div>
                  </div>
                  <div class="flex cursor-pointer items-center justify-between hover:bg-slate-200">
                    <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px]  text-Text-Normal hover:font-semibold">
                      자동 아체를 해지하면 어떻게 보험료를 납입하나요?
                    </div>
                  </div>
                  <div class="flex cursor-pointer items-center justify-between hover:bg-slate-200">
                    <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px]  text-Text-Normal hover:font-semibold">
                      적립금과 해약환급금의 차이는 무엇인가요?
                    </div>
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
            <div>
              <div className="mb-[5px] ml-2 flex font-bold">
                전문적인 상담사 똑디
                <span className="ml-2 mt-0.5 text-[11px] font-normal leading-4 text-Text-Alternative">
                  {currentTime}
                </span>
              </div>
              <div
                className="quick-guide-container2"
                class="ml-2 h-[208px] w-[400px] rounded-[0_12px_12px_12px] bg-white p-3"
              >
                <div className="mb-1 flex text-base font-semibold leading-6 text-Text-Normal">
                  인터넷 보험 상품 목록
                </div>
                <div class="mb-1 flex text-sm font-normal leading-5 text-Text-Alternative">
                  iM 라이프에서 제공하는 인터넷 보험 상품은 4가지 있습니다.
                </div>
                <div class="flex cursor-pointer items-center  justify-between py-2 ">
                  <div class="flex pl-2">
                    <div class="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-Primary-Normal  text-xs">
                      1
                    </div>
                    iM 암보험 무배당 2024
                  </div>
                </div>
                <hr class=" text-Line-Gray-Assistive" />
                <div class="flex cursor-pointer items-center justify-between py-2 ">
                  <div class="flex pl-2">
                    <div class="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-Primary-Normal text-xs">
                      2
                    </div>
                    iM 간편정기보험 무배당 2024
                  </div>
                </div>
                <hr class=" text-Line-Gray-Assistive" />
                <div class="flex cursor-pointer items-center justify-between py-2 ">
                  <div class="flex pl-2">
                    <div class="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-Primary-Normal text-xs">
                      3
                    </div>
                    iM 저축보험 무배당 2024
                  </div>
                </div>
                <hr class="text-Line-Gray-Assistive" />
                <div class="flex cursor-pointer items-center justify-between py-2 ">
                  <div class="flex pl-2">
                    <div class="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-Primary-Normal text-xs">
                      4
                    </div>
                    iM 교통상해보험 무배당 2024
                  </div>
                </div>
              </div>
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
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                }}
              />
              <div>
                <div className="mb-[5px] ml-2 flex font-bold">
                  전문적인 상담사 똑디
                  <span className="ml-2 mt-0.5 text-[11px] font-normal leading-4 text-Text-Alternative">
                    {currentTime}
                  </span>
                </div>
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
        <div className="mb-[28px] flex items-center">
          <div class="flex">
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
            <div>
              <div className="mb-[5px] ml-2 flex font-bold">
                전문적인 상담사 똑디
                <span className="ml-2 mt-0.5 text-[11px] font-normal leading-4 text-Text-Alternative">
                  {currentTime}
                </span>
              </div>
              <div class="ml-2 h-[150px] w-[420px] rounded-[0_12px_12px_12px] bg-white p-3">
                <div class="mb-1 flex text-base font-semibold leading-6 text-Text-Normal">
                  iM 암보험 무배당 2404
                </div>
                <div class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative">
                  iM 암보험 무배당 2404 가입시 알아두실 사항에 대해
                  소개하겠습니다.
                </div>
                <div class="flex h-[66px] w-[394px] items-center rounded-lg bg-Fill-Gray-Assistive p-3">
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
        <div className="mb-[5px] ml-2 flex font-bold">
          전문적인 상담사 똑디
          <span className="ml-2 mt-0.5 text-[11px] font-normal leading-4 text-Text-Alternative">
            {currentTime}
          </span>
        </div>
        <div className="react-chatbot-kit-chat-bot-message">{content}</div>
      </div>
    </div>
  );
};

export default CustomMessage;
