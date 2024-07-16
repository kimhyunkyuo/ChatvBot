import React, { useState, useEffect } from "react";
import "./MyChatBot.css";

const CustomMessage = (props) => {
  const [currentTime, setCurrentTime] = useState("");
  const right_arrow = process.env.PUBLIC_URL + "/right_arrow.png";

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

  return (
    <div className="flex items-center">
      <div class="">
        <div className="mb-[5px] ml-2 flex font-bold">
          전문적인 상담사 뚝디
          <span className="ml-2">{currentTime}</span>
        </div>
        <div className="react-chatbot-kit-chat-bot-message">
          {props.message}
        </div>
        {props.messageType === "quickGuide" && (
          <div
            className="quick-guide-container1"
            class="h-[400px] w-[400px] bg-white p-3"
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
              보험 상품에 대해 궁금한 점이 있으시다면 클릭해주십시오.
            </div>
            <input
              class="mb-2 h-[30px] w-[376px] rounded-lg bg-Fill-Gray-Assistive p-2 text-xs font-normal leading-[14px] text-Text-Assistive"
              placeholder="찾고싶은 약관이 있다면 검색하세요"
            ></input>
            <div class=" h-[280px] w-[376px] rounded-lg bg-Fill-Gray-Assistive">
              <div class="flex items-center justify-between">
                <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px] text-Text-Normal">
                  마케팅 동의에 대한 철회는 어떻게 하나요?
                </div>
                <img class="mr-4 h-[10px] w-[6px]" src={right_arrow} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px] text-Text-Normal">
                  중도인출금 신청은 어떻게 하나요?
                </div>
                <img class="mr-4 h-[10px] w-[6px]" src={right_arrow} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px] text-Text-Normal">
                  만기보험금 신청은 어떻게 하나요?
                </div>
                <img class="mr-4 h-[10px] w-[6px]" src={right_arrow} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px] text-Text-Normal">
                  해약은 어떻게 하나요?
                </div>
                <img class="mr-4 h-[10px] w-[6px]" src={right_arrow} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px] text-Text-Normal">
                  보험료가 통장잔고 부족으로 미납되었습니다. 언제까지
                  청구되나요?
                </div>
                <img class="mr-4 h-[10px] w-[6px]" src={right_arrow} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px] text-Text-Normal">
                  자동이체 신청/변경/해지는 어떻게 하나요?
                </div>
                <img class="mr-4 h-[10px] w-[6px]" src={right_arrow} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px] text-Text-Normal">
                  자동 아체를 해지하면 어떻게 보험료를 납입하나요?
                </div>
                <img class="mr-4 h-[10px] w-[6px]" src={right_arrow} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex h-[34px] p-2 text-xs font-normal leading-[18px] text-Text-Normal">
                  적립금과 해약환급금의 차이는 무엇인가요?
                </div>
                <img class="mr-4 h-[10px] w-[6px]" src={right_arrow} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomMessage;
