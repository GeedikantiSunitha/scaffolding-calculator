# Calculator App

A modern, responsive calculator application built with vanilla JavaScript, featuring a clean UI and comprehensive functionality.

## Features

- ✅ **Basic Operations**: Addition, subtraction, multiplication, division
- ✅ **Advanced Functions**: Square root, square, percentage, sign toggle
- ✅ **User-Friendly Interface**: Modern glassmorphism design with smooth animations
- ✅ **Keyboard Support**: Full keyboard navigation and operation
- ✅ **Responsive Design**: Works perfectly on desktop and mobile devices
- ✅ **Error Handling**: Proper handling of edge cases (division by zero, etc.)
- ✅ **Calculation History**: Keeps track of previous calculations
- ✅ **Floating Point Precision**: Handles decimal calculations accurately

## Quick Start

### Option 1: Direct HTML (Recommended for quick testing)
1. Simply open `index.html` in your web browser
2. Start calculating immediately!

### Option 2: Development Setup
1. **Clone or download** this project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** and navigate to the provided local URL

## Usage

### Mouse/Touch Controls
- Click number buttons to input values
- Click operator buttons (+, -, ×, ÷) to set operations
- Click "=" to calculate the result
- Click "C" to clear everything
- Click "⌫" to delete the last entered digit

### Keyboard Shortcuts
- **Numbers (0-9)**: Input digits
- **Operators**: `+`, `-`, `*`, `/` for arithmetic operations
- **Enter** or `=`: Calculate result
- **Escape** or `C`: Clear calculator
- **Backspace**: Delete last digit
- **Decimal Point**: `.` for decimal numbers

## Project Structure

```
calculator-app/
├── index.html          # Main HTML file with embedded CSS and JavaScript
├── calculator.js       # Core calculator logic (modular approach)
├── calculator.test.js  # Comprehensive test suite
├── package.json        # Project configuration and dependencies
└── README.md          # This file
```

## Technical Details

### Architecture
- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks required)
- **Styling**: Modern CSS with glassmorphism effects and responsive design
- **Logic**: Object-oriented calculator class with comprehensive error handling
- **Testing**: Jest test suite covering all functionality and edge cases

### Key Features
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Glassmorphism UI**: Modern frosted glass effect with backdrop blur
- **Smooth Animations**: Hover effects and button press animations
- **Accessibility**: Keyboard navigation and clear visual feedback
- **Error Prevention**: Input validation and edge case handling

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization

### Styling
The calculator uses CSS custom properties (variables) that can be easily customized:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #e74c3c;
  --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --button-radius: 10px;
  --font-size: 1.5rem;
}
```

### Adding Features
The modular `Calculator` class in `calculator.js` makes it easy to add new functions:

```javascript
// Example: Add a new function
Calculator.prototype.factorial = function() {
  const value = parseInt(this.currentInput);
  if (value < 0) throw new Error('Cannot calculate factorial of negative number!');
  let result = 1;
  for (let i = 2; i <= value; i++) {
    result *= i;
  }
  this.currentInput = result.toString();
  this.shouldResetDisplay = true;
  return this.currentInput;
};
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the package.json file for details.

## Acknowledgments

- Inspired by modern calculator designs and glassmorphism UI trends
- Built with accessibility and user experience in mind
- Comprehensive test coverage ensures reliability

---

**Enjoy calculating!** 🧮✨
