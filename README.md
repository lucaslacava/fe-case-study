# Manual Quiz Application

A modern, interactive quiz application built with Next.js, TypeScript, and Tailwind CSS. This application provides a seamless user experience for conducting medical questionnaires with a focus on accessibility, performance, and maintainability.

## Features

- Interactive quiz flow with progress tracking
- Responsive design for all screen sizes

- Comprehensive end-to-end testing
- Type-safe development with TypeScript

## Tech Stack

- **Framework**: Next.js + TypeScript
- **Styling**: Tailwind CSS + shadcn
- **Testing**: Cypress for E2E testing, Jest + RTL for unit tests
- **State Management**: React Context API

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   └── services/          # API services
├── components/            # Reusable UI components
│   └── ui/               # Base UI components
├── context/              # React Context providers
└── types/                # TypeScript type definitions
```

## Architecture Decisions

### Tailwind CSS

- Utility-first approach for rapid development
- Consistent design system
- Easy responsive design implementation

### Shadcn

- Accessible component primitives
- Unstyled components for complete styling control
- Consistent behavior across browsers
- Keyboard navigation support

### State Management

- React Context API for global state
- Simple and lightweight solution
- No additional dependencies

### Testing Strategy

- Cypress for end-to-end testing
- Custom commands for reusable test actions
- Type-safe test definitions
- RTL for unit tests

## Testing

### End-to-end

The application uses Cypress for end-to-end testing with a focus on:

- User interactions
- Quiz flow validation
- Error handling

![cypress-logs](/public/docs/cypress-logs.png)

Custom commands are implemented for common actions:

```typescript
cy.startQuiz();
cy.answerMultipleChoiceQuestion(optionIndex);
cy.answerYesOrNoQuestion(option);
cy.verifyResults(expectedResult);
cy.closeQuiz();
```

### Unit tests

The application uses Jest and React Testing Library for comprehensive unit testing.

- Tests verify both UI rendering and user interactions
- Components are tested in isolation using mocked contexts and dependencies
- Components are tested for:
  - Initial rendering
  - State changes
  - User interactions
  - Error states
  - Loading states
  - Edge cases

![unit-tests-logs](/public/docs/unit-tests-logs.png)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Run e2e tests:
   ```bash
   npm run cypress
   ```
5. Run unit tests:
   ```bash
   npm run test
   ```

## UI/UX Decisions

1. **Full-screen Modal-based Quiz**

   As one of the requirement was:

   > "[...]the quiz should open on the same page. This is to avoid the drop-off when users get bored waiting for the next page to load."

And the application has a loading time to get the answers, I decided to show this animation that blurs the background, so the user can have a seamlessly experience while waiting and once the questions are loaded, they're displayed in full screen and with no distractions.

2. **Progress Tracking**

- Visual progress bar
- Question counter
- Clear navigation

![progress-bar](/public/docs/progress-bar.png)

3. **Responsive Design**

   - Mobile-first approach
   - Adaptive layouts

| ![landing page](/public/docs/landing-page.png) | ![1st question page](/public/docs/1stQ.png) | ![2nd question page](/public/docs/2ndQ.png) |
| ---------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
