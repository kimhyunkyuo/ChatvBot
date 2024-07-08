import Options from "./Options";
import ActionProvider from "./ActionProvider";

const config = {
  steps: [
    {
      id: "1",
      message: "Choose an option:",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: "가", label: "가", trigger: "response" },
        { value: "나", label: "나", trigger: "response" },
        { value: "다", label: "다", trigger: "response" },
        { value: "라", label: "라", trigger: "response" },
      ],
    },
    {
      id: "response",
      message: "You selected {previousValue}",
      end: true,
    },
  ],
};

export default config;
