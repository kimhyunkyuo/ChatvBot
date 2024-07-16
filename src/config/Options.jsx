// Options.jsx
import React from "react";

const Options = (props) => {
  const optionsMarkup = props.options.map((option) => (
    <button
      key={option.id}
      onClick={() => option.handler(props)}
      style={{
        margin: "5px",
        marginRight: "8px",
        padding: "10px",
        backgroundColor: "var( --Primary-Normal)",
        border: "none",
        borderRadius: "12px",
        color: "var(--Text-Normal)",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      {option.text}
    </button>
  ));

  return <div class="flex">{optionsMarkup}</div>;
};

export default Options;
