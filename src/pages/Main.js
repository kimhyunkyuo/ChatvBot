import React, { useState, useEffect } from "react";
import SideMenuBar from "../components/SideMenuBar";
import MyChatBot from "../components/MyChatBot";
import { getChatBotConfig } from "../config/getChatBotConfig"; // This function returns the config based on menu item

const Main = () => {
  const [botConfig, setBotConfig] = useState(getChatBotConfig(""));
  useEffect(() => {
    console.log("Current bot config:", botConfig);
  }, [botConfig]);
  const handleMenuItemClick = (menuItem) => {
    setBotConfig(getChatBotConfig(menuItem));
  };

  const close_icon = process.env.PUBLIC_URL + "/close_button_14.png";

  return (
    <div>
      <div class="flex h-[600px] w-[830px]">
        <SideMenuBar onMenuItemClick={handleMenuItemClick} />
        <div class="flex h-[89.5%] w-[630px] flex-col bg-white">
          <header class="ml-[228px] flex h-[64px] w-[600px] items-center ">
            <div></div>
            <div className="flex cursor-default items-center justify-center text-base font-semibold">
              전문적인 상담사와 대화
            </div>
            {/* <button>
              <img src={close_icon} />
            </button> */}
          </header>
          <hr class="mb-[-3px] h-1 w-full" />
          <MyChatBot config={botConfig} />
        </div>
      </div>
    </div>
  );
};

export default Main;
