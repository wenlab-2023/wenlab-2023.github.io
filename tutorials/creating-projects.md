# Creating Research Projects

This guide will help you create and manage research projects for the WEN Lab website.

## 📋 Prerequisites

- Basic knowledge of Markdown syntax
- An image file for the project (recommended: 800x600px, JPG/PNG format)
- Project information (title, PI, team, description, details)

## 🎯 Step-by-Step Process

### Step 1: Prepare the Image

1. **Resize the image** to 800x600 pixels (4:3 aspect ratio works well)
2. **Optimize the file size** (keep under 1MB for faster loading)
3. **Save the image** with a descriptive filename (e.g., `neural-interface-project.jpg`)
4. **Upload to the correct folder**: `assets/media/`

### Step 2: Create the Markdown File

1. **Navigate to**: `content/projects/`
2. **Create a new file** with the naming convention: `project-name.md`
3. **Use the template below** to create the content

### Step 3: Markdown Template

```markdown
---
title: "Neural-Machine Interface for Wearable Robotics"
principal_investigator: "Dr. Jirui Fu"
team_members: "Ali Al-Ramadan, Dr. Yue Wen, Clara Rodriguez"
order: 1
image: "assets/media/neural-interface-project.jpg"
status: "Active"
funding: "NSF CAREER Award"
start_date: "2023-01-01"
end_date: "2028-12-31"
---

## Project Overview

This project focuses on developing advanced neural-machine interfaces (NMIs) for wearable robotics applications. The goal is to create intuitive and reliable communication channels between users and robotic devices, enabling seamless control of exoskeletons and prosthetics.

## Research Objectives

### Primary Goals

1. **Develop Non-Invasive Neural Interfaces**: Create comfortable, wearable sensors that can reliably capture neural signals
2. **Implement Real-Time Signal Processing**: Design algorithms for rapid interpretation of neural data
3. **Enable Intuitive Control**: Develop control strategies that feel natural to users
4. **Validate Clinical Efficacy**: Demonstrate improved rehabilitation outcomes

### Technical Challenges

- **Signal Quality**: Maintaining high signal-to-noise ratios in real-world conditions
- **Latency**: Achieving sub-100ms response times for natural interaction
- **Reliability**: Ensuring consistent performance across different users and conditions
- **Comfort**: Creating interfaces that can be worn for extended periods

## Methodology

### Phase 1: Sensor Development (2023-2024)

**Electrode Design**
- Novel dry electrode materials for improved conductivity
- Flexible substrate integration for comfort
- Multi-modal sensing (EMG, EEG, force)

**Signal Acquisition**
- High-fidelity amplifiers with low noise
- Wireless data transmission protocols
- Real-time data streaming capabilities

### Phase 2: Algorithm Development (2024-2026)

**Machine Learning Approaches**
- Deep neural networks for signal classification
- Transfer learning for user adaptation
- Online learning for continuous improvement

**Control Strategies**
- Model predictive control
- Adaptive impedance control
- User intent prediction

### Phase 3: System Integration (2026-2027)

**Hardware Integration**
- Embedded processing units
- Power management systems
- Safety mechanisms and fail-safes

**Software Architecture**
- Real-time operating system
- Modular control framework
- User interface development

### Phase 4: Clinical Validation (2027-2028)

**Study Design**
- Randomized controlled trials
- Multiple clinical sites
- Long-term follow-up studies

**Outcome Measures**
- Functional improvement metrics
- User satisfaction surveys
- Cost-effectiveness analysis

## Expected Outcomes

### Scientific Contributions

1. **Novel Neural Interface Design**: New electrode materials and configurations
2. **Advanced Control Algorithms**: Machine learning approaches for NMI control
3. **Clinical Validation Framework**: Standardized protocols for NMI evaluation
4. **Open-Source Tools**: Software and hardware designs for the research community

### Practical Impact

- **Improved Rehabilitation**: Better outcomes for stroke and spinal cord injury patients
- **Enhanced Mobility**: More natural control of assistive devices
- **Reduced Costs**: More efficient rehabilitation processes
- **Increased Access**: Technology available to more patients

## Team and Collaborations

### Core Team

- **Dr. Jirui Fu** (PI): Neural interface design and control algorithms
- **Ali Al-Ramadan** (Graduate Student): Signal processing and machine learning
- **Dr. Yue Wen** (Post-doc): Clinical validation and user studies
- **Clara Rodriguez** (Undergraduate): Hardware development and testing

### Collaborators

- **UCF College of Medicine**: Clinical expertise and patient recruitment
- **Orlando VA Medical Center**: Veteran population access
- **Industry Partners**: Technology transfer and commercialization

## Publications and Presentations

### Journal Publications

1. Fu, J., et al. "Neural Interface Design for Wearable Robotics." *IEEE Transactions on Neural Systems and Rehabilitation Engineering*, 2024.
2. Al-Ramadan, A., et al. "Real-Time Signal Processing for Neural Control." *Journal of Neural Engineering*, 2024.

### Conference Presentations

1. "Neural-Machine Interface Development" - IEEE EMBC 2024
2. "Clinical Validation of NMI Systems" - RehabWeek 2024
3. "User Experience in Neural Control" - IEEE RAS 2024

## Funding and Resources

### Current Funding

- **NSF CAREER Award**: $500,000 (2023-2028)
- **UCF Startup Funds**: $50,000 (2023-2024)
- **Industry Partnership**: $100,000 (2024-2026)

### Equipment and Facilities

- **Neural Interface Lab**: Dedicated space for NMI development
- **Clinical Testing Facility**: Access to patient populations
- **Computing Resources**: High-performance computing cluster
- **Prototyping Equipment**: 3D printers, electronics lab

## Future Directions

### Technology Development

- **Wireless Power Transfer**: Eliminating battery constraints
- **Multi-Modal Integration**: Combining neural and biomechanical signals
- **AI-Powered Adaptation**: Personalized interface optimization

### Clinical Applications

- **Stroke Rehabilitation**: Upper and lower limb recovery
- **Spinal Cord Injury**: Mobility restoration
- **Aging Population**: Fall prevention and mobility assistance

### Commercialization

- **Startup Formation**: Technology transfer to new company
- **Industry Partnerships**: Collaboration with medical device companies
- **Regulatory Approval**: FDA clearance for clinical use

## Contact Information

For more information about this project or collaboration opportunities:

- **Principal Investigator**: Dr. Jirui Fu (jiruifu@gmail.com)
- **Project Website**: [Neural Interface Project](https://wenlab-2023.github.io/projects/neural-interface)
- **Lab Website**: [WEN Lab](https://wenlab-2023.github.io)

---

*This project is supported by the National Science Foundation under Grant No. 1234567.*
```

### Step 4: Front Matter Configuration

#### Required Fields:

- **`title`**: The project title
- **`principal_investigator`**: Name of the PI
- **`team_members`**: List of team members (comma-separated)
- **`order`**: Display order (lower numbers appear first)
- **`image`**: Path to the project image (relative to root)
- **`status`**: Project status ("Active", "Completed", "Planning", "On Hold")
- **`funding`**: Funding source (e.g., "NSF CAREER Award", "NIH R01")
- **`start_date`**: Project start date (YYYY-MM-DD)
- **`end_date`**: Project end date (YYYY-MM-DD)

#### Optional Fields:

- **`budget`**: Total project budget
- **`collaborators`**: External collaborators
- **`keywords`**: Research keywords for categorization
- **`website`**: External project website

### Step 5: Content Guidelines

#### Project Overview:
- Keep it concise (2-3 paragraphs)
- Explain the main goal and significance
- Use clear, accessible language

#### Research Objectives:
- List specific, measurable goals
- Include both technical and clinical objectives
- Use bullet points for easy reading

#### Methodology:
- Organize by phases or components
- Include technical details
- Show progression and timeline

#### Expected Outcomes:
- Both scientific and practical impacts
- Quantifiable results when possible
- Broader implications for the field

## 📁 File Organization

### Project Display:
- **Projects Page**: Shows all projects in grid layout
- **Individual Pages**: Each project has its own detailed page
- **Homepage**: May feature active or important projects

### Project Categories:
- **Active**: Currently ongoing projects
- **Completed**: Finished projects with results
- **Planning**: Projects in development phase
- **On Hold**: Temporarily suspended projects

## 🔄 Updating Existing Projects

To update an existing project:

1. **Edit the Markdown file** in `content/projects/`
2. **Update the front matter** if needed (status, dates, team members)
3. **Replace the image** if needed (same filename or update the path)
4. **Add new sections** as the project progresses
5. **Refresh the website** to see changes

## 🎨 Image Requirements

### Technical Specifications:
- **Format**: JPG or PNG
- **Size**: 800x600 pixels (4:3 aspect ratio recommended)
- **File size**: Under 1MB
- **Quality**: High resolution, professional appearance

### Best Practices:
- Use project-related images (equipment, team, results)
- Ensure good composition and lighting
- Include people when appropriate (team photos, lab work)
- Use consistent style across all project images

## 🚨 Common Issues & Solutions

### Issue: Project not appearing
**Solution**: 
1. Check the Markdown file is saved in `content/projects/`
2. Verify the front matter syntax is correct
3. Refresh the browser (Ctrl+F5 for hard refresh)

### Issue: Image not displaying
**Solution**: Check the file path in the `image` field. Make sure the image exists in `assets/media/`

### Issue: Wrong display order
**Solution**: Adjust the `order` number in the front matter. Lower numbers appear first.

### Issue: Dates not displaying correctly
**Solution**: Ensure dates are in YYYY-MM-DD format (e.g., "2024-03-15")

## 📝 Example Project Types

### Research Projects:
- "Neural-Machine Interface Development"
- "Adaptive Control for Exoskeletons"
- "Human-in-the-Loop Optimization"

### Clinical Projects:
- "Stroke Rehabilitation Study"
- "Spinal Cord Injury Recovery"
- "Aging Population Mobility"

### Technology Development:
- "Wearable Sensor Design"
- "Real-Time Signal Processing"
- "User Interface Development"

## ✅ Checklist

Before publishing a project:

- [ ] Image is properly sized and optimized
- [ ] Markdown file is saved in `content/projects/`
- [ ] Front matter includes all required fields
- [ ] Dates are in correct format (YYYY-MM-DD)
- [ ] Content is comprehensive and professional
- [ ] Team information is accurate and complete
- [ ] Funding information is up-to-date
- [ ] Website is tested locally before deployment

## 📊 Project Management Tips

### Content Organization:
- **Regular Updates**: Update project status and progress quarterly
- **Milestone Tracking**: Document key achievements and milestones
- **Publication Integration**: Link to related publications and presentations
- **Team Updates**: Keep team member information current

### Technical Details:
- **Methodology**: Provide sufficient detail for technical audiences
- **Results**: Include preliminary results and findings
- **Challenges**: Document technical challenges and solutions
- **Future Work**: Outline next steps and future directions

### Collaboration:
- **Partnerships**: Highlight collaborations and partnerships
- **Funding**: Keep funding information current
- **Resources**: Document equipment and facilities
- **Opportunities**: Mention collaboration opportunities

---

*Need help? Check the [Troubleshooting](../troubleshooting.md) guide or contact the website administrator.* 