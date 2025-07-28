# Website Setup Guide

This guide will help you set up the WEN Lab website development environment and run it locally.

## 📋 Prerequisites

- **Python 3.7+** installed on your system
- **Text editor** (VS Code, Sublime Text, Atom, etc.)
- **Web browser** (Chrome, Firefox, Safari, Edge)
- **Git** (optional, for version control)

## 🚀 Quick Start

### Step 1: Download/Clone the Website

#### Option A: Download ZIP
1. Download the website files as a ZIP archive
2. Extract to a folder on your computer
3. Navigate to the extracted folder

#### Option B: Clone with Git (Recommended)
```bash
git clone https://github.com/wenlab-2023/wenlab-2023.github.io.git
cd wenlab-2023.github.io
```

### Step 2: Verify File Structure

Ensure you have the following structure:
```
wenlab-2023.github.io/
├── index.html
├── styles.css
├── script.js
├── content-loader.js
├── markdown-parser.js
├── content/
│   ├── people/
│   ├── news/
│   ├── projects/
│   ├── events/
│   ├── home.md
│   ├── about.md
│   └── publications.bib
├── assets/
│   └── media/
└── tutorials/
```

### Step 3: Start Local Server

#### Using Python (Recommended)
```bash
# Navigate to website directory
cd wenlab-2023.github.io

# Start Python server
python -m http.server 8000

# Or if you have Python 3 specifically
python3 -m http.server 8000
```

#### Alternative: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 8000
```

### Step 4: Access Website

1. Open your web browser
2. Go to: `http://localhost:8000`
3. You should see the WEN Lab website

## 🔧 Development Environment Setup

### Recommended Tools

#### Text Editor: Visual Studio Code
1. **Download**: [code.visualstudio.com](https://code.visualstudio.com)
2. **Install Extensions**:
   - **Markdown All in One**: For Markdown editing
   - **Live Server**: For automatic reloading (alternative to Python server)
   - **HTML CSS Support**: For HTML/CSS development
   - **JavaScript (ES6) code snippets**: For JavaScript development

#### Browser: Chrome with DevTools
1. **Download**: [google.com/chrome](https://google.com/chrome)
2. **Developer Tools**: Press `F12` to open
3. **Responsive Design Mode**: Test mobile layouts

### File Organization

#### Core Files
- **`index.html`**: Homepage
- **`styles.css`**: All website styling
- **`script.js`**: Main JavaScript functionality
- **`content-loader.js`**: Content loading and parsing
- **`markdown-parser.js`**: Markdown to HTML conversion

#### Content Files
- **`content/people/`**: Team member information
- **`content/news/`**: News articles
- **`content/projects/`**: Research projects
- **`content/events/`**: Events and activities
- **`content/publications.bib`**: Publications in BibTeX format

#### Assets
- **`assets/media/`**: Main images and media files
- **`assets/media/avatars/`**: Team member profile pictures
- **`assets/media/posts/`**: News article images
- **`tutorials/`**: This documentation

## 🛠️ Development Workflow

### Making Changes

1. **Edit Files**: Use your text editor to modify files
2. **Save Changes**: Save the files you've edited
3. **Refresh Browser**: Press `Ctrl+F5` (hard refresh) to see changes
4. **Test**: Verify changes work as expected

### Content Updates

1. **Add New Content**: Create new Markdown files in appropriate folders
2. **Update Images**: Add images to `assets/media/`
3. **Test Locally**: Verify content appears correctly
4. **Deploy**: Upload changes to web server

### Code Changes

1. **Edit HTML/CSS/JS**: Modify core files as needed
2. **Test Functionality**: Check all features work
3. **Cross-browser Test**: Test in different browsers
4. **Mobile Test**: Test on mobile devices

## 🔍 Debugging Setup

### Browser Developer Tools

#### Chrome DevTools
1. **Open**: Press `F12` or right-click → Inspect
2. **Console**: Check for JavaScript errors
3. **Network**: Monitor file loading
4. **Elements**: Inspect HTML structure
5. **Sources**: Debug JavaScript code

#### Firefox Developer Tools
1. **Open**: Press `F12` or right-click → Inspect Element
2. **Console**: View JavaScript errors
3. **Network**: Monitor network requests
4. **Inspector**: Examine HTML and CSS

### Common Debugging Commands

```javascript
// Add to browser console for debugging
console.log('Debug message');
console.error('Error message');
console.warn('Warning message');

// Check if content loader is available
console.log('Content loader:', window.contentLoader);

// Check if markdown parser is available
console.log('Markdown parser:', window.markdownParser);
```

## 📱 Mobile Testing

### Browser Responsive Mode
1. **Open DevTools**: Press `F12`
2. **Toggle Device Toolbar**: Click mobile icon or press `Ctrl+Shift+M`
3. **Select Device**: Choose mobile device from dropdown
4. **Test Interactions**: Test touch interactions and layout

### Physical Device Testing
1. **Find Your IP**: Run `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. **Use IP Address**: Access `http://YOUR_IP:8000` on mobile device
3. **Same Network**: Ensure device is on same WiFi network
4. **Test Features**: Test all website features on mobile

## 🚨 Common Setup Issues

### Issue: "python: command not found"
**Solution**:
```bash
# Install Python
# Windows: Download from python.org
# macOS: brew install python
# Linux: sudo apt-get install python3

# Verify installation
python --version
# or
python3 --version
```

### Issue: "Port 8000 already in use"
**Solution**:
```bash
# Use different port
python -m http.server 8080

# Or kill process using port 8000
# Windows: netstat -ano | findstr :8000
# macOS/Linux: lsof -ti:8000 | xargs kill
```

### Issue: "CORS errors" in browser
**Solution**:
1. **Use local server**: Don't open HTML files directly
2. **Check URL**: Use `http://localhost:8000` not `file://`
3. **Clear cache**: Hard refresh with `Ctrl+F5`

### Issue: "File not found" errors
**Solution**:
1. **Check directory**: Ensure you're in correct folder
2. **File paths**: Verify file paths are correct
3. **File permissions**: Check file permissions
4. **Case sensitivity**: File paths are case-sensitive

## 🔄 Version Control (Optional)

### Git Setup
```bash
# Initialize Git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial website setup"

# Add remote repository (if using GitHub)
git remote add origin https://github.com/username/repository.git
git push -u origin main
```

### Git Workflow
```bash
# Make changes to files
# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to remote
git push
```

## 📊 Performance Monitoring

### Page Load Speed
1. **Chrome DevTools**: Network tab shows load times
2. **Lighthouse**: Built-in performance audit tool
3. **PageSpeed Insights**: Online performance testing

### File Size Optimization
1. **Images**: Compress images before uploading
2. **CSS/JS**: Minify files for production
3. **Caching**: Use browser caching for static files

## 🔒 Security Considerations

### Development vs Production
- **Development**: Use local server for testing
- **Production**: Use proper web server with HTTPS
- **Content**: Don't include sensitive information in content files

### File Permissions
```bash
# Set appropriate permissions
chmod 644 *.html *.css *.js
chmod 755 content/ assets/
```

## 📚 Additional Resources

### Documentation
- **HTML**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS**: [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript**: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Markdown**: [Markdown Guide](https://www.markdownguide.org/)

### Tools
- **Image Optimization**: [TinyPNG](https://tinypng.com/)
- **Code Validation**: [W3C Validator](https://validator.w3.org/)
- **Browser Testing**: [BrowserStack](https://www.browserstack.com/)

## ✅ Setup Checklist

Before starting development:

- [ ] Python 3.7+ installed
- [ ] Text editor configured
- [ ] Website files downloaded/cloned
- [ ] Local server running
- [ ] Website accessible at `http://localhost:8000`
- [ ] Browser developer tools working
- [ ] Mobile testing setup
- [ ] Git repository initialized (optional)

## 🆘 Getting Help

### Common Issues:
1. **Check this guide**: Look for similar issues
2. **Browser console**: Check for error messages
3. **File structure**: Verify all files are in correct locations
4. **Server status**: Ensure local server is running

### Support:
- **Documentation**: Check tutorials folder
- **Troubleshooting**: See [troubleshooting.md](troubleshooting.md)
- **Technical Issues**: Contact website administrator

---

*This setup guide covers the essential steps to get started with the WEN Lab website. For specific issues, refer to the [Troubleshooting Guide](troubleshooting.md).* 