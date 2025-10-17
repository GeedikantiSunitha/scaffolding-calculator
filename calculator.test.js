/**
 * Calculator Test Suite
 * Tests all calculator functionality
 */

const Calculator = require('./calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Basic Operations', () => {
    test('should initialize with zero', () => {
      expect(calculator.getCurrentInput()).toBe('0');
    });

    test('should append digits correctly', () => {
      calculator.appendToDisplay('1');
      calculator.appendToDisplay('2');
      calculator.appendToDisplay('3');
      expect(calculator.getCurrentInput()).toBe('123');
    });

    test('should handle decimal points', () => {
      calculator.appendToDisplay('1');
      calculator.appendToDisplay('.');
      calculator.appendToDisplay('5');
      expect(calculator.getCurrentInput()).toBe('1.5');
    });

    test('should prevent multiple decimal points', () => {
      calculator.appendToDisplay('1');
      calculator.appendToDisplay('.');
      calculator.appendToDisplay('5');
      calculator.appendToDisplay('.');
      expect(calculator.getCurrentInput()).toBe('1.5');
    });

    test('should clear display', () => {
      calculator.appendToDisplay('123');
      calculator.clear();
      expect(calculator.getCurrentInput()).toBe('0');
    });

    test('should delete last character', () => {
      calculator.appendToDisplay('123');
      calculator.deleteLast();
      expect(calculator.getCurrentInput()).toBe('12');
    });

    test('should handle delete on single digit', () => {
      calculator.appendToDisplay('5');
      calculator.deleteLast();
      expect(calculator.getCurrentInput()).toBe('0');
    });
  });

  describe('Arithmetic Operations', () => {
    test('should perform addition', () => {
      calculator.appendToDisplay('2');
      calculator.setOperator('+');
      calculator.appendToDisplay('3');
      calculator.calculate();
      expect(calculator.getCurrentInput()).toBe('5');
    });

    test('should perform subtraction', () => {
      calculator.appendToDisplay('5');
      calculator.setOperator('-');
      calculator.appendToDisplay('3');
      calculator.calculate();
      expect(calculator.getCurrentInput()).toBe('2');
    });

    test('should perform multiplication', () => {
      calculator.appendToDisplay('4');
      calculator.setOperator('*');
      calculator.appendToDisplay('3');
      calculator.calculate();
      expect(calculator.getCurrentInput()).toBe('12');
    });

    test('should perform division', () => {
      calculator.appendToDisplay('12');
      calculator.setOperator('/');
      calculator.appendToDisplay('3');
      calculator.calculate();
      expect(calculator.getCurrentInput()).toBe('4');
    });

    test('should handle division by zero', () => {
      calculator.appendToDisplay('5');
      calculator.setOperator('/');
      calculator.appendToDisplay('0');
      expect(() => calculator.calculate()).toThrow('Cannot divide by zero!');
    });

    test('should handle chained operations', () => {
      calculator.appendToDisplay('2');
      calculator.setOperator('+');
      calculator.appendToDisplay('3');
      calculator.setOperator('*');
      calculator.appendToDisplay('4');
      calculator.calculate();
      expect(calculator.getCurrentInput()).toBe('20'); // (2+3)*4 = 20
    });
  });

  describe('Advanced Operations', () => {
    test('should calculate percentage', () => {
      calculator.appendToDisplay('50');
      calculator.percentage();
      expect(calculator.getCurrentInput()).toBe('0.5');
    });

    test('should toggle sign', () => {
      calculator.appendToDisplay('5');
      calculator.toggleSign();
      expect(calculator.getCurrentInput()).toBe('-5');
      
      calculator.toggleSign();
      expect(calculator.getCurrentInput()).toBe('5');
    });

    test('should calculate square root', () => {
      calculator.appendToDisplay('16');
      calculator.squareRoot();
      expect(calculator.getCurrentInput()).toBe('4');
    });

    test('should handle negative square root', () => {
      calculator.appendToDisplay('-16');
      expect(() => calculator.squareRoot()).toThrow('Cannot calculate square root of negative number!');
    });

    test('should calculate square', () => {
      calculator.appendToDisplay('4');
      calculator.square();
      expect(calculator.getCurrentInput()).toBe('16');
    });
  });

  describe('History', () => {
    test('should store calculation history', () => {
      calculator.appendToDisplay('2');
      calculator.setOperator('+');
      calculator.appendToDisplay('3');
      calculator.calculate();
      
      const history = calculator.getHistory();
      expect(history).toHaveLength(1);
      expect(history[0].expression).toBe('2 + 3');
      expect(history[0].result).toBe(5);
    });

    test('should clear history', () => {
      calculator.appendToDisplay('1');
      calculator.setOperator('+');
      calculator.appendToDisplay('1');
      calculator.calculate();
      
      calculator.clearHistory();
      expect(calculator.getHistory()).toHaveLength(0);
    });
  });

  describe('Edge Cases', () => {
    test('should handle very large numbers', () => {
      calculator.appendToDisplay('999999999');
      calculator.setOperator('*');
      calculator.appendToDisplay('999999999');
      calculator.calculate();
      expect(calculator.getCurrentInput()).toMatch(/1e\+18/);
    });

    test('should handle very small numbers', () => {
      calculator.appendToDisplay('0.000001');
      calculator.setOperator('/');
      calculator.appendToDisplay('1000000');
      calculator.calculate();
      expect(calculator.getCurrentInput()).toBe('1e-12');
    });

    test('should handle floating point precision', () => {
      calculator.appendToDisplay('0.1');
      calculator.setOperator('+');
      calculator.appendToDisplay('0.2');
      calculator.calculate();
      expect(calculator.getCurrentInput()).toBe('0.3');
    });
  });
});
