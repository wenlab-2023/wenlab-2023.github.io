# Content Management Guide

This website now uses a simple Markdown-based content management system similar to Jekyll. All content is stored in Markdown files, making it easy to edit and maintain.

## File Structure

```
content/
├── home.md                    # Homepage content
├── contact.md                 # Contact page content
├── publications.bib           # Publications in BibTeX format
├── people/                    # Individual people files
│   ├── yue-wen.md
│   ├── jirui-fu.md
│   └── ali.md
└── news/                      # Individual news files
    ├── rehabweek-2020.md
    ├── lab-party-2020.md
    ├── neural-interface-publication.md
    └── iros-2023.md
```

## Adding New Content

### Adding a New Person

1. Create a new Markdown file in `content/people/` (e.g., `content/people/jane-doe.md`)
2. Use this template:

```markdown
---
name: "Jane Doe, Ph.D."
role: "Graduate Student Researcher"
email: "jane.doe@ucf.edu"
avatar: "content/authors/jane_doe/avatar.jpg"
group: "Graduate Student Researchers"
order: 2
---

## Bio
Brief biography of the person.

## Research Interests
- Interest 1
- Interest 2
- Interest 3

## Education
- **Ph.D.** in Field - University (Year)
- **M.S.** in Field - University (Year)
- **B.S.** in Field - University (Year)

## Social Links
- **Google Scholar:** https://scholar.google.com/...
- **GitHub:** https://github.com/...
- **ORCID:** https://orcid.org/...
```

3. The person will automatically appear on the People page, sorted by their group and order.

### Adding News/Events

1. Create a new Markdown file in `content/news/` (e.g., `content/news/new-publication.md`)
2. Use this template:

```markdown
---
title: "Your News Title"
date: "2024-01-15"
category: "Research"
image: "path/to/image.jpg"
featured: true
order: 5
---

Your news content here. This can be multiple paragraphs.

You can use **bold** and *italic* text, and include [links](https://example.com).
```

3. The news item will automatically appear on the News page, sorted by date and order.

### Adding Projects

1. Create a new Markdown file in `content/projects/` (e.g., `content/projects/my-new-project.md`)
2. Use this template:

### About Us Page

The About Us page (`about.html`) displays content from `content/about.md` with two main sections:

1. **Introduction**: Brief introduction of the lab with multiple paragraphs
2. **Research Areas**: Detailed list of research areas with explanations

To edit the About Us content:
1. Modify `content/about.md`
2. Use `## Introduction` and `## Research Areas` as section headers
3. Add detailed explanations for each research area under `### Research Area Name`

### Adding Projects

```markdown
---
title: "Your Project Title"
principal_investigator: "Dr. Principal Investigator Name"
team_members: "Team Member 1, Team Member 2"
order: 1
image: "https://via.placeholder.com/400x250/3498db/ffffff?text=Project"
status: "Active"
funding: "Funding Source"
start_date: "2024-01-01"
end_date: "2027-12-31"
---

## Project Overview

Brief description of your project.

## Research Objectives

1. **Objective 1**: Description
2. **Objective 2**: Description

## Technical Approach

Detailed methodology and approach.

## Key Achievements

- Achievement 1
- Achievement 2

## Publications

Related papers and publications.

## Team and Collaborations

People involved in the project.

## Funding and Support

Financial backing and support.
```

3. The project will appear as a card on the Projects page
4. Clicking the card will take you to a detailed project page with all content

### Adding Publications

1. Add a new entry to `content/publications.bib` using BibTeX format:

```bibtex
@article{key2024title,
  title={Your Publication Title},
  author={Author, A. and Author, B.},
  journal={Journal Name},
  year={2024},
  doi={10.1234/example.12345678},
  abstract={Your abstract here.}
}
```

2. The publication will automatically appear on the Publications page, sorted by year.

## Front Matter Options

### People Files
- `name`: Full name with title
- `role`: Position/role in the lab
- `email`: Email address
- `avatar`: Path to avatar image
- `group`: Group category (Principal Investigators, Postdoctoral Researchers, Graduate Student Researchers, etc.)
- `order`: Sorting order within the group

### News Files
- `title`: News title
- `date`: Publication date (YYYY-MM-DD)
- `category`: Category (Award, Event, Research, Conference)
- `image`: Path to featured image
- `featured`: Whether to show on homepage (true/false)
- `order`: Sorting order

### Project Files
- `title`: Project title
- `principal_investigator`: Name of the PI
- `team_members`: Comma-separated list of team members
- `order`: Sorting order
- `image`: Path to project image
- `status`: Project status (Active, Completed, Planning)
- `funding`: Funding source
- `start_date`: Project start date (YYYY-MM-DD)
- `end_date`: Project end date (YYYY-MM-DD)

### Event Files
- `title`: Event title
- `date`: Event date (YYYY-MM-DD format)
- `location`: Event location
- `type`: Event type (Conference, Workshop, Open House, etc.)
- `image`: Path to event image
- `featured`: Whether to feature this event (true/false)
- `order`: Display order (lower numbers appear first)

## Supported Markdown Features

- **Headers**: `#`, `##`, `###`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Links**: `[text](url)`
- **Lists**: `- item` or `* item`
- **Code**: `` `code` ``
- **Horizontal rules**: `---`

## Running the Website

1. Serve the files using a local web server (due to CORS restrictions for loading Markdown files)
2. You can use Python's built-in server: `python -m http.server 8000`
3. Or use Node.js: `npx serve .`
4. Open `http://localhost:8000` in your browser

## Tips

- Always use the front matter format with `---` delimiters
- Keep image paths relative to the root directory
- Use consistent naming conventions for files
- Test your changes by refreshing the page
- The website automatically loads and displays new content when you add files

## Troubleshooting

- If content doesn't appear, check the browser console for errors
- Make sure file paths in front matter are correct
- Verify that Markdown syntax is valid
- Check that the content loader includes your new files in the file lists 