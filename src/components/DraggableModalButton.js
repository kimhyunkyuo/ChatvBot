import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Main from "../pages/Main";

import botAvatar from "../assets/avatar.png";
const DraggableModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const close_icon = process.env.PUBLIC_URL + "/close_button_14.png";

  const toggleModal = () => {
    if (!isDragging) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleStart = () => {
    setIsDragging(false);
  };

  const handleDrag = (e, data) => {
    setIsDragging(true);
    setPosition({ x: 0, y: data.y });
  };

  const handleStop = () => {
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div>
      <Draggable
        axis="y"
        bounds={{
          top: -window.innerHeight,
          bottom: window.innerHeight,
        }}
        position={position}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <button
          onMouseDown={(e) => e.preventDefault()} // Prevent default to avoid text selection and other default behaviors
          onClick={toggleModal}
          style={{
            position: "fixed",
            right: "10px", // Positioned at the right end
            top: `calc(66.67%)`,
            zIndex: 100,
            // backgroundColor: "red",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            transition: "top 0.1s ease-in-out",
          }}
        >
          <img
            src={botAvatar}
            alt="Bot Avatar"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              pointerEvents: "none", // Make image unclickable
            }}
          />
        </button>
      </Draggable>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9,
            backgroundColor: "var(--Background-Tertiary)",
            // backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            borderRadius: "10px",
            width: "830px",
            height: "600px",
            // paddingBottom: "64px",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
          <Main />
          <button
            onClick={toggleModal}
            style={{
              position: "absolute",
              top: "1px",
              right: "10px",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "64px",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img src={close_icon} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DraggableModalButton;
