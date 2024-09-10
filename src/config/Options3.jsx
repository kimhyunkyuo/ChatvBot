import React from "react";
import ChatbotHeader from "../components/chatbot/ChatbotHeader";

const Options3 = (props) => {
  const botAvatar = process.env.PUBLIC_URL + "/assets/avatar.png";
  const rightArrow = process.env.PUBLIC_URL + "/assets/right_arrow_18.png";
  //  const
  const options = props.options || [
    {
      //   text: "Option 1",
      //   handler: props.actionProvider.handleOption1,
      //   id: 1,
    },
    {
      //   text: "Option 2",
      //   handler: props.actionProvider.handleOption2,
      //   id: 2,
    },
    // {
    //   text: "Option 3",
    //   handler: props.actionProvider.handleOption3,
    //   id: 3,
    // },
    // {
    //   text: "Option 4",
    //   handler: props.actionProvider.handleOption4,
    //   id: 4,
    // },
    // {
    //   text: "Option 5",
    //   handler: props.actionProvider.handleQuickGuide,
    //   id: 5,
    // },
    // {
    //   text: "Option 6",
    //   handler: props.actionProvider.handleInsuranceList,
    //   id: 6,
    // },
  ];

  const optionsMarkup = options.map((option, index) => (
    <div
      class="flex h-[34px]  w-[368px] cursor-pointer justify-between bg-Fill-Gray-Assistive p-2 text-xs text-Text-Normal hover:bg-Fill-Gray-Strong"
      //   key={index}
      onClick={() => props.actionProvider[option.handler]()}
    >
      <div>{option.text}</div>
      <div class="flex h-[18px] w-[18px] items-center">
        <img src={rightArrow} />
      </div>
    </div>
  ));

  return (
    <div class="mb-4 w-[300px]">
      <div class="mb-1 mt-4 h-full w-full pl-[22px]  text-xs font-normal leading-[18px] text-Text-Alternative">
        선택하신 항목에 대해 상세하게 알려드릴께요!
      </div>
      {/* <div class="  bg-Primary-Dark"> */}
      <div class="flex">
        <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
        <div>
          <ChatbotHeader />
          <div class="ml-2 flex h-[236px] w-[400px] flex-col bg-white p-3">
            <div class="mb-3 flex text-sm font-normal ">
              질문을 선택해주세요
            </div>
            {optionsMarkup}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Options3;
