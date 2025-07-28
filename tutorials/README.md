# WEN Lab Website Tutorials

Welcome to the WEN Lab website tutorials! This folder contains comprehensive guides on how to edit and maintain your website.

## 📚 Available Tutorials

### 🏠 **Homepage Management**
- [Homepage Editing Guide](homepage-editing.md) - How to modify the homepage content and slideshow

### 👥 **People Page Management**
- [Adding New Team Members](adding-team-members.md) - Step-by-step guide to add new people

### 📰 **News Management**
- [Creating News Articles](creating-news.md) - Template and examples for news content

### 📅 **Events Management**
- Events are managed through `content/events/` folder with individual `.md` files

### 🔬 **Projects Management**
- [Creating Projects](creating-projects.md) - Template and examples for project content

### 📚 **Publications Management**
- [Adding Publications](adding-publications.md) - How to add new publications to the BibTeX file

### ℹ️ **About Us Page**
- Edit `content/about.md` directly

### 📞 **Contact Page**
- Edit `content/contact-intro.md` for contact page content
- Contact information is hardcoded in `contact.html`

### 🎨 **Styling and Design**
- Edit `styles.css` for visual customization
- Images are organized in `assets/media/` folders

### 🛠️ **Technical Maintenance**
- [Website Setup](website-setup.md) - How to set up the development environment
- [Troubleshooting](troubleshooting.md) - Common issues and solutions

## 🚀 Quick Start

1. **For adding new content**: Start with the specific content type guide (e.g., [Adding Team Members](adding-team-members.md))
2. **For editing existing content**: Edit the corresponding `.md` files directly
3. **For technical issues**: Check [Troubleshooting](troubleshooting.md)

## 📁 File Structure Overview

```
tutorials/
├── README.md                    # This file
├── homepage-editing.md          # Homepage content editing
├── adding-team-members.md       # Adding new team members
├── creating-news.md             # Creating news articles
├── creating-projects.md         # Creating projects
├── adding-publications.md       # Adding publications
├── website-setup.md             # Development setup
└── troubleshooting.md           # Common issues
```

## 🗂️ Website File Structure (Updated July 2024)

The website has been cleaned up to remove unused legacy files. Current structure:

```
content/
├── home.md                    # Homepage content
├── about.md                   # About page content
├── contact-intro.md           # Contact page intro
├── people/                    # Team member files
├── news/                      # News articles
├── projects/                  # Research projects
├── events/                    # Events
├── publications.bib           # Publications database
└── people.md                  # People page index

assets/
├── media/                     # Main images
├── media/avatars/             # Team profile pictures
├── media/posts/               # News article images
└── js/                        # JavaScript files
```

## 💡 Tips for Success

- **Always backup** your content before making major changes
- **Test changes** on your local server before deploying
- **Use consistent formatting** in Markdown files
- **Optimize images** before uploading (recommended: max 1MB per image)
- **Follow naming conventions** for files (lowercase, hyphens for spaces)
- **Use correct image folders**: `assets/media/avatars/` for team photos, `assets/media/posts/` for news images

## 🔧 Need Help?

If you encounter issues not covered in these tutorials:
1. Check the [Troubleshooting](troubleshooting.md) guide
2. Review the [CONTENT_GUIDE.md](../CONTENT_GUIDE.md) in the main directory
3. Check browser console for JavaScript errors (F12 → Console)

---

*Last updated: July 2024 - Updated to reflect cleaned file structure* 