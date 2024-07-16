import React, { useState, useEffect } from "react";

const CustomMessage = (props) => {
  const [currentTime, setCurrentTime] = useState("");

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
    const timerId = setInterval(updateCurrentTime, 60000); // 매 1분마다 업데이트

    return () => clearInterval(timerId); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  return (
    <div className="flex items-center">
      <div>
        <div className="mb-[5px] ml-2 flex font-bold">
          전문적인 상담사 똑디
          <span className="ml-2 mt-1 flex text-[11px] font-normal text-Text-Alternative">
            {currentTime}
          </span>{" "}
          {/* 현재 시각 표시 */}
        </div>
        <div className="react-chatbot-kit-chat-bot-message">
          {props.message}
        </div>
      </div>
    </div>
  );
};

export default CustomMessage;
