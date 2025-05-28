/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import "@testing-library/cypress/add-commands";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      startQuiz(): Chainable<void>;
      answerMultipleChoiceQuestion(optionIndex: number): Chainable<void>;
      answerYesOrNoQuestion(option: "Yes" | "No"): Chainable<void>;
      goBack(): Chainable<void>;
      verifyResults(expectedResult: "positive" | "negative"): Chainable<void>;
      closeQuiz(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("startQuiz", () => {
  cy.get("button").contains("Take the Quiz").click();
  cy.get('[data-testid="loading-page"]').should("exist");
  cy.get('[data-testid="loading-page"]').should("not.exist");
});

Cypress.Commands.add("answerMultipleChoiceQuestion", (optionIndex: number) => {
  cy.get(".max-w-5xl > .grid > :nth-child(" + optionIndex + ")").click();
});

Cypress.Commands.add("answerYesOrNoQuestion", (option: "Yes" | "No") => {
  cy.contains(option).click();
});

Cypress.Commands.add("goBack", () => {
  cy.get("button").contains("Back").click();
});

Cypress.Commands.add(
  "verifyResults",
  (expectedResult: "positive" | "negative") => {
    if (expectedResult === "positive") {
      cy.get('[data-testid="positive-feedback"]').should("exist");
    } else {
      cy.get('[data-testid="negative-feedback"]').should("exist");
    }
  }
);

Cypress.Commands.add("closeQuiz", () => {
  cy.get("button").contains("Close quiz").click();
});
