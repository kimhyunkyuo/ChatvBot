class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    // Handle "Quick Guide", "Quick", or "Start"
    if (
      lowercase.includes("퀵 가이드") ||
      lowercase.includes("퀵") ||
      lowercase.includes("시작")
    ) {
      this.actionProvider.handleQuickGuide();
    }

    // Handle "Insurance Product" and "Introduction"
    if (lowercase.includes("보험 상품") && lowercase.includes("소개")) {
      this.actionProvider.handleProductIntro();
    }

    // Handle "cancellation"
    if (lowercase.includes("해약")) {
      this.actionProvider.handleOption2();
    }

    // Additional message parsing logic (if needed)
  }
}

export default MessageParser;
