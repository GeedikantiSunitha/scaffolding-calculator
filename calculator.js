/**
 * Calculator Logic Module
 * Handles all mathematical operations and state management
 */

class Calculator {
  constructor() {
    this.currentInput = '0';
    this.operator = null;
    this.previousInput = null;
    this.shouldResetDisplay = false;
    this.history = [];
  }

  /**
   * Appends a digit or decimal point to the current input
   * @param {string} value - The value to append
   */
  appendToDisplay(value) {
    if (this.shouldResetDisplay) {
      this.currentInput = '';
      this.shouldResetDisplay = false;
    }

    // Prevent multiple decimal points
    if (value === '.' && this.currentInput.includes('.')) {
      return;
    }

    // Handle leading zero
    if (this.currentInput === '0' && value !== '.') {
      this.currentInput = value;
    } else {
      this.currentInput += value;
    }

    return this.currentInput;
  }

  /**
   * Sets the operator for the calculation
   * @param {string} op - The operator (+, -, *, /)
   */
  setOperator(op) {
    // If there's already an operator and previous input, calculate first
    if (this.operator && this.previousInput !== null) {
      this.calculate();
    }
    
    this.operator = op;
    this.previousInput = this.currentInput;
    this.shouldResetDisplay = true;
  }

  /**
   * Performs the calculation
   */
  calculate() {
    if (this.operator && this.previousInput !== null) {
      const prev = parseFloat(this.previousInput);
      const current = parseFloat(this.currentInput);
      let result;

      switch (this.operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          if (current === 0) {
            throw new Error('Cannot divide by zero!');
          }
          result = prev / current;
          break;
        default:
          return;
      }

      // Store calculation in history
      this.history.push({
        expression: `${this.previousInput} ${this.operator} ${this.currentInput}`,
        result: result
      });

      this.currentInput = this.formatResult(result);
      this.operator = null;
      this.previousInput = null;
      this.shouldResetDisplay = true;
    }

    return this.currentInput;
  }

  /**
   * Formats the result to avoid floating point precision issues
   * @param {number} result - The calculation result
   * @returns {string} - Formatted result string
   */
  formatResult(result) {
    // Handle very large or very small numbers
    if (Math.abs(result) > 1e10 || (Math.abs(result) < 1e-6 && result !== 0)) {
      // Use more precise scientific notation formatting
      return result.toExponential(6).replace(/\.?0+e/, 'e');
    }
    
    // Round to avoid floating point precision issues
    return parseFloat(result.toPrecision(12)).toString();
  }

  /**
   * Clears the calculator
   */
  clear() {
    this.currentInput = '0';
    this.operator = null;
    this.previousInput = null;
    this.shouldResetDisplay = false;
    return this.currentInput;
  }

  /**
   * Deletes the last character from current input
   */
  deleteLast() {
    if (this.currentInput.length > 1) {
      this.currentInput = this.currentInput.slice(0, -1);
    } else {
      this.currentInput = '0';
    }
    return this.currentInput;
  }

  /**
   * Gets the current display value
   */
  getCurrentInput() {
    return this.currentInput;
  }

  /**
   * Gets the calculation history
   */
  getHistory() {
    return this.history;
  }

  /**
   * Clears the calculation history
   */
  clearHistory() {
    this.history = [];
  }

  /**
   * Calculates percentage
   */
  percentage() {
    const value = parseFloat(this.currentInput);
    this.currentInput = (value / 100).toString();
    this.shouldResetDisplay = true;
    return this.currentInput;
  }

  /**
   * Toggles the sign of the current input
   */
  toggleSign() {
    if (this.currentInput !== '0') {
      this.currentInput = this.currentInput.startsWith('-') 
        ? this.currentInput.slice(1) 
        : '-' + this.currentInput;
    }
    return this.currentInput;
  }

  /**
   * Calculates square root
   */
  squareRoot() {
    const value = parseFloat(this.currentInput);
    if (value < 0) {
      throw new Error('Cannot calculate square root of negative number!');
    }
    this.currentInput = Math.sqrt(value).toString();
    this.shouldResetDisplay = true;
    return this.currentInput;
  }

  /**
   * Calculates square
   */
  square() {
    const value = parseFloat(this.currentInput);
    this.currentInput = (value * value).toString();
    this.shouldResetDisplay = true;
    return this.currentInput;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculator;
}
