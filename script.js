document.addEventListener('DOMContentLoaded', () => {
            const display = document.getElementById('display');
            const buttons = document.querySelector('.buttons');
            let currentInput = '';
            let firstOperand = null;
            let operator = null;
            let waitingForSecondOperand = false;

            function updateDisplay() {
                display.value = currentInput;
            }

            buttons.addEventListener('click', (event) => {
                const { target } = event;
                if (!target.matches('.btn')) {
                    return;
                }

                if (target.classList.contains('number')) {
                    inputNumber(target.textContent);
                    updateDisplay();
                    return;
                }

                if (target.classList.contains('operator')) {
                    handleOperator(target.dataset.op);
                    updateDisplay();
                    return;
                }

                if (target.classList.contains('decimal')) {
                    inputDecimal();
                    updateDisplay();
                    return;
                }

                if (target.classList.contains('equals')) {
                    handleEquals();
                    updateDisplay();
                    return;
                }

                if (target.classList.contains('clear')) {
                    resetCalculator();
                    updateDisplay();
                    return;
                }
            });

            function inputNumber(number) {
                if (waitingForSecondOperand) {
                    currentInput = number;
                    waitingForSecondOperand = false;
                } else {
                    currentInput = currentInput === '0' ? number : currentInput + number;
                }
            }

            function inputDecimal() {
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
            }

            function handleOperator(nextOperator) {
                const inputValue = parseFloat(currentInput);

                if (operator && waitingForSecondOperand) {
                    operator = nextOperator;
                    return;
                }

                if (firstOperand === null) {
                    firstOperand = inputValue;
                } else if (operator) {
                    const result = performCalculation[operator](firstOperand, inputValue);
                    currentInput = String(result);
                    firstOperand = result;
                }

                waitingForSecondOperand = true;
                operator = nextOperator;
            }

            function handleEquals() {
                if (operator === null || waitingForSecondOperand) {
                    return;
                }
                const secondOperand = parseFloat(currentInput);
                const result = performCalculation[operator](firstOperand, secondOperand);
                currentInput = String(result);
                firstOperand = null;
                operator = null;
                waitingForSecondOperand = false;
            }

            const performCalculation = {
                '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
                '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
                '×': (firstOperand, secondOperand) => firstOperand * secondOperand,
                '÷': (firstOperand, secondOperand) => firstOperand / secondOperand,
                '%': (firstOperand, secondOperand) => firstOperand % secondOperand,
            };

            function resetCalculator() {
                currentInput = '';
                firstOperand = null;
                operator = null;
                waitingForSecondOperand = false;
            }

            // Bonus: Keyboard support
            document.addEventListener('keydown', (event) => {
                const key = event.key;
                if (key >= '0' && key <= '9') {
                    inputNumber(key);
                    updateDisplay();
                } else if (key === '.') {
                    inputDecimal();
                    updateDisplay();
                } else if (key === '+' || key === '-') {
                    handleOperator(key);
                    updateDisplay();
                } else if (key === '*' || key === 'x') {
                    handleOperator('×');
                    updateDisplay();
                } else if (key === '/') {
                    handleOperator('÷');
                    updateDisplay();
                    event.preventDefault(); // Prevent default browser behavior (e.g., quick find)
                } else if (key === 'Enter' || key === '=') {
                    handleEquals();
                    updateDisplay();
                } else if (key === 'Escape' || key === 'c' || key === 'C') {
                    resetCalculator();
                    updateDisplay();
                } else if (key === '%') {
                    handleOperator('%');
                    updateDisplay();
                }
            });
        });