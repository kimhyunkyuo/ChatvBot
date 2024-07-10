// import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SideMenuBar from "../components/SideMenuBar";
import MyChatBot from "../components/MyChatBot";

const Main = () => {
  const name = useRef("");
  const phone = useRef(null);

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");

  const close_icon = process.env.PUBLIC_URL + "/close_button_14.png";

  return (
    <div>
      <div class="flex h-full w-full">
        <SideMenuBar />
        <div class="flex h-full w-full flex-col">
          <header class="mx-auto flex h-[64px] w-[600px] items-center justify-between">
            <div></div>
            <div className="flex cursor-default items-center justify-center text-base font-semibold">
              전문적인 상담사와 대화
            </div>
            <button>
              <img src={close_icon} />
            </button>
          </header>
          <hr class="mb-10 h-1 w-full" />
          <MyChatBot />
        </div>
      </div>
    </div>
  );
};

export default Main;
