export default class Calculation {
    constructor(expression) {
        this.expression = expression;
    }

    calculate() {
        // mathematical operators
        let operators = [
           {'*': (a, b) => a * b, '/': (a, b) => a / b},
           {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        expressionLength,
        currentOperator,
        calculateVal = [],
        operatorLength = operators.length,

        input = this.verifyInput()

        expressionLength = input.length

        if (input) {
            // calculates given input
            for (let i = 0; i < operatorLength; i++) {
                for (let j = 0; j < expressionLength; j++) {
                    if (operators[i][input[j]]) {
                        currentOperator = operators[i][input[j]];
                    } else if (currentOperator) {
                        calculateVal[calculateVal.length - 1] = currentOperator(parseFloat(calculateVal[calculateVal.length - 1]),
                                                                                parseFloat(input[j]));
                        currentOperator = null;
                    } else {
                        calculateVal.push(input[j]);
                    }
                }
                input = calculateVal;
                calculateVal = [];
            }
            return input[0]
        }
        return false;
    }

    // verify input format is correct or malformed
    verifyInput () {
        let current = '',
            input = []

        for (let i = 0, ch; ch = this.expression.charAt(i); i++) {
              if ('^*/+-'.indexOf(ch) > -1 && current !== '') {
                  input.push(parseFloat(current), ch);
                  current = '';
              } else if ('^*/+-'.indexOf(ch) === -1) {
                  current += ch;
              } else {
                break
              }
        }
        if (current !== '' && !(/[a-z]/i.test(current))) {
            input.push(parseFloat(current));
            return input
        }
        return false;
    }
}
