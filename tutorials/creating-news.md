# Creating News Articles

This guide will help you create and manage news articles for the WEN Lab website.

## 📋 Prerequisites

- Basic knowledge of Markdown syntax
- An image file for the news article (recommended: 800x600px, JPG/PNG format)
- News content (title, date, category, description, full article)

## 🎯 Step-by-Step Process

### Step 1: Prepare the Image

1. **Resize the image** to 800x600 pixels (4:3 aspect ratio works well)
2. **Optimize the file size** (keep under 1MB for faster loading)
3. **Save the image** with a descriptive filename (e.g., `award-ceremony-2024.jpg`)
4. **Upload to the correct folder**: `assets/media/`

### Step 2: Create the Markdown File

1. **Navigate to**: `content/news/`
2. **Create a new file** with the naming convention: `descriptive-title.md`
3. **Use the template below** to create the content

### Step 3: Markdown Template

```markdown
---
title: "WEN Lab Receives Prestigious NSF CAREER Award"
date: "2024-03-15"
category: "Award"
image: "assets/media/nsf-career-award-2024.jpg"
featured: true
order: 1
---

## Summary

Dr. Jirui Fu, Principal Investigator of the WEN Lab, has been awarded the prestigious NSF CAREER Award for his innovative research in wearable robotics and neural interfaces. This $500,000 grant will support five years of research focused on developing next-generation rehabilitation technologies.

## Full Article

The National Science Foundation (NSF) has awarded Dr. Jirui Fu, Assistant Professor in the Department of Mechanical and Aerospace Engineering at the University of Central Florida, the Faculty Early Career Development (CAREER) Award. This prestigious award recognizes early-career faculty who have the potential to serve as academic role models in research and education.

### Research Focus

The awarded project, titled "Human-in-the-Loop Optimization of Wearable Robotics for Personalized Rehabilitation," aims to develop intelligent control systems that can adapt to individual users' needs in real-time. The research will integrate:

- Advanced machine learning algorithms
- Real-time biomechanical analysis
- Adaptive control strategies
- Clinical validation protocols

### Impact and Innovation

This research has the potential to revolutionize rehabilitation practices by:

1. **Personalizing Treatment**: Adapting robotic assistance to individual patient needs
2. **Improving Outcomes**: Enhancing recovery through optimized assistance patterns
3. **Reducing Costs**: Streamlining rehabilitation processes
4. **Expanding Access**: Making advanced rehabilitation technology more accessible

### Educational Component

The grant also includes significant educational initiatives:

- **Undergraduate Research**: Involving UCF students in cutting-edge research
- **Outreach Programs**: Engaging K-12 students in robotics and engineering
- **Industry Partnerships**: Collaborating with healthcare technology companies
- **International Collaboration**: Partnering with leading institutions worldwide

### Team and Collaborations

The project will involve:

- **WEN Lab Researchers**: Graduate and undergraduate students
- **Clinical Partners**: Local rehabilitation centers and hospitals
- **Industry Partners**: Wearable robotics companies
- **Academic Collaborators**: Leading researchers in the field

### Timeline and Milestones

**Year 1-2**: System development and initial testing
**Year 3**: Clinical validation studies
**Year 4**: Technology refinement and optimization
**Year 5**: Dissemination and commercialization efforts

### Future Directions

This award positions the WEN Lab as a leader in wearable robotics research and opens opportunities for:

- Additional federal funding
- Industry partnerships
- Technology commercialization
- International recognition

## Contact Information

For more information about this research or collaboration opportunities, please contact:

- **Dr. Jirui Fu**: jiruifu@gmail.com
- **WEN Lab**: [wenlab-2023.github.io](https://wenlab-2023.github.io)

---

*This article was published on March 15, 2024. For the latest updates, follow the WEN Lab on social media.*
```

### Step 4: Front Matter Configuration

#### Required Fields:

- **`title`**: The headline of the news article
- **`date`**: Publication date in YYYY-MM-DD format
- **`category`**: News category (e.g., "Award", "Publication", "Event", "Research", "Collaboration")
- **`image`**: Path to the featured image (relative to root)
- **`featured`**: Whether to feature this article (true/false)
- **`order`**: Display order (lower numbers appear first)

#### Optional Fields:

- **`author`**: Article author (if different from default)
- **`tags`**: Additional tags for categorization
- **`external_link`**: Link to external article (if applicable)

### Step 5: Content Guidelines

#### Summary Section:
- Keep it concise (2-3 sentences)
- Highlight the most important information
- Use clear, engaging language

#### Full Article Structure:
- **Introduction**: Set the context and importance
- **Main Content**: Detailed information with subheadings
- **Impact**: Why this matters
- **Future Directions**: What's next
- **Contact Information**: How to learn more

#### Writing Style:
- Use clear, professional language
- Include relevant technical details
- Make it accessible to both technical and non-technical audiences
- Use bullet points and numbered lists for easy reading

## 📁 File Organization

### News Display:
- **News Page**: Shows all news articles in chronological order
- **Homepage**: May feature recent or important news
- **Individual Pages**: Each news article has its own detailed page

### Categories:
- **Award**: Recognition and honors
- **Publication**: New research papers and publications
- **Event**: Conferences, workshops, and lab events
- **Research**: Research breakthroughs and developments
- **Collaboration**: Partnerships and joint projects
- **General**: Other news and updates

## 🔄 Updating Existing News

To update an existing news article:

1. **Edit the Markdown file** in `content/news/`
2. **Update the front matter** if needed (date, category, featured status)
3. **Replace the image** if needed (same filename or update the path)
4. **Refresh the website** to see changes

## 🎨 Image Requirements

### Technical Specifications:
- **Format**: JPG or PNG
- **Size**: 800x600 pixels (4:3 aspect ratio recommended)
- **File size**: Under 1MB
- **Quality**: High resolution, professional appearance

### Best Practices:
- Use relevant, high-quality images
- Ensure good composition and lighting
- Include people when appropriate (team photos, award ceremonies)
- Use consistent style across all news images

## 🚨 Common Issues & Solutions

### Issue: News article not appearing
**Solution**: 
1. Check the Markdown file is saved in `content/news/`
2. Verify the front matter syntax is correct
3. Refresh the browser (Ctrl+F5 for hard refresh)

### Issue: Image not displaying
**Solution**: Check the file path in the `image` field. Make sure the image exists in `assets/media/`

### Issue: Wrong display order
**Solution**: Adjust the `order` number in the front matter. Lower numbers appear first.

### Issue: Date not displaying correctly
**Solution**: Ensure the date is in YYYY-MM-DD format (e.g., "2024-03-15")

## 📝 Example Categories and Titles

### Award News:
- "WEN Lab Receives NSF CAREER Award"
- "Student Wins Best Paper Award at IEEE Conference"
- "Lab Recognized for Innovation in Rehabilitation Technology"

### Publication News:
- "New Paper Published in Science Robotics"
- "Research Featured in IEEE Transactions on Robotics"
- "Collaborative Study Published in Nature Communications"

### Event News:
- "WEN Lab Hosts International Workshop on Wearable Robotics"
- "Team Presents at RehabWeek 2024"
- "Open House Event Draws Record Attendance"

### Research News:
- "Breakthrough in Neural Interface Technology"
- "New Algorithm Improves Exoskeleton Control"
- "Clinical Trial Shows Promising Results"

## ✅ Checklist

Before publishing a news article:

- [ ] Image is properly sized and optimized
- [ ] Markdown file is saved in `content/news/`
- [ ] Front matter includes all required fields
- [ ] Date is in correct format (YYYY-MM-DD)
- [ ] Content is proofread and professional
- [ ] Links are working and valid
- [ ] Category is appropriate and consistent
- [ ] Website is tested locally before deployment

## 📊 News Management Tips

### Content Planning:
- **Regular Updates**: Aim for 1-2 news articles per month
- **Variety**: Mix different types of news (awards, publications, events)
- **Timeliness**: Publish news while it's still relevant
- **Quality**: Focus on quality over quantity

### SEO and Visibility:
- **Descriptive Titles**: Use clear, searchable titles
- **Relevant Keywords**: Include important terms naturally
- **Internal Links**: Link to related projects or people
- **External Links**: Link to relevant external sources

### Engagement:
- **Social Media**: Share news on lab social media accounts
- **Email Updates**: Include news in lab newsletters
- **Collaboration**: Encourage team members to share news
- **Feedback**: Monitor engagement and adjust content accordingly

---

*Need help? Check the [Troubleshooting](../troubleshooting.md) guide or contact the website administrator.* 