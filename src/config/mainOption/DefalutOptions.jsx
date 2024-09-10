import React from "react";

const DefalutOptions = (props) => {
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
      class="float-left m-[5px] mr-4 h-10 max-w-[250px] cursor-pointer rounded-xl border-none
    bg-Primary-Normal p-[10px] font-semibold text-Text-Normal"
      key={index}
      onClick={() => props.actionProvider[option.handler]()}
    >
      {option.text}
    </button>
  ));

  return (
    <div class="mb-4 w-[600px]">
      <div class="mb-1 ml-[56px] mt-4 h-full w-full pr-[12px] text-left text-xs font-normal leading-[18px] text-Text-Alternative">
        카테고리를 선택해주세요
      </div>
      <div class="ml-[50px] mr-[100px]">{optionsMarkup}</div>
    </div>
  );
};

export default DefalutOptions;
