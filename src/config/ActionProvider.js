class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleQuickGuide = () => {
    const message = this.createChatBotMessage(
      "Quick Guidee",
      {
        widget: "quickGuide",
      },
      {
        custom: true,
        messageType: "quickGuide",
      },
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
