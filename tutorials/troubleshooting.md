# Troubleshooting Guide

This guide provides solutions to common issues you may encounter while managing the WEN Lab website.

## 🚨 Common Issues

### Content Not Appearing

#### Issue: New content not showing on website
**Symptoms**: Added new Markdown file but content doesn't appear
**Solutions**:
1. **Check file location**: Ensure file is in correct folder (`content/people/`, `content/news/`, etc.)
2. **Verify front matter**: Check YAML front matter syntax is correct
3. **Hard refresh**: Press `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
4. **Check browser console**: Press `F12` → Console tab for errors
5. **Restart local server**: Stop and restart Python server

#### Issue: Images not displaying
**Symptoms**: Image placeholders or broken image icons
**Solutions**:
1. **Check file path**: Verify image path in Markdown front matter
2. **File exists**: Ensure image file exists in the correct folder:
   - Team avatars: `assets/media/avatars/`
   - News images: `assets/media/posts/`
   - General images: `assets/media/`
3. **File permissions**: Check file permissions (should be readable)
4. **File format**: Use JPG, PNG, or GIF formats
5. **File size**: Keep images under 1MB for faster loading

#### Issue: Navigation not working
**Symptoms**: Clicking navigation links doesn't work
**Solutions**:
1. **Check file names**: Ensure HTML files exist (`index.html`, `people.html`, etc.)
2. **Verify links**: Check navigation links in HTML files
3. **Clear cache**: Clear browser cache and cookies
4. **Check server**: Ensure local server is running on correct port

### JavaScript Errors

#### Issue: "Cannot read properties of undefined"
**Symptoms**: JavaScript errors in browser console
**Solutions**:
1. **Check script loading**: Ensure all JavaScript files are loaded
2. **Verify file paths**: Check script src paths in HTML files
3. **Load order**: Ensure dependencies load before dependent scripts
4. **Element existence**: Check if DOM elements exist before accessing

#### Issue: "TypeError: window.contentLoader is not defined"
**Symptoms**: Content loading fails
**Solutions**:
1. **Include content-loader.js**: Add `<script src="content-loader.js"></script>`
2. **Load order**: Ensure content-loader.js loads before other scripts
3. **File path**: Verify content-loader.js exists in root directory
4. **Check syntax**: Look for JavaScript syntax errors

#### Issue: Slideshow not working
**Symptoms**: Homepage slideshow doesn't advance or show images
**Solutions**:
1. **Check image paths**: Verify slideshow images exist
2. **JavaScript errors**: Check console for slideshow-related errors
3. **CSS conflicts**: Ensure no CSS is hiding slideshow elements
4. **Browser compatibility**: Test in different browsers

### CSS and Styling Issues

#### Issue: Layout broken or misaligned
**Symptoms**: Elements not positioned correctly
**Solutions**:
1. **CSS conflicts**: Check for conflicting CSS rules
2. **Responsive design**: Test on different screen sizes
3. **Browser compatibility**: Test in different browsers
4. **CSS specificity**: Use `!important` for critical styles

#### Issue: Colors or fonts not updating
**Symptoms**: CSS changes not reflected on website
**Solutions**:
1. **Hard refresh**: Press `Ctrl+F5` to clear cache
2. **CSS file path**: Verify styles.css is being loaded
3. **CSS syntax**: Check for syntax errors in CSS file
4. **Browser cache**: Clear browser cache completely

#### Issue: Mobile responsiveness issues
**Symptoms**: Website doesn't look good on mobile devices
**Solutions**:
1. **Viewport meta tag**: Ensure `<meta name="viewport">` is present
2. **Media queries**: Check responsive CSS rules
3. **Test on device**: Test on actual mobile devices
4. **Browser dev tools**: Use responsive design mode in browser

### Server and Development Issues

#### Issue: "Connection refused" or server not starting
**Symptoms**: Can't access website locally
**Solutions**:
1. **Port conflict**: Try different port (e.g., `python -m http.server 8080`)
2. **Firewall**: Check firewall settings
3. **Directory**: Ensure you're in the correct directory
4. **Python version**: Use Python 3.x

#### Issue: "File not found" errors
**Symptoms**: 404 errors for files that exist
**Solutions**:
1. **File paths**: Check file paths are correct (case-sensitive)
2. **File permissions**: Ensure files are readable
3. **Server root**: Verify server is running from correct directory
4. **File extensions**: Check file extensions are correct

#### Issue: CORS errors
**Symptoms**: "Cross-origin request blocked" errors
**Solutions**:
1. **Use local server**: Don't open HTML files directly in browser
2. **Server headers**: Ensure server sends correct CORS headers
3. **File protocol**: Use `http://` not `file://` protocol
4. **Browser settings**: Disable CORS in browser (development only)

## 🔧 Debugging Steps

### Step 1: Check Browser Console
1. Press `F12` to open Developer Tools
2. Go to Console tab
3. Look for red error messages
4. Note the error message and line number

### Step 2: Verify File Structure
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
│   └── publications.bib
└── assets/
    └── media/
```

### Step 3: Check File Permissions
```bash
# On macOS/Linux
ls -la
# Ensure files are readable (r--r--r--)
```

### Step 4: Test Individual Components
1. **Test HTML files**: Open each HTML file individually
2. **Test CSS**: Check if styles.css loads correctly
3. **Test JavaScript**: Check console for script errors
4. **Test content**: Verify Markdown files parse correctly

## 🛠️ Common Fixes

### Fix 1: Content Loading Issues
```javascript
// Add this to HTML files to debug content loading
<script>
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    if (window.contentLoader) {
        console.log('Content loader available');
    } else {
        console.error('Content loader not found');
    }
});
</script>
```

### Fix 2: Image Loading Issues
```html
<!-- Add error handling for images -->
<img src="assets/media/image.jpg" 
     alt="Description" 
     onerror="console.error('Image failed to load:', this.src)">
```

### Fix 3: CSS Override Issues
```css
/* Use !important for critical styles */
.navbar {
    background-color: black !important;
    color: #FFC904 !important;
}
```

### Fix 4: JavaScript Loading Order
```html
<!-- Ensure correct loading order -->
<script src="markdown-parser.js"></script>
<script src="content-loader.js"></script>
<script src="script.js"></script>
```

## 📱 Mobile-Specific Issues

### Issue: Touch interactions not working
**Solutions**:
1. **Add touch events**: Include touch event handlers
2. **Viewport settings**: Ensure proper viewport meta tag
3. **CSS touch-action**: Add `touch-action: manipulation` for buttons

### Issue: Slow loading on mobile
**Solutions**:
1. **Optimize images**: Compress images for mobile
2. **Minimize CSS/JS**: Reduce file sizes
3. **Lazy loading**: Implement lazy loading for images
4. **CDN**: Use CDN for external resources

## 🌐 Browser Compatibility

### Supported Browsers:
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Browser-Specific Issues:

#### Chrome:
- **DevTools**: Use Chrome DevTools for debugging
- **Cache**: Hard refresh with `Ctrl+Shift+R`
- **Extensions**: Disable extensions that might interfere

#### Firefox:
- **Console**: Check Web Console for errors
- **Cache**: Clear cache with `Ctrl+Shift+Delete`
- **Responsive**: Use Responsive Design Mode

#### Safari:
- **Developer menu**: Enable Developer menu in preferences
- **Console**: Use Web Inspector for debugging
- **Cache**: Clear cache in Safari preferences

## 📊 Performance Issues

### Issue: Slow page loading
**Solutions**:
1. **Optimize images**: Compress and resize images
2. **Minimize HTTP requests**: Combine CSS/JS files
3. **Use CDN**: Serve external resources from CDN
4. **Enable compression**: Use gzip compression

### Issue: Large file sizes
**Solutions**:
1. **Image optimization**: Use WebP format when possible
2. **Code minification**: Minify CSS and JavaScript
3. **Remove unused code**: Clean up unused CSS/JS
4. **Lazy loading**: Implement lazy loading for images

## 🔍 Advanced Debugging

### Network Tab Analysis:
1. Open Developer Tools → Network tab
2. Reload page
3. Look for failed requests (red entries)
4. Check response codes and headers

### Element Inspection:
1. Right-click element → Inspect
2. Check computed styles
3. Look for CSS conflicts
4. Verify element structure

### Console Debugging:
```javascript
// Add debug statements
console.log('Variable value:', variable);
console.error('Error occurred:', error);
console.warn('Warning:', warning);
```

## 📞 Getting Help

### Before Asking for Help:
1. **Check this guide**: Look for similar issues
2. **Browser console**: Note any error messages
3. **Steps to reproduce**: Document exact steps
4. **Environment**: Note browser, OS, and version

### Information to Provide:
- **Error message**: Exact error text
- **Steps to reproduce**: How to trigger the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Browser/OS**: Browser type and version
- **File structure**: Relevant file paths

### Contact Information:
- **Website Issues**: Check this troubleshooting guide first
- **Content Issues**: Review content creation guides
- **Technical Support**: Contact website administrator

## 🗂️ File Structure Changes (Updated July 2024)

### Recent Cleanup:
The website file structure has been cleaned up to remove unused legacy files:

#### **Removed Folders:**
- `content/research/` - Unused Hugo research folder
- `content/publication/` - Unused Hugo publication folder  
- `content/post/` - Unused Hugo post folder (images moved to `assets/media/posts/`)
- `content/authors/` - Unused Hugo authors folder (images moved to `assets/media/avatars/`)
- `content/admin/` - Unused Decap CMS folder
- `content/event/` - Unused Hugo event folder
- `content/_index.md` - Unused Hugo homepage file

#### **New Image Organization:**
- **Team Avatars**: `assets/media/avatars/` (moved from `content/authors/`)
- **News Images**: `assets/media/posts/` (moved from `content/post/`)
- **General Images**: `assets/media/` (main image folder)

#### **Current Active Structure:**
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

### If You Encounter Legacy References:
If you see references to old file paths, update them to the new structure:
- `content/authors/name/avatar.jpg` → `assets/media/avatars/name.jpg`
- `content/post/event/featured.jpg` → `assets/media/posts/event.jpg`

## ✅ Prevention Tips

### Regular Maintenance:
- **Backup content**: Regularly backup your content
- **Test changes**: Test locally before deploying
- **Update dependencies**: Keep libraries updated
- **Monitor performance**: Check loading times regularly

### Best Practices:
- **Consistent naming**: Use consistent file naming conventions
- **Version control**: Use Git for version control
- **Documentation**: Keep documentation updated
- **Testing**: Test on multiple browsers and devices

---

*This troubleshooting guide covers the most common issues. For specific problems not covered here, please contact the website administrator with detailed information about the issue.* 