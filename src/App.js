import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";

const Login = lazy(() => import("./pages/Login"));
const Main = lazy(() => import("./pages/Main"));
const Test = lazy(() => import("./pages/Test"));

function App() {
  return (
    <Suspense>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
