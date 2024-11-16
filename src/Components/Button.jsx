import React, { useEffect, useRef, useCallback } from "react";

const Button = ({ buttonText = "", buttonClasses, setInput, setOutput, output, input, operator, setOperator }) => {
    const buttonRef = useRef();

    const calculateResult = useCallback(() => {
        switch (operator) {
            case "+":
                setOutput(Number(output) + Number(input));
                break;
            case "-":
                setOutput(Number(output) - Number(input));
                break;
            case "x":
                setOutput(Number(output) * Number(input));
                break;
            case "/":
                setOutput(
                    input === output
                        ? "Undefined!"
                        : Number(input) !== 0
                        ? Number(output) / Number(input)
                        : "Error"
                );
                break;
            case "%":
                setOutput(Number(output) % Number(input));
                break;
            default:
                break;
        }
        setInput(""); // Clear input after calculation
    }, [input, operator, output, setInput, setOutput]);

    const onClickHandler = useCallback(() => {
        const value = buttonRef?.current.innerHTML;

        switch (value) {
            case "+":
            case "-":
            case "x":
            case "/":
            case "%":
                if (output === "") {
                    setOutput(input);
                } else {
                    calculateResult();
                }
                setOperator(value); // Store the current operator
                setInput("");
                break;
            case "=":
                if (operator && input) {
                    calculateResult();
                    setOperator(null); // Clear operator after calculation
                }
                break;
            case "AC":
                setInput("");
                setOutput("");
                setOperator(null); // Reset operator state
                break;
            case "DEL":
                setInput((prevInput) => prevInput.slice(0, -1));
                break;
            case ".":
                if (!input.includes(".")) { // Check if input already contains a '.'
                    setInput((prevInput) => prevInput + ".");
                }
                break;
            default:
                setInput((prevInput) => prevInput + value);
                break;
        }
    }, [calculateResult, input, output, setInput, setOutput, setOperator]);

    // Map keyboard keys to button actions
    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;

            const keyMap = {
                "+": "+",
                "-": "-",
                "*": "x",
                "/": "/",
                "%": "%",
                Enter: "=",
                Backspace: "DEL",
                Delete: "AC",
                "0": "0",
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                ".": ".",
            };

            if (keyMap[key]) {
                // Simulate a button click by calling the onClickHandler
                if (buttonText === keyMap[key]) {
                    onClickHandler();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [buttonText, onClickHandler]);

    return (
        <div ref={buttonRef} onClick={onClickHandler} className={buttonClasses}>
            {buttonText}
        </div>
    );
};

export default Button;
