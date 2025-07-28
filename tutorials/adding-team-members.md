# Adding New Team Members

This guide will walk you through the process of adding new team members to the WEN Lab website.

## 📋 Prerequisites

- Basic knowledge of Markdown syntax
- An image file for the team member (recommended: 400x400px, JPG/PNG format)
- Team member information (name, role, brief bio, social links)

## 🎯 Step-by-Step Process

### Step 1: Prepare the Image

1. **Resize the image** to 400x400 pixels (square format works best)
2. **Optimize the file size** (keep under 500KB for faster loading)
3. **Save the image** with a descriptive filename (e.g., `john-doe.jpg`)
4. **Upload to the correct folder**: `assets/media/avatars/`

### Step 2: Create the Markdown File

1. **Navigate to**: `content/people/`
2. **Create a new file** with the naming convention: `firstname-lastname.md`
3. **Use the template below** to create the content

### Step 3: Markdown Template

```markdown
---
name: "Dr. John Doe"
role: "Post-doc"
category: "post-doc"
avatar: "assets/media/avatars/john-doe.jpg"
order: 3
---

## Brief Bio

Dr. John Doe is a postdoctoral researcher specializing in wearable robotics and neural interfaces. He received his Ph.D. in Mechanical Engineering from MIT in 2023, where he developed novel control strategies for lower-limb exoskeletons.

## Research Interests

- Human-in-the-loop optimization
- Adaptive control systems
- Neural-machine interfaces
- Rehabilitation robotics

## Education

- **Ph.D.** Mechanical Engineering, MIT (2023)
- **M.S.** Mechanical Engineering, Stanford University (2019)
- **B.S.** Mechanical Engineering, UC Berkeley (2017)

## Selected Publications

1. Doe, J., et al. "Adaptive Control for Wearable Robotics." *IEEE Transactions on Robotics*, 2023.
2. Doe, J., et al. "Neural Interface Design for Rehabilitation." *Science Robotics*, 2022.

## Contact & Social Links

- **Email**: john.doe@ucf.edu
- **Google Scholar**: [John Doe](https://scholar.google.com/citations?user=example)
- **ORCID**: [0000-0000-0000-0000](https://orcid.org/0000-0000-0000-0000)
- **GitHub**: [johndoe](https://github.com/johndoe)
- **LinkedIn**: [John Doe](https://linkedin.com/in/johndoe)
- **Personal Website**: [johndoe.com](https://johndoe.com)
```

### Step 4: Front Matter Configuration

#### Required Fields:

- **`name`**: Full name as it should appear on the website
- **`role`**: Current position (e.g., "Principal Investigator", "Post-doc", "Graduate Student Researcher", "Undergraduate Student Researcher")
- **`category`**: Must match one of these exact values:
  - `"pi"` - Principal Investigator
  - `"post-doc"` - Post-doc
  - `"graduate"` - Graduate Student Researcher
- `"undergraduate"` - Undergraduate Student Researcher
  - `"alumni"` - Alumni
- **`avatar`**: Path to the image file (relative to root)
- **`order`**: Display order (lower numbers appear first within each category)

#### Optional Fields:

- **`website`**: Personal website URL (if available)
- **`google_scholar`**: Google Scholar profile URL
- **`orcid`**: ORCID profile URL
- **`github`**: GitHub profile URL
- **`linkedin`**: LinkedIn profile URL

### Step 5: Content Guidelines

#### Brief Bio Section:
- Keep it concise (2-3 paragraphs maximum)
- Focus on current research and expertise
- Include key achievements and specializations

#### Research Interests:
- Use bullet points for easy reading
- Focus on 3-5 main areas
- Use consistent terminology

#### Education:
- List in reverse chronological order
- Include degree, field, institution, and year
- Use **bold** for degree types

#### Publications:
- Include 3-5 most relevant publications
- Use standard citation format
- Link to papers if available

## 📁 File Organization

### Active Members (Non-Alumni)
Files are stored in `content/people/` and displayed as cards with:
- Avatar image
- Name (clickable if website/social links provided)
- Role
- Brief bio
- Social links

### Alumni
Files are stored in `content/people/` with `category: "alumni"` and displayed as:
- Single line format: Name, Degree, Year, Current Position

## 🔄 Updating Existing Members

To update an existing team member:

1. **Edit the Markdown file** in `content/people/`
2. **Update the front matter** if needed (role, category, order)
3. **Replace the avatar image** if needed (same filename or update the path)
4. **Refresh the website** to see changes

## 🎨 Image Requirements

### Technical Specifications:
- **Format**: JPG or PNG
- **Size**: 400x400 pixels (square)
- **File size**: Under 500KB
- **Quality**: High resolution, professional appearance

### Best Practices:
- Use professional headshots
- Ensure good lighting and clear background
- Maintain consistent style across all team photos
- Test how the image looks in the circular avatar format

## 🚨 Common Issues & Solutions

### Issue: Image not displaying
**Solution**: Check the file path in the `avatar` field. Make sure the image exists in `assets/media/`

### Issue: Member not appearing on website
**Solution**: 
1. Check the `category` field matches exactly: `"pi"`, `"post-doc"`, `"graduate"`, `"undergraduate"`, or `"alumni"`
2. Verify the Markdown file is saved in `content/people/`
3. Refresh the browser (Ctrl+F5 for hard refresh)

### Issue: Wrong display order
**Solution**: Adjust the `order` number in the front matter. Lower numbers appear first.

### Issue: Social links not working
**Solution**: Ensure URLs are complete (include `https://`) and valid

## 📝 Example Files

### Graduate Student Researcher Example:
```markdown
---
name: "Jane Smith"
role: "Graduate Student Researcher"
category: "graduate"
avatar: "assets/media/jane-smith.jpg"
order: 2
---

## Brief Bio

Jane Smith is a Ph.D. student in Mechanical Engineering focusing on human-robot interaction for rehabilitation applications. She received her B.S. in Biomedical Engineering from UCF in 2022.

## Research Interests

- Human-robot interaction
- Rehabilitation robotics
- User interface design
- Clinical validation

## Education

- **B.S.** Biomedical Engineering, University of Central Florida (2022)

## Contact & Social Links

- **Email**: jane.smith@ucf.edu
- **GitHub**: [janesmith](https://github.com/janesmith)
```

### Alumni Example:
```markdown
---
name: "Mike Johnson"
role: "Alumni"
category: "alumni"
avatar: "assets/media/mike-johnson.jpg"
order: 1
---

Mike Johnson, Ph.D. Mechanical Engineering (2023) - Research Scientist at Boston Dynamics
```

## ✅ Checklist

Before publishing a new team member:

- [ ] Image is properly sized and optimized
- [ ] Markdown file is saved in `content/people/`
- [ ] Front matter includes all required fields
- [ ] Category matches exactly one of the allowed values
- [ ] Social links are complete and valid
- [ ] Content is proofread and professional
- [ ] Website is tested locally before deployment

---

*Need help? Check the [Troubleshooting](../troubleshooting.md) guide or contact the website administrator.* 