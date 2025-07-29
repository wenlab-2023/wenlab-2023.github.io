# 🖼️ Dynamic Homepage Slideshow Guide

## ✅ System Status: FULLY OPERATIONAL

The WEN Lab website now has a **dynamic homepage slideshow** that automatically discovers and displays all images from the `assets/media/slideshow_home/` directory. **No code changes are needed** when adding, removing, or renaming slideshow images!

## 🔧 How It Works

### 1. Image Discovery
```python
# generate_slideshow_list.py scans the slideshow directory
slideshow_dir = 'assets/media/slideshow_home'
# Supports: .jpg, .jpeg, .png, .gif, .webp (case insensitive)
```

### 2. Dynamic Loading
```javascript
// Loads slideshow_images.json and creates slides dynamically
const response = await fetch('content/slideshow_images.json');
const slideshowData = await response.json();
```

### 3. Automatic Updates
```bash
# Linux/Mac
./update_content.sh

# Windows
update_content.bat
```

## 📁 Adding New Slideshow Images

### Step 1: Add Your Images
Place any image files in the `assets/media/slideshow_home/` directory:
- **Supported formats**: JPG, JPEG, PNG, GIF, WEBP
- **Case insensitive**: Works with both `.jpg` and `.JPG`
- **Any filename**: Name your files however you want

### Step 2: Update the Slideshow
```bash
# Linux/Mac
./update_content.sh

# Windows
update_content.bat
```

### Step 3: Refresh Your Browser
The new images will automatically appear in the slideshow!

## 📋 Example Workflow

### Adding New Images
```bash
# 1. Copy your images to the slideshow directory
cp my-new-image.jpg assets/media/slideshow_home/

# 2. Update the slideshow
./update_content.sh

# 3. Refresh browser (Ctrl+F5)
```

### Renaming Images
```bash
# 1. Rename the file
mv assets/media/slideshow_home/old-name.jpg assets/media/slideshow_home/new-name.jpg

# 2. Update the slideshow
./update_content.sh

# 3. Refresh browser
```

### Removing Images
```bash
# 1. Delete the file
rm assets/media/slideshow_home/unwanted-image.jpg

# 2. Update the slideshow
./update_content.sh

# 3. Refresh browser
```

## 🎯 Features

### ✅ Automatic Discovery
- Finds all image files in the slideshow directory
- Works with any filename or naming convention
- No configuration needed

### ✅ Dynamic Navigation
- Navigation arrows (← →) automatically adapt to image count
- Dot indicators automatically adjust to image count
- Auto-advance functionality works with any number of images

### ✅ Responsive Design
- Images automatically scale to fit the slideshow container
- Works on all screen sizes
- Maintains aspect ratio

### ✅ Error Handling
- Gracefully handles missing images
- Continues working even if some images fail to load
- Provides helpful console messages

## 📊 Current Slideshow Status

### Images Found: 3
1. `assets/media/slideshow_home/h1.jpg`
2. `assets/media/slideshow_home/h2.jpg`
3. `assets/media/slideshow_home/h3.jpg`

### Slideshow Configuration
- **Auto-advance**: Every 5 seconds
- **Navigation**: Arrow keys and dot indicators
- **Transition**: Fade effect
- **Responsive**: Adapts to screen size

## 🛠️ Customization

### Changing Image Order
Images are displayed in alphabetical order. To change the order:
1. Rename files with numeric prefixes: `01-first.jpg`, `02-second.jpg`, etc.
2. Run `./update_content.sh`
3. Refresh browser

### Custom Titles and Descriptions
Edit `content/slideshow_images.json` to customize:
```json
[
  {
    "image": "assets/media/slideshow_home/my-image.jpg",
    "alt": "Custom Alt Text",
    "title": "Custom Title",
    "description": "Custom Description"
  }
]
```

### Slideshow Timing
To change auto-advance timing, edit `script.js`:
```javascript
slideshowInterval = setInterval(function() {
    changeSlide(1);
}, 5000); // Change 5000 to desired milliseconds
```

## 📚 Integration with Content Management

The slideshow system is fully integrated with the existing content management workflow:

### Combined Updates
```bash
# Updates both content files AND slideshow images
./update_content.sh
```

### Windows Support
```cmd
# Use the interactive menu
wenlab_website.bat
# Choose option 1 to update everything
```

### Documentation
- **`CONTENT_MANAGEMENT.md`** - General content management
- **`SLIDESHOW_GUIDE.md`** - This slideshow guide
- **`WINDOWS_QUICK_START.md`** - Windows-specific instructions

## 🎉 Benefits

✅ **No Code Changes**: Add/remove images without touching HTML/JavaScript
✅ **Flexible Naming**: Name images however you want
✅ **Automatic Discovery**: System finds all images automatically
✅ **Cross-Platform**: Works on Linux, Mac, and Windows
✅ **Integrated Workflow**: Same update process as other content
✅ **Future-Proof**: Works with any number of images

## 🚀 Quick Start

1. **Add images** to `assets/media/slideshow_home/`
2. **Run update**: `./update_content.sh` (Linux/Mac) or `update_content.bat` (Windows)
3. **Refresh browser**: Ctrl+F5 to see changes

That's it! Your homepage slideshow will automatically include all images from the slideshow directory. 🎉

---

*Last Updated: July 29, 2025*
*System Status: ✅ FULLY OPERATIONAL* 