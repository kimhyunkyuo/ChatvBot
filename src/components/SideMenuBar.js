import React, { useState, useEffect, useRef } from "react";

const SideMenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSubMenus, setShowSubMenus] = useState(false);

  const hamburger = process.env.PUBLIC_URL + "/hamburger.png";
  const close_icon = process.env.PUBLIC_URL + "/close_button_14.png";

  return (
    <div className="">
      <div
        class={`left-0 top-0 px-2 ${
          isMenuOpen ? "left-0 z-[20]" : "left-[-300px] z-[1]"
        } flex h-full max-w-[200px] flex-col  bg-Background-Tertiary text-Text-Alternative duration-100 ease-in-out `}
      >
        <div class="relative my-5 flex h-6 items-center justify-between px-2">
          <div
            class="text-base font-semibold text-Text-Normal  "
            onClick={() => {
              setShowSubMenus(!showSubMenus);
            }}
          >
            질문목록
          </div>
          <img src={close_icon} class="h-[14px] w-[14px]" />
        </div>
        <div class="px-2">
          <hr class="mb-3" />
        </div>
        <div class="mb-1  flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold hover:bg-Fill-Gray-Normal hover:text-Text-Normal ">
          퀵가이드
        </div>
        <div class="mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold hover:bg-Fill-Gray-Normal hover:text-Text-Normal ">
          상품소개
        </div>
        <div class="mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold hover:bg-Fill-Gray-Normal hover:text-Text-Normal ">
          시뮬레이션
        </div>

        <div class="mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold hover:bg-Fill-Gray-Normal hover:text-Text-Normal ">
          저축, 저금 수준
        </div>
        <div class="mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold hover:bg-Fill-Gray-Normal hover:text-Text-Normal ">
          청약 이후 관리
        </div>
        <div class="mb-1 flex h-[36px] w-[184px] cursor-pointer items-center p-2 font-semibold hover:bg-Fill-Gray-Normal hover:text-Text-Normal ">
          상담 정보 불러오기
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
