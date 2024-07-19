import React, { useState } from "react";

const CustomInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    onSendMessage(inputValue);
    setInputValue("");
  };

  return (
    <div
      className="custom-input-container"
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: "0",
        width: "100%",
        backgroundColor: "#f0f0f0",
        padding: "10px",
      }}
    >
      <input
        type="file"
        className="custom-file-input"
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="custom-text-input"
        placeholder="Type a message..."
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleSend}
        className="custom-send-button"
        style={{
          marginLeft: "10px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Send
      </button>
    </div>
  );
};

export default CustomInput;
