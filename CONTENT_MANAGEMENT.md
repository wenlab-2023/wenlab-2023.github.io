# Content Management Guide

## Dynamic Content Loading System

The WEN Lab website now uses a dynamic content loading system that automatically discovers and loads markdown files from the content directories. This means you can add, remove, or rename files without needing to update any code!

## How It Works

1. **File Discovery**: The system scans the content directories and creates a JSON file listing all markdown files
2. **Dynamic Loading**: JavaScript reads this JSON file and loads all discovered files automatically
3. **No Code Changes**: You never need to update the JavaScript code when adding/removing content

## Content Directories

The system automatically scans these directories:
- `content/news/` - News articles
- `content/events/` - Events and announcements  
- `content/projects/` - Research projects
- `content/people/` - Team member profiles

## Adding New Content

### 1. Create Your Markdown File
Create a new `.md` file in the appropriate content directory with proper YAML front matter:

```markdown
---
title: "Your Title"
date: "2024-01-15"
category: "Research"
image: "assets/media/your-image.jpg"
featured: true
order: 1
---

Your content here...
```

### 2. Update File Listings
Run the update script to regenerate the file listings:

```bash
./update_content.sh
```

### 3. Refresh Your Browser
The new content will automatically appear on the website!

## File Naming

- **News files**: Can be named anything (e.g., `test1.md`, `my-news-article.md`)
- **Event files**: Can be named anything (e.g., `conference-2024.md`, `workshop.md`)
- **Project files**: Can be named anything (e.g., `neural-interfaces.md`, `robotics-project.md`)
- **People files**: Can be named anything (e.g., `john-doe.md`, `jane-smith.md`)

## YAML Front Matter

Each markdown file should start with YAML front matter that defines metadata:

```yaml
---
title: "Article Title"
date: "2024-01-15"
category: "Research"  # For news/projects
type: "Conference"    # For events
location: "Orlando, FL"  # For events
image: "assets/media/image.jpg"
featured: true
order: 1
---
```

## Available Commands

### Update File Listings

**Linux/Mac:**
```bash
./update_content.sh
```

**Windows:**
```cmd
update_content.bat
```

**Or use the interactive menu:**
```cmd
wenlab_website.bat
```

### Generate File Listings Manually

**Linux/Mac:**
```bash
python3 generate_file_list.py
```

**Windows:**
```cmd
python generate_file_list.py
```

### View Current File Listings

**Linux/Mac:**
```bash
cat content/file_listings.json
```

**Windows:**
```cmd
type content\file_listings.json
```

## Benefits

✅ **No Code Changes**: Add/remove files without touching JavaScript
✅ **Flexible Naming**: Name files however you want
✅ **Automatic Discovery**: System finds all markdown files automatically
✅ **Easy Management**: Simple script to update listings
✅ **Future-Proof**: Works with any number of files

## Troubleshooting

### Content Not Appearing?
1. Make sure you ran `./update_content.sh` after adding files
2. Check that your markdown file has proper YAML front matter
3. Refresh your browser (Ctrl+F5)
4. Check browser console for errors

### File Not Found Errors?
1. Verify the file exists in the correct directory
2. Run `./update_content.sh` to regenerate listings
3. Check that the file has a `.md` extension

### Performance Issues?
- The system loads all files at once, so very large numbers of files might slow down initial loading
- Consider using the `order` field to prioritize important content
- Use `featured: true` to highlight key content

## Example Workflow

### Linux/Mac:

1. **Add a new news article**:
   ```bash
   # Create content/news/my-new-article.md
   # Add YAML front matter and content
   ./update_content.sh
   # Refresh browser
   ```

2. **Rename an existing file**:
   ```bash
   # Rename the file
   mv content/news/old-name.md content/news/new-name.md
   ./update_content.sh
   # Refresh browser
   ```

3. **Remove a file**:
   ```bash
   # Delete the file
   rm content/news/unwanted-file.md
   ./update_content.sh
   # Refresh browser
   ```

### Windows:

1. **Add a new news article**:
   ```cmd
   # Create content\news\my-new-article.md
   # Add YAML front matter and content
   update_content.bat
   # Refresh browser
   ```

2. **Rename an existing file**:
   ```cmd
   # Rename the file
   ren content\news\old-name.md new-name.md
   update_content.bat
   # Refresh browser
   ```

3. **Remove a file**:
   ```cmd
   # Delete the file
   del content\news\unwanted-file.md
   update_content.bat
   # Refresh browser
   ```

### Using the Interactive Menu (Windows):

1. **Run the menu**:
   ```cmd
   wenlab_website.bat
   ```

2. **Choose option 1** to update file listings
3. **Choose option 2** to start the development server
4. **Choose option 5** to open the website in your browser

That's it! The system is designed to be as simple and flexible as possible. 🎉 