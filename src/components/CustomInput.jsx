import React from "react";
import plusIcon from "../assets/plus_icon_14.png";

const CustomInput = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        backgroundColor: "lightyellow",
        padding: "10px",
        borderRadius: "10px",
        width: "40px",
        height: "40px",
        zIndex: "21",
      }}
    >
      <input
        style={{
          flex: 1,
          padding: "10px",
          border: "none",
          outline: "none",
          borderRadius: "10px",
        }}
        {...props}
      />
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={() => alert("Plus icon clicked")}
      >
        <img
          src={plusIcon}
          alt="Plus Icon"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default CustomInput;
