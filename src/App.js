import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";

const Login = lazy(() => import("./pages/Login"));
const Main = lazy(() => import("./pages/Main"));
// const Password = lazy(() => import("./pages/Password"));
// const Signup = lazy(() => import("./pages/Signup/Signup"));

function App() {
  const dispatch = useDispatch();

  // 보호된 경로에 대한 조건부 렌더링 함수
  // const renderProtected = (Component) => {
  //   return isLoggedIn ? <Component /> : <Login />;
  // };
  return (
    <Suspense>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
