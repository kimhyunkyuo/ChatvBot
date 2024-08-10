// import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DraggableModalButton from "../components/chatbot/DraggableModalButton";

const Login = () => {
  const name = useRef("");
  const phone = useRef(null);

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <div class="mx-auto flex h-[64px] w-[800px] items-center justify-center">
            <div></div>
            <div className="flex cursor-default items-center justify-center text-base font-semibold">
              상담 챗봇 이용하기
            </div>
          </div>
          <hr class="mb-10 h-1 w-full" />
          <div class="flex items-center justify-center">
            <body>
              <div class="mb-2 flex cursor-default text-[22px] font-semibold">
                고객님의 정보를 입력해주세요.
              </div>
              <div class="mb-10 flex cursor-default text-sm font-normal text-[#878682]">
                고객님이 입력하신 정보는 챗봇 정보를 불러올 수 있습니다.
              </div>
              <div class="mb-1 flex cursor-default text-base  font-semibold">
                이름
              </div>
              <div class="mb-3 flex cursor-default text-sm font-normal text-[#878682]">
                상담을 진행하기 위해서 고객님의 이름이 필요합니다.
              </div>
              <input
                type="name"
                ref={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="고객님의 이름을 입력해주세요."
                class="h-10 w-[480px] rounded-lg border border-[#D1D0CC] bg-[#F4F3F1] p-3 text-sm font-normal text-[#878682]"
              />
              <div class="mb-1 mt-3 flex cursor-default text-base font-semibold">
                연락처
              </div>
              <div class="mb-3 flex cursor-default text-sm font-normal text-[#878682]">
                상담사가 답변을 주면 문자메세지로 알려드리겠습니다.
              </div>
              <input
                type="phone"
                ref={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="고객님의 연락처를 입력해주세요."
                class="h-10 w-[480px] rounded-lg border border-[#D1D0CC] bg-[#F4F3F1] p-3 text-sm font-normal text-[#878682]"
              />
              <div class="mt-4 flex cursor-pointer text-sm font-normal text-[#878682] underline">
                관리자 로그인하기{" "}
              </div>
            </body>
          </div>
          <footer class="flex items-center justify-center">
            <button
              className="mt-[58px] h-12 w-[480px] rounded-2xl bg-[#FFCB51]"
              onClick={() => navigate("/main")}
            >
              시작하기
            </button>
          </footer>
          {/* <div> 
            <div className="error_message mb-[14px] text-center text-xs font-bold text-Danger-600"></div>
          </div>
          */}
        </div>
        <DraggableModalButton />
      </div>
    </div>
  );
};

export default Login;
