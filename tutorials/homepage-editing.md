# Homepage Editing Guide

This guide explains how to edit the homepage content of the WEN Lab website.

## 📍 Overview

The homepage consists of several sections:
1. **Hero Slideshow** - Rotating images at the top
2. **Lab Name** - Main title with underlined letters
3. **About Us** - Lab introduction
4. **Our Mission** - Mission statement

## 📁 File Location

The homepage content is stored in:
```
content/home.md
```

## 🎨 Editing Homepage Content

### Step 1: Open the Homepage File

1. Navigate to `content/home.md`
2. Open the file in your preferred text editor

### Step 2: Understanding the Structure

The homepage uses a section-based structure with `##` headers:

```markdown
## Lab Name
# <span class="underline">W</span>earable <span class="underline">E</span>ngineering and <span class="underline">N</span>eural Interface Laboratory

## About Us
The **W**earable **E**ngineering and **N**eural Interface Laboratory (WEN Lab) at University of Central Florida has been a center of excellence for rehabilitation, wearable engineering, robotics and neural machine interface since its founding in 2023.

## Our Mission
To advance the field of wearable robotics and neural interfaces through innovative research, cutting-edge technology development, and collaborative partnerships that improve human lives and rehabilitation outcomes.

## Slideshow Images
- h1.jpg: "Wearable Engineering and Neural Interface Laboratory" - "Advancing rehabilitation, wearable engineering, robotics and neural machine interface"
- h2.jpg: "Innovation in Rehabilitation Technology" - "Developing cutting-edge solutions for human-robot interaction"
- h3.jpg: "Neural Machine Interfaces" - "Bridging the gap between human intention and robotic assistance"
```

### Step 3: Editing Each Section

#### **Lab Name Section**
- **Purpose**: Main title displayed prominently
- **Format**: Uses HTML `<span class="underline">` for underlined letters
- **Example**:
  ```markdown
  ## Lab Name
  # <span class="underline">W</span>earable <span class="underline">E</span>ngineering and <span class="underline">N</span>eural Interface Laboratory
  ```

#### **About Us Section**
- **Purpose**: Brief introduction to the lab
- **Format**: Regular markdown with bold text for emphasis
- **Example**:
  ```markdown
  ## About Us
  The **W**earable **E**ngineering and **N**eural Interface Laboratory (WEN Lab) at University of Central Florida has been a center of excellence for rehabilitation, wearable engineering, robotics and neural machine interface since its founding in 2023.
  ```

#### **Our Mission Section**
- **Purpose**: Clear mission statement
- **Format**: Concise, impactful statement
- **Example**:
  ```markdown
  ## Our Mission
  To advance the field of wearable robotics and neural interfaces through innovative research, cutting-edge technology development, and collaborative partnerships that improve human lives and rehabilitation outcomes.
  ```

#### **Slideshow Images Section**
- **Purpose**: Metadata for the hero slideshow images
- **Format**: List of images with titles and descriptions
- **Example**:
  ```markdown
  ## Slideshow Images
  - h1.jpg: "Title 1" - "Description 1"
  - h2.jpg: "Title 2" - "Description 2"
  - h3.jpg: "Title 3" - "Description 3"
  ```

## 🖼️ Changing Slideshow Images

### Step 1: Prepare New Images

1. **Image Requirements**:
   - **Format**: JPG or PNG
   - **Size**: Recommended 1920x1080 pixels or similar aspect ratio
   - **File size**: Keep under 1MB for fast loading
   - **Naming**: Use descriptive names (e.g., `lab-research.jpg`)

2. **Image Content**:
   - High-quality photos of lab activities
   - Research equipment and facilities
   - Team members working
   - Conference presentations

### Step 2: Upload Images

1. Navigate to `assets/media/`
2. Upload your new images
3. Update the slideshow references in `index.html`:

```html
<!-- In index.html, around lines 45-55 -->
<div class="slide fade active">
    <img src="assets/media/your-new-image.jpg" alt="Description">
</div>
<div class="slide fade">
    <img src="assets/media/another-image.jpg" alt="Description">
</div>
```

### Step 3: Update Image Metadata

Update the slideshow section in `content/home.md`:

```markdown
## Slideshow Images
- your-new-image.jpg: "Your Title" - "Your Description"
- another-image.jpg: "Another Title" - "Another Description"
- third-image.jpg: "Third Title" - "Third Description"
```

## 🎯 Best Practices

### Content Guidelines
- **Keep it concise**: Homepage content should be brief and impactful
- **Use active voice**: "We develop..." rather than "Development is..."
- **Highlight key achievements**: Mention awards, publications, or milestones
- **Include call-to-action**: Encourage visitors to explore other pages

### Technical Guidelines
- **Test changes locally**: Always preview changes before deploying
- **Check mobile responsiveness**: Ensure content looks good on all devices
- **Optimize images**: Compress images for faster loading
- **Use consistent formatting**: Follow the existing markdown structure

### SEO Considerations
- **Use descriptive headings**: Clear, keyword-rich section titles
- **Include relevant keywords**: Naturally incorporate important terms
- **Write compelling descriptions**: Make visitors want to learn more

## 🔧 Troubleshooting

### Common Issues

#### **Content Not Updating**
- **Cause**: Browser caching
- **Solution**: Hard refresh (Ctrl+F5 or Cmd+Shift+R)

#### **Images Not Loading**
- **Cause**: Incorrect file path
- **Solution**: Check that images are in `assets/media/` and paths are correct

#### **Formatting Issues**
- **Cause**: Incorrect markdown syntax
- **Solution**: Validate markdown syntax and check for missing `##` headers

#### **Slideshow Not Working**
- **Cause**: JavaScript errors
- **Solution**: Check browser console (F12) for errors

### Debugging Steps

1. **Check file syntax**:
   ```bash
   # Validate markdown structure
   cat content/home.md
   ```

2. **Test locally**:
   ```bash
   # Start local server
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Check browser console**:
   - Press F12 to open developer tools
   - Go to Console tab
   - Look for any error messages

## 📝 Example Updates

### Adding a New Achievement

```markdown
## About Us
The **W**earable **E**ngineering and **N**eural Interface Laboratory (WEN Lab) at University of Central Florida has been a center of excellence for rehabilitation, wearable engineering, robotics and neural machine interface since its founding in 2023. **Recently awarded the IEEE Robotics Award 2024** for outstanding contributions to wearable robotics research.
```

### Updating Mission Statement

```markdown
## Our Mission
To advance the field of wearable robotics and neural interfaces through innovative research, cutting-edge technology development, and collaborative partnerships that improve human lives and rehabilitation outcomes. We strive to bridge the gap between academic research and clinical applications.
```

## 🚀 Quick Reference

| Section | File | Purpose |
|---------|------|---------|
| Lab Name | `content/home.md` | Main title with styling |
| About Us | `content/home.md` | Lab introduction |
| Our Mission | `content/home.md` | Mission statement |
| Slideshow | `index.html` + `assets/media/` | Hero images |
| Styling | `styles.css` | Visual appearance |

## 📞 Need Help?

If you encounter issues:
1. Check the [Troubleshooting](troubleshooting.md) guide
2. Review the [CONTENT_GUIDE.md](../CONTENT_GUIDE.md)
3. Test changes on your local server first

---

*Last updated: July 2024* 