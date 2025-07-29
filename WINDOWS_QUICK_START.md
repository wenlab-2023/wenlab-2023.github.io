# Windows Quick Start Guide

## 🚀 Getting Started on Windows

### Prerequisites
1. **Python**: Download and install from [python.org](https://python.org)
2. **Make sure Python is in PATH** during installation

### Quick Commands

#### Simple Update (Recommended)
```cmd
update_content.bat
```

#### Interactive Menu (Full Features)
```cmd
wenlab_website.bat
```

#### Manual Commands
```cmd
# Update file listings
python generate_file_list.py

# Start development server
python -m http.server 8000

# View current files
type content\file_listings.json
```

## 📁 File Management

### Adding New Content
1. Create `.md` file in appropriate folder:
   - `content\news\` for news articles
   - `content\events\` for events
   - `content\projects\` for projects
   - `content\people\` for team members

2. Add YAML front matter:
   ```yaml
   ---
   title: "Your Title"
   date: "2024-01-15"
   category: "Research"
   order: 1
   ---
   ```

3. Update listings:
   ```cmd
   update_content.bat
   ```

### Renaming Files
```cmd
ren content\news\old-name.md new-name.md
update_content.bat
```

### Deleting Files
```cmd
del content\news\unwanted-file.md
update_content.bat
```

## 🌐 Viewing Your Website

### Start Development Server
```cmd
wenlab_website.bat
# Choose option 2, then option 5
```

### Or Manual Method
```cmd
python -m http.server 8000
# Open browser to http://localhost:8000
```

## 🛠️ Troubleshooting

### Python Not Found
- Download Python from [python.org](https://python.org)
- Make sure to check "Add Python to PATH" during installation
- Restart Command Prompt after installation

### Files Not Appearing
1. Run `update_content.bat`
2. Refresh browser (Ctrl+F5)
3. Check browser console for errors

### Server Won't Start
- Make sure no other application is using port 8000
- Try a different port: `python -m http.server 8080`

## 📋 Common Workflows

### Daily Editing
```cmd
# 1. Start the interactive menu
wenlab_website.bat

# 2. Choose option 2 (start server)
# 3. Choose option 5 (open browser)
# 4. Edit your files
# 5. Choose option 1 (update listings)
# 6. Refresh browser
```

### Quick Content Update
```cmd
# 1. Edit your .md files
# 2. Run update
update_content.bat
# 3. Refresh browser
```

### New Project Setup
```cmd
# 1. Clone/download the website files
# 2. Open Command Prompt in the folder
# 3. Run the interactive menu
wenlab_website.bat
# 4. Choose option 4 to check Python
# 5. Choose option 1 to generate initial listings
# 6. Choose option 2 to start server
```

## 🎯 Tips for Windows Users

- **Use the interactive menu** (`wenlab_website.bat`) for easiest experience
- **Keep Command Prompt open** while editing (don't close the server)
- **Use Ctrl+F5** to hard refresh browser and clear cache
- **File paths use backslashes** (`\`) in Windows commands
- **Check file extensions** - make sure files end with `.md`

## 📞 Need Help?

1. Check the main documentation: `CONTENT_MANAGEMENT.md`
2. Verify Python installation: `python --version`
3. Check file listings: `type content\file_listings.json`
4. Look for error messages in Command Prompt

Happy editing! 🎉 