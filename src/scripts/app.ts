// Shared JavaScript utilities for the landing page

/**
 * Handles FAQ item toggle functionality
 */
export function initializeFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer") as HTMLElement;
    const icon = item.querySelector(".faq-icon") as HTMLElement;

    if (question && answer && icon) {
      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Close all other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("open");
            const otherAnswer = otherItem.querySelector(
              ".faq-answer"
            ) as HTMLElement;
            const otherIcon = otherItem.querySelector(
              ".faq-icon"
            ) as HTMLElement;
            if (otherAnswer) otherAnswer.style.maxHeight = "0";
            if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove("open");
          answer.style.maxHeight = "0";
          icon.style.transform = "rotate(0deg)";
        } else {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          icon.style.transform = "rotate(45deg)";
        }
      });
    }
  });
}

/**
 * Handles smooth scrolling to FAQ section
 */
export function initializeScrollToFAQ() {
  const scrollButtons = document.querySelectorAll('[data-scroll-to="faq"]');

  scrollButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const faqSection = document.getElementById("faq");

      if (faqSection) {
        faqSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/**
 * Initialize all interactive features
 */
export function initializeApp() {
  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initializeFAQ();
      initializeScrollToFAQ();
    });
  } else {
    initializeFAQ();
    initializeScrollToFAQ();
  }
}
