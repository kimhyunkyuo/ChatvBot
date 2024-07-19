import React from "react";

const Options = (props) => {
  const options = [
    {
      text: "퀵 가이드",
      handler: props.actionProvider.handleQuickGuide,
      id: 1,
    },
    { text: "인터넷 보험 상품 목록", handler: () => {}, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      style={{
        margin: "5px",
        marginRight: "8px",
        padding: "10px",
        backgroundColor: "var( --Primary-Normal)",
        border: "none",
        borderRadius: "12px",
        color: "var(--Text-Normal)",
        fontWeight: "600",
        cursor: "pointer",
      }}
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <>
      <div class="mr-4 text-right text-xs font-normal leading-[18px] text-Text-Alternative">
        선택하신 항목에 대해 상세하게 알려드릴께요!
      </div>
      <div className="options-container" class="ml-[320px]  flex  ">
        {optionsMarkup}
      </div>
    </>
  );
};

export default Options;
