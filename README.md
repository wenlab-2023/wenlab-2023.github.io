# WEN Lab Website

The official website for the Wearable Engineering and Neural Interface Laboratory (WEN Lab) at the University of Central Florida.

## 🏠 About

This is a static HTML website built with modern web technologies. The website showcases our research, team members, publications, and latest news in the field of wearable robotics and neural interfaces.

## 🚀 Quick Start

### Prerequisites
- Python 3.7+ (for local development server)
- Modern web browser

### Local Development
1. **Clone the repository**
   ```bash
   git clone https://github.com/wenlab-2023/wenlab-2023.github.io.git
   cd wenlab-2023.github.io
   ```

2. **Start local server**
   ```bash
   python -m http.server 8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

## 📁 Project Structure

```
wenlab-2023.github.io/
├── index.html              # Homepage
├── about.html              # About Us page
├── people.html             # Team members page
├── projects.html           # Research projects page
├── publications.html       # Publications page
├── news.html               # News page
├── events.html             # Events page
├── contact.html            # Contact page
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript
├── content-loader.js       # Content loading system
├── markdown-parser.js      # Markdown parsing
├── content/                # Content files (Markdown)
│   ├── people/             # Team member profiles
│   ├── news/               # News articles
│   ├── projects/           # Research projects
│   ├── events/             # Events
│   ├── home.md             # Homepage content
│   ├── about.md            # About page content
│   └── publications.bib    # Publications (BibTeX)
├── assets/                 # Static assets
│   └── media/              # Images and media files
└── tutorials/              # Documentation and guides
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Dynamic content loading and interactions
- **Markdown**: Content management
- **BibTeX**: Publication management

## 📝 Content Management

### Adding New Content
- **Team Members**: See [Adding Team Members](tutorials/adding-team-members.md)
- **News Articles**: See [Creating News](tutorials/creating-news.md)
- **Research Projects**: See [Creating Projects](tutorials/creating-projects.md)
- **Publications**: See [Adding Publications](tutorials/adding-publications.md)

### Content Guidelines
- Use Markdown for content files
- Optimize images before uploading (max 1MB)
- Follow naming conventions for files
- Test locally before deploying

## 🎨 Customization

### Styling
- Edit `styles.css` for visual changes
- Use CSS custom properties for colors and fonts
- Responsive design with mobile-first approach

### Functionality
- Modify `script.js` for JavaScript functionality
- Update `content-loader.js` for content loading logic
- Customize `markdown-parser.js` for Markdown processing

## 📱 Features

- **Responsive Design**: Works on all devices
- **Dynamic Content Loading**: Content loaded from Markdown files
- **Publication Management**: BibTeX integration
- **Image Optimization**: Automatic image scaling
- **SEO Friendly**: Semantic HTML and meta tags
- **Fast Loading**: Optimized for performance

## 🔧 Development

### Local Development
1. Start local server: `python -m http.server 8000`
2. Make changes to files
3. Refresh browser to see changes
4. Test on different devices and browsers

### Debugging
- Use browser Developer Tools (F12)
- Check Console tab for JavaScript errors
- Use Network tab to monitor file loading
- See [Troubleshooting Guide](tutorials/troubleshooting.md)

## 📚 Documentation

Comprehensive documentation is available in the `tutorials/` folder:

- [Website Setup](tutorials/website-setup.md) - Development environment setup
- [Adding Team Members](tutorials/adding-team-members.md) - Team management
- [Creating News](tutorials/creating-news.md) - News article creation
- [Creating Projects](tutorials/creating-projects.md) - Project management
- [Adding Publications](tutorials/adding-publications.md) - Publication management
- [Troubleshooting](tutorials/troubleshooting.md) - Common issues and solutions

## 🌐 Deployment

### GitHub Pages
This repository is configured for GitHub Pages deployment. The website will be automatically deployed when changes are pushed to the main branch.

### Manual Deployment
1. Upload all files to your web server
2. Ensure all file paths are correct
3. Test all functionality
4. Update DNS if necessary

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:
- Check the [Troubleshooting Guide](tutorials/troubleshooting.md)
- Review the tutorials in the `tutorials/` folder
- Contact the website administrator

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- University of Central Florida
- WEN Lab team members
- Open source community

---

*Last updated: July 2024*
