// Simple Markdown to HTML parser
class MarkdownParser {
    constructor() {
        this.rules = [
            // Headers
            { pattern: /^### (.*$)/gim, replacement: '<h3>$1</h3>' },
            { pattern: /^## (.*$)/gim, replacement: '<h2>$1</h2>' },
            { pattern: /^# (.*$)/gim, replacement: '<h1>$1</h1>' },
            
            // Bold and italic
            { pattern: /\*\*(.*?)\*\*/g, replacement: '<strong>$1</strong>' },
            { pattern: /\*(.*?)\*/g, replacement: '<em>$1</em>' },
            
            // Images (must come before links to avoid conflicts)
            { pattern: /!\[([^\]]*)\]\(([^)]+)\)/g, replacement: '<img src="$2" alt="$1" style="max-width: 100%; height: auto; margin: 20px 0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">' },
            
            // Links
            { pattern: /\[([^\]]+)\]\(([^)]+)\)/g, replacement: '<a href="$2" target="_blank">$1</a>' },
            
            // Line breaks
            { pattern: /\n\n/g, replacement: '</p><p>' },
            
            // Lists
            { pattern: /^\* (.*$)/gim, replacement: '<li>$1</li>' },
            { pattern: /^- (.*$)/gim, replacement: '<li>$1</li>' },
            
            // Horizontal rules
            { pattern: /^---$/gim, replacement: '<hr>' },
            
            // Code blocks
            { pattern: /`([^`]+)`/g, replacement: '<code>$1</code>' },
            
            // Paragraphs
            { pattern: /^([^#\-\*\n].*$)/gim, replacement: '<p>$1</p>' }
        ];
    }

    parse(markdown) {
        let html = markdown;
        
        // Process each rule
        this.rules.forEach(rule => {
            html = html.replace(rule.pattern, rule.replacement);
        });
        
        // Wrap in paragraphs if not already wrapped
        if (!html.includes('<p>')) {
            html = '<p>' + html + '</p>';
        }
        
        // Fix list formatting
        html = html.replace(/<p><li>/g, '<ul><li>');
        html = html.replace(/<\/li><\/p>/g, '</li></ul>');
        html = html.replace(/<\/li><p><li>/g, '</li><li>');
        
        // Clean up empty paragraphs
        html = html.replace(/<p><\/p>/g, '');
        html = html.replace(/<p>\s*<\/p>/g, '');
        
        return html;
    }

    // Parse specific content sections
    parseSection(markdown, sectionName) {
        const sections = this.splitSections(markdown);
        return sections[sectionName] || '';
    }

    splitSections(markdown) {
        const sections = {};
        const lines = markdown.split('\n');
        let currentSection = 'main';
        let currentContent = [];

        lines.forEach(line => {
            if (line.startsWith('## ') && !line.startsWith('### ')) {
                if (currentContent.length > 0) {
                    sections[currentSection] = currentContent.join('\n').trim();
                }
                currentSection = line.replace('## ', '').toLowerCase().replace(/\s+/g, '_');
                currentContent = [];
            } else {
                currentContent.push(line);
            }
        });

        if (currentContent.length > 0) {
            sections[currentSection] = currentContent.join('\n').trim();
        }

        return sections;
    }

    // Parse people data
    parsePeople(markdown) {
        const people = [];
        const sections = this.splitSections(markdown);
        
        Object.keys(sections).forEach(section => {
            if (section.includes('investigators') || section.includes('researchers') || section.includes('students')) {
                const peopleInSection = this.parsePeopleInSection(sections[section]);
                people.push(...peopleInSection);
            }
        });
        
        return people;
    }

    parsePeopleInSection(content) {
        const people = [];
        const lines = content.split('\n');
        let currentPerson = null;

        lines.forEach(line => {
            if (line.startsWith('### ')) {
                if (currentPerson) {
                    people.push(currentPerson);
                }
                currentPerson = {
                    name: line.replace('### ', ''),
                    role: '',
                    email: '',
                    bio: '',
                    interests: [],
                    social: {}
                };
            } else if (currentPerson) {
                if (line.includes('**Role:**')) {
                    currentPerson.role = line.replace('**Role:**', '').trim();
                } else if (line.includes('**Email:**')) {
                    currentPerson.email = line.replace('**Email:**', '').trim();
                } else if (line.includes('**Google Scholar:**')) {
                    currentPerson.social.scholar = line.replace('**Google Scholar:**', '').trim();
                } else if (line.includes('**GitHub:**')) {
                    currentPerson.social.github = line.replace('**GitHub:**', '').trim();
                } else if (line.includes('**Research Interests:**')) {
                    // Parse interests list
                } else if (line.trim() && !line.startsWith('**')) {
                    if (!currentPerson.bio) {
                        currentPerson.bio = line.trim();
                    }
                }
            }
        });

        if (currentPerson) {
            people.push(currentPerson);
        }

        return people;
    }

    // Parse publications
    parsePublications(markdown) {
        const publications = [];
        const sections = this.splitSections(markdown);
        
        Object.keys(sections).forEach(section => {
            if (section.includes('papers') || section.includes('conference') || section.includes('preprint')) {
                const pubsInSection = this.parsePublicationsInSection(sections[section], section);
                publications.push(...pubsInSection);
            }
        });
        
        return publications;
    }

    parsePublicationsInSection(content, type) {
        const publications = [];
        const lines = content.split('\n');
        let currentPub = null;

        lines.forEach(line => {
            if (line.startsWith('### ')) {
                if (currentPub) {
                    publications.push(currentPub);
                }
                currentPub = {
                    title: line.replace('### ', ''),
                    type: type,
                    authors: '',
                    journal: '',
                    conference: '',
                    year: '',
                    doi: '',
                    abstract: ''
                };
            } else if (currentPub) {
                if (line.includes('**Authors:**')) {
                    currentPub.authors = line.replace('**Authors:**', '').trim();
                } else if (line.includes('**Journal:**')) {
                    currentPub.journal = line.replace('**Journal:**', '').trim();
                } else if (line.includes('**Conference:**')) {
                    currentPub.conference = line.replace('**Conference:**', '').trim();
                } else if (line.includes('**Year:**')) {
                    currentPub.year = line.replace('**Year:**', '').trim();
                } else if (line.includes('**DOI:**')) {
                    currentPub.doi = line.replace('**DOI:**', '').trim();
                } else if (line.includes('**Abstract:**')) {
                    currentPub.abstract = line.replace('**Abstract:**', '').trim();
                } else if (line.trim() && !line.startsWith('**') && !line.startsWith('---')) {
                    if (currentPub.abstract) {
                        currentPub.abstract += ' ' + line.trim();
                    }
                }
            }
        });

        if (currentPub) {
            publications.push(currentPub);
        }

        return publications;
    }

    // Parse news
    parseNews(markdown) {
        const news = [];
        const sections = markdown.split('---');
        
        sections.forEach(section => {
            if (section.trim()) {
                const newsItem = this.parseNewsItem(section.trim());
                if (newsItem.title) {
                    news.push(newsItem);
                }
            }
        });
        
        return news;
    }

    parseNewsItem(content) {
        const lines = content.split('\n');
        const newsItem = {
            title: '',
            date: '',
            category: '',
            image: '',
            excerpt: '',
            body: ''
        };

        let isInBody = false;
        let bodyLines = [];

        lines.forEach(line => {
            if (line.startsWith('## ')) {
                newsItem.title = line.replace('## ', '');
            } else if (line.includes('**Date:**')) {
                newsItem.date = line.replace('**Date:**', '').trim();
            } else if (line.includes('**Category:**')) {
                newsItem.category = line.replace('**Category:**', '').trim();
            } else if (line.includes('**Image:**')) {
                newsItem.image = line.replace('**Image:**', '').trim();
            } else if (line.trim() && !line.startsWith('**')) {
                if (!isInBody) {
                    newsItem.excerpt = line.trim();
                    isInBody = true;
                } else {
                    bodyLines.push(line.trim());
                }
            }
        });

        newsItem.body = bodyLines.join('\n');
        return newsItem;
    }
}

// Global parser instance
window.markdownParser = new MarkdownParser(); 