This code creates a fully functional basic calculator with an intuitive user interface and a clean design. It uses a combination of HTML for structure, CSS for styling, and JavaScript for functionality.
**1. HTML (Structure) 🏛️**
The HTML file defines the basic layout of the calculator.

A main div with the class calculator acts as the container.

An <input> element with id="display" serves as the screen to show the numbers and results. The disabled attribute prevents users from typing directly into it.

A div with the class buttons holds all the calculator buttons.

Each button is a <button> element with classes like .btn, .number, .operator, etc., to allow for specific styling and JavaScript targeting. data-op attributes are used to easily retrieve the operator symbol in JavaScript.

**2. CSS (Styling) ✨**
The CSS is responsible for the visual design of the calculator.

Flexbox is used to center the calculator on the page.

The .calculator container has a dark background, rounded corners, and a subtle box shadow.

The display screen is styled to look sleek, with a dark background, white text, and a large font size.

The .buttons container uses a CSS Grid layout to arrange the buttons neatly into four columns. gap is used to create space between them.

Each .btn has a specific style, with different colors for numbers, operators, the clear button, and the equals button.

Transitions and the :active pseudo-class are used to create a small visual effect when a button is clicked, providing user feedback.

**3. JavaScript (Functionality) 💻**
The JavaScript code handles all the logic and calculations.

DOM Elements: It first gets references to the display and buttons container using document.getElementById and document.querySelector.

State Variables: It uses several variables to manage the calculator's state:

currentInput: Stores the number currently being typed or the result.

firstOperand: Stores the first number of a calculation.

operator: Stores the selected arithmetic operator.

waitingForSecondOperand: A boolean flag to determine if the next input should start a new number.

Event Handling: An event listener is added to the .buttons container. This is an efficient approach called event delegation, as it listens for clicks on the parent element and then determines which specific button was clicked using event.target.

Logic Functions:

inputNumber(number): Appends a number to the currentInput.

inputDecimal(): Adds a decimal point if one isn't already present.

handleOperator(nextOperator): This is the core logic. It takes the current input, stores it as the firstOperand, and sets the operator. If a previous calculation is pending, it performs it first.

handleEquals(): Calculates the final result when the equals button is pressed. It retrieves the secondOperand from the currentInput and uses the performCalculation object to get the result.

performCalculation: This is an object where keys are operator symbols and values are functions that perform the corresponding arithmetic. This is a clean and scalable way to handle operations.

resetCalculator(): Clears all state variables to their initial values, effectively resetting the calculator.

Bonus: Keyboard Support: An event listener for keydown is added to the document. It checks event.key to see if it matches a number, operator, or special key (Enter, Escape, etc.) and calls the appropriate function. event.preventDefault() is used for the division key (/) to prevent the browser's default "quick find" behavior.

This combination of clean code and effective state management makes the calculator robust and easy to understand.


Sources

