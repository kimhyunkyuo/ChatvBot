// import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const email = useRef("");
  const password = useRef(null);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex h-[100vh] justify-center bg-LightMode-SectionBackground pt-[214px]">
        <div className="h-[354px] w-[356px] rounded-md border border-Gray-scale-300 bg-white px-9 py-6">
          <span
            className="mb-6 flex cursor-default justify-center font-semibold"
            style={{ fontSize: "17px" }}
          >
            로그인
          </span>

          <div>
            <input
              type="email"
              ref={email}
              onChange={(e) => setMyEmail(e.target.value)}
              placeholder="이메일을 입력해주세요."
              autoFocus
              className="login_input_box"
            />
          </div>
          <div>
            <input
              type="password"
              ref={password}
              onChange={(e) => setMyPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요."
              className="login_input_box my-3"
            />
            <div className="error_message mb-[14px] text-center text-xs font-bold text-Danger-600"></div>
          </div>
          <div className="mb-6 flex cursor-pointer justify-end text-xs"></div>

          <div
            className="signup_button border-primary-100 text-primary-100"
          >
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
