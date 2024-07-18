class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleQuickGuide = () => {
    // Create the custom Quick Guide message directly
    const quickGuideMessage = this.createChatBotMessage(
      "", // No text message
      {
        widget: "quickGuide",
        withAvatar: false, // Ensure no avatar
      },
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, quickGuideMessage],
    }));
  };
}

export default ActionProvider;
