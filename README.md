# Advanced Calculator App

A modern, responsive calculator application built with vanilla JavaScript, featuring a clean UI, comprehensive functionality, and advanced features including history tracking and memory management with date/time/zone information.

## Features

- ✅ **Basic Operations**: Addition, subtraction, multiplication, division
- ✅ **Advanced Functions**: Square root, square, percentage, sign toggle
- ✅ **Memory Management**: MC (Memory Clear), MR (Memory Recall), M+ (Memory Add), M- (Memory Subtract), MS (Memory Store)
- ✅ **History Tracking**: Complete calculation history with timestamps and timezone information
- ✅ **Persistent Storage**: History and memory data saved in browser localStorage
- ✅ **User-Friendly Interface**: Modern glassmorphism design with smooth animations
- ✅ **Sidebar Panels**: Dedicated History and Memory panels with tabbed interface
- ✅ **Keyboard Support**: Full keyboard navigation and operation
- ✅ **Responsive Design**: Works perfectly on desktop and mobile devices
- ✅ **Error Handling**: Proper handling of edge cases (division by zero, etc.)
- ✅ **Floating Point Precision**: Handles decimal calculations accurately
- ✅ **Docker Support**: Complete containerization with production-ready configuration

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

### Option 3: Docker Deployment
1. **Build and run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```
2. **Access the application** at `http://localhost:3000`

3. **For production with Nginx reverse proxy**:
   ```bash
   docker-compose --profile production up --build
   ```
   Access at `http://localhost:80`

4. **Run in background**:
   ```bash
   docker-compose up -d
   ```

5. **Stop the application**:
   ```bash
   docker-compose down
   ```

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

## Advanced Features

### Memory Management
- **MC (Memory Clear)**: Clears all stored memory values
- **MR (Memory Recall)**: Recalls the last stored memory value to display
- **M+ (Memory Add)**: Adds current display value to the last memory value
- **M- (Memory Subtract)**: Subtracts current display value from the last memory value
- **MS (Memory Store)**: Stores current display value in memory with timestamp

### History Tracking
- **Automatic Logging**: All calculations are automatically logged with timestamps
- **Timezone Support**: Each entry includes date, time, and timezone information
- **Persistent Storage**: History is saved in browser localStorage and persists between sessions
- **Clear History**: Option to clear all calculation history

### Memory Storage
- **Timestamp Tracking**: Each memory entry includes precise date and time
- **Timezone Information**: Automatically detects and stores user's timezone
- **Persistent Storage**: Memory values are saved and restored between sessions
- **Visual Display**: Memory panel shows stored values with timestamps

## Project Structure

```
calculator-app/
├── index.html          # Main HTML file with embedded CSS and JavaScript
├── calculator.js       # Core calculator logic (modular approach)
├── calculator.test.js  # Comprehensive test suite
├── package.json        # Project configuration and dependencies
├── Dockerfile          # Docker container configuration
├── docker-compose.yml  # Docker Compose configuration
├── nginx.conf          # Nginx configuration for production
├── .dockerignore       # Docker build context exclusions
└── README.md          # This file
```

## Technical Details

### Architecture
- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks required)
- **Styling**: Modern CSS with glassmorphism effects and responsive design
- **Logic**: Object-oriented calculator class with comprehensive error handling
- **Testing**: Jest test suite covering all functionality and edge cases
- **Containerization**: Docker support with multi-stage builds and production-ready configuration
- **Deployment**: Docker Compose with optional Nginx reverse proxy for production

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

## Docker Deployment

### Prerequisites
- Docker and Docker Compose installed on your system
- Basic knowledge of Docker commands

### Quick Start with Docker
```bash
# Build and run the application
docker-compose up --build

# Run in detached mode (background)
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Production Deployment
For production deployment with Nginx reverse proxy:

```bash
# Start with production profile
docker-compose --profile production up --build -d

# The application will be available at http://localhost:80
```

### Docker Commands Reference
```bash
# Build only
docker-compose build

# Rebuild without cache
docker-compose build --no-cache

# Scale the application (if needed)
docker-compose up --scale calculator-app=2

# View container status
docker-compose ps

# Execute commands inside container
docker-compose exec calculator-app sh
```

### Docker Configuration Details
- **Base Image**: Node.js 18 Alpine (lightweight and secure)
- **Port**: 3000 (configurable in docker-compose.yml)
- **Health Checks**: Built-in health monitoring
- **Production Ready**: Optimized build with serve static files
- **Nginx Integration**: Optional reverse proxy for production

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
