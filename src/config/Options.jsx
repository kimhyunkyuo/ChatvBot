import React from "react";

const Options = (props) => {
  const options = props.options || [
    {
      text: "Option 1",
      handler: props.actionProvider.handleOption1,
      id: 1,
    },
    {
      text: "Option 2",
      handler: props.actionProvider.handleOption2,
      id: 2,
    },
    {
      text: "Option 3",
      handler: props.actionProvider.handleOption3,
      id: 3,
    },
    {
      text: "Option 4",
      handler: props.actionProvider.handleOption4,
      id: 4,
    },
    {
      text: "Option 5",
      handler: props.actionProvider.handleQuickGuide,
      id: 5,
    },
    {
      text: "Option 6",
      handler: props.actionProvider.handleInsuranceList,
      id: 6,
    },
  ];

  const optionsMarkup = options.map((option, index) => (
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
        height: "40px",
        maxWidth: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      key={index}
      onClick={() => props.actionProvider[option.handler]()}
    >
      {option.text}
    </button>
  ));

  return (
    <>
      <div class="ml-2 mt-4 text-left text-xs  font-normal leading-[18px] text-Text-Alternative">
        선택하신 항목에 대해 상세하게 알려드릴께요!
      </div>
      <div className="options-container" class="  flex  ">
        {optionsMarkup}
      </div>
    </>
  );
};

export default Options;
