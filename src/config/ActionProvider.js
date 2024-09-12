class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleQuickGuide = () => {
    const quickGuideMessage = this.createChatBotMessage("", {
      widget: "quickGuide",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, quickGuideMessage],
    }));
  };

  handleProductIntro = () => {
    const productIntroMessage = this.createChatBotMessage("", {
      widget: "productIntroWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, productIntroMessage],
    }));
  };

  handleSimulation = () => {
    const simulationMessage = this.createChatBotMessage("", {
      widget: "simulationWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, simulationMessage],
    }));
  };

  SideContracts = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideContractsWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SidePolicy = () => {
    const message = this.createChatBotMessage("", {
      widget: "SidePolicyWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SideContractDetails = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideContractDetailsWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SideInsuranceBeneficiary = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideInsuranceBeneficiaryWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  SideBeneficiary = () => {
    const message = this.createChatBotMessage("", {
      widget: "SideBeneficiaryWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  MarketingConsent = () => {
    const message = this.createChatBotMessage("", {
      widget: "MarketingConsentWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  InsurancePreparations = () => {
    const message = this.createChatBotMessage("", {
      widget: "InsurancePreparationsWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  ReApplicationInsurancePolicy = () => {
    const message = this.createChatBotMessage("", {
      widget: "ReApplicationInsurancePolicyWidget",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleOption1 = () => {
    const message = this.createChatBotMessage("", {
      widget: "pdfViewer",
      withAvatar: false,
    });

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleOption2 = () => {
    const message = this.createChatBotMessage("", {
      widget: "cancellationRefundWidget",
      withAvatar: false,
    });
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleOption3 = () => {
    const message = this.createChatBotMessage("You selected IM 무배당 3.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleOption4 = () => {
    const message = this.createChatBotMessage("You selected IM 무배당 4.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleInsuranceList = () => {
    const message = this.createChatBotMessage(
      "You selected Internet Insurance Products List.",
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Helper function to set the currently selected widget without affecting other UI elements
  setCurrentWidget = (widgetName) => {
    this.setState((prevState) => ({
      ...prevState,
      currentWidget: widgetName, // Track the selected widget
    }));
  };

  InsuranceContracts = () => {
    this.setCurrentWidget("InsuranceContractsWidget");
  };

  InsurancePayment = () => {
    this.setCurrentWidget("InsurancePaymentWidget");
  };

  InsuranceTerminate = () => {
    this.setCurrentWidget("InsuranceTerminateWidget");
  };

  PersonalInformation = () => {
    this.setCurrentWidget("PersonalInformationWidget");
  };
}

export default ActionProvider;
