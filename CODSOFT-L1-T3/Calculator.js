document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    const display = document.getElementById("display");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                resetCalculator();
            } else if (value === "=") {
                if (currentInput !== "") {
                    currentInput = evaluateExpression(currentInput);
                    display.textContent = currentInput;
                    currentInput = ""; // Reset current input after evaluation
                }
            } else {
                if (value === "+" || value === "-" || value === "*" || value === "/") {
                    if (currentInput !== "") {
                        currentInput += " " + value + " ";
                        display.textContent = currentInput;
                    }
                } else {
                    currentInput += value;
                    display.textContent = currentInput;
                }
            }
        });
    });

    function evaluateExpression(expression) {
        try {
            return eval(expression);
        } catch (error) {
            return "Error";
        }
    }

    function resetCalculator() {
        currentInput = "";
        display.textContent = "0";
    }
    // Event listener for the clear button
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", resetCalculator);
});
