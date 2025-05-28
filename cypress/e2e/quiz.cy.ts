describe("Quiz Flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should complete the quiz successfully", () => {
    cy.startQuiz();

    // Answer all questions positively
    cy.answerMultipleChoiceQuestion(1);
    cy.answerYesOrNoQuestion("No");
    cy.answerYesOrNoQuestion("No");

    // Verify results
    cy.verifyResults("positive");

    // Close the quiz
    cy.closeQuiz();
  });

  it("should handle quiz rejection on 1st question", () => {
    cy.startQuiz();

    // Select a rejection option
    cy.answerMultipleChoiceQuestion(6);

    // Verify rejection message
    cy.verifyResults("negative");

    // Close the quiz
    cy.closeQuiz();
  });

  it("should handle quiz rejection on 2nd question", () => {
    cy.startQuiz();

    cy.answerMultipleChoiceQuestion(1);
    // Select a rejection option
    cy.answerYesOrNoQuestion("Yes");

    // Verify rejection message
    cy.verifyResults("negative");

    // Close the quiz
    cy.closeQuiz();
  });

  it("should handle quiz rejection on 3rd question", () => {
    cy.startQuiz();

    cy.answerMultipleChoiceQuestion(1);
    cy.answerYesOrNoQuestion("No");
    // Select a rejection option
    cy.answerYesOrNoQuestion("Yes");

    // Verify rejection message
    cy.verifyResults("negative");

    // Close the quiz
    cy.closeQuiz();
  });

  it("should allow going back to previous questions", () => {
    cy.startQuiz();

    // Answer first question
    cy.answerMultipleChoiceQuestion(1);

    // Go back
    cy.goBack();

    // Verify we're back at the first question
    cy.get("h2").should("contain", "Which image best matches your hair loss?");
  });
});
