export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "How does ExpenseAI categorize my expenses automatically?",
    answer:
      "ExpenseAI uses advanced machine learning algorithms to analyze transaction descriptions, merchant names, and spending patterns. It learns from your habits and can automatically categorize new transactions with 95% accuracy, saving you time and ensuring consistency.",
  },
  {
    question: "Is my financial data secure with ExpenseAI?",
    answer:
      "Absolutely. We use bank-level 256-bit SSL encryption and never store your banking credentials. We're SOC 2 certified and comply with all financial data protection regulations. Your data is encrypted both in transit and at rest.",
  },
  {
    question: "Can I connect multiple bank accounts and credit cards?",
    answer:
      "Yes! ExpenseAI supports connections to over 10,000 financial institutions including banks, credit unions, and credit card companies. You can link multiple accounts and get a unified view of all your expenses in one place.",
  },
  {
    question:
      "What makes ExpenseAI different from other expense tracking apps?",
    answer:
      "ExpenseAI goes beyond simple tracking with intelligent insights, automatic receipt scanning, tax deduction suggestions, and predictive budgeting. Our AI learns your spending patterns to provide personalized recommendations and help you make smarter financial decisions.",
  },
];
