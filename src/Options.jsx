import React from "react";

const Options = (props) => {
  const optionsMarkup = props.options.map((option) => (
    <button
      key={option.value}
      onClick={() => props.triggerNextStep({ value: option.value })}
      style={{
        margin: "5px",
        padding: "10px",
        backgroundColor: "#5ccc9d",
        border: "none",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
      }}
    >
      {option.label}
    </button>
  ));

  return <div>{optionsMarkup}</div>;
};

export default Options;
