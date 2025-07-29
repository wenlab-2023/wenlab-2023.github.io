// Content loader for individual Markdown files and BibTeX
class ContentLoader {
    constructor() {
        this.people = [];
        this.news = [];
        this.publications = [];
    }

    // Parse YAML front matter
    parseFrontMatter(content) {
        const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = content.match(frontMatterRegex);
        
        if (match) {
            const frontMatter = {};
            const frontMatterLines = match[1].split('\n');
            
            frontMatterLines.forEach(line => {
                const colonIndex = line.indexOf(':');
                if (colonIndex > 0) {
                    const key = line.substring(0, colonIndex).trim();
                    let value = line.substring(colonIndex + 1).trim();
                    
                    // Remove quotes if present
                    if ((value.startsWith('"') && value.endsWith('"')) || 
                        (value.startsWith("'") && value.endsWith("'"))) {
                        value = value.slice(1, -1);
                    }
                    
                    frontMatter[key] = value;
                }
            });
            
            return {
                frontMatter,
                content: match[2].trim()
            };
        }
        
        return {
            frontMatter: {},
            content: content.trim()
        };
    }

    // Load all people
    async loadPeople() {
        try {
            // Load the dynamic file listing with cache busting
            const timestamp = new Date().getTime();
            const fileListingsResponse = await fetch(`content/file_listings.json?t=${timestamp}`);
            const fileListings = await fileListingsResponse.json();
            const peopleFiles = fileListings.people || [];
            
            const peoplePromises = peopleFiles.map(async (file) => {
                try {
                    const timestamp = new Date().getTime();
                    const response = await fetch(`${file}?t=${timestamp}`);
                    const content = await response.text();
                    const { frontMatter, content: markdownContent } = this.parseFrontMatter(content);
                    
                    return {
                        ...frontMatter,
                        content: window.markdownParser.parse(markdownContent),
                        order: parseInt(frontMatter.order) || 999
                    };
                } catch (error) {
                    console.warn(`Could not load ${file}:`, error);
                    return null;
                }
            });
            
            const people = await Promise.all(peoplePromises);
            this.people = people.filter(p => p !== null).sort((a, b) => a.order - b.order);
            
            return this.people;
        } catch (error) {
            console.error('Error loading people:', error);
            return [];
        }
    }

    // Load all news
    async loadNews() {
        try {
            // Load the dynamic file listing
            const fileListingsResponse = await fetch('content/file_listings.json');
            const fileListings = await fileListingsResponse.json();
            const newsFiles = fileListings.news || [];
            
            const newsPromises = newsFiles.map(async (file) => {
                try {
                    const response = await fetch(file);
                    const content = await response.text();
                    const { frontMatter, content: markdownContent } = this.parseFrontMatter(content);
                    
                    return {
                        ...frontMatter,
                        content: window.markdownParser.parse(markdownContent),
                        order: parseInt(frontMatter.order) || 999,
                        filename: file.split('/').pop() // Store the filename
                    };
                } catch (error) {
                    console.warn(`Could not load ${file}:`, error);
                    return null;
                }
            });
            
            const news = await Promise.all(newsPromises);
            this.news = news.filter(n => n !== null).sort((a, b) => a.order - b.order);
            
            return this.news;
        } catch (error) {
            console.error('Error loading news:', error);
            return [];
        }
    }

    async loadProjects() {
        try {
            // Load the dynamic file listing
            const fileListingsResponse = await fetch('content/file_listings.json');
            const fileListings = await fileListingsResponse.json();
            const projectFiles = fileListings.projects || [];
            
            const projectPromises = projectFiles.map(async (file) => {
                try {
                    const response = await fetch(file);
                    const content = await response.text();
                    const { frontMatter, content: markdownContent } = this.parseFrontMatter(content);
                    
                    return {
                        ...frontMatter,
                        content: window.markdownParser.parse(markdownContent),
                        order: parseInt(frontMatter.order) || 999,
                        filename: file.split('/').pop() // Store the filename
                    };
                } catch (error) {
                    console.warn(`Could not load ${file}:`, error);
                    return null;
                }
            });
            
            const projects = await Promise.all(projectPromises);
            this.projects = projects.filter(p => p !== null).sort((a, b) => a.order - b.order);
            
            return this.projects;
        } catch (error) {
            console.error('Error loading projects:', error);
            return [];
        }
    }

    // Parse BibTeX
    parseBibTeX(bibtexContent) {
        const entries = [];
        const entryRegex = /@(\w+)\{([^,]+),([\s\S]*?)\n\}/g;
        let match;
        
        while ((match = entryRegex.exec(bibtexContent)) !== null) {
            const type = match[1];
            const key = match[2];
            const fields = match[3];
            
            const entry = {
                type: type,
                key: key,
                title: '',
                author: '',
                journal: '',
                booktitle: '',
                year: '',
                doi: '',
                abstract: '',
                note: ''
            };
            
            // Parse fields
            const fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}/g;
            let fieldMatch;
            
            while ((fieldMatch = fieldRegex.exec(fields)) !== null) {
                const fieldName = fieldMatch[1].toLowerCase();
                const fieldValue = fieldMatch[2];
                
                if (entry.hasOwnProperty(fieldName)) {
                    entry[fieldName] = fieldValue;
                }
            }
            
            entries.push(entry);
        }
        
        return entries;
    }

    // Load publications from BibTeX
    async loadPublications() {
        try {
            const response = await fetch('content/publications.bib');
            const bibtexContent = await response.text();
            this.publications = this.parseBibTeX(bibtexContent);
            
            // Sort by year (newest first)
            this.publications.sort((a, b) => parseInt(b.year) - parseInt(a.year));
            
            return this.publications;
        } catch (error) {
            console.error('Error loading publications:', error);
            return [];
        }
    }

    // Get publications by type
    getPublicationsByType(type) {
        if (type === 'all') {
            return this.publications;
        }
        
        return this.publications.filter(pub => {
            if (type === 'journal') {
                return pub.type === 'article';
            } else if (type === 'conference') {
                return pub.type === 'inproceedings';
            } else if (type === 'preprint') {
                return pub.type === 'misc' && pub.note && pub.note.toLowerCase().includes('preprint');
            } else if (type === 'book') {
                return pub.type === 'book' || pub.type === 'incollection';
            } else if (type === 'patent') {
                return pub.type === 'patent';
            }
            return false;
        });
    }

    // Get people by group
    getPeopleByGroup(group) {
        return this.people.filter(person => person.group === group);
    }

    // Get featured news
    getFeaturedNews() {
        return this.news.filter(item => item.featured === 'true');
    }

    // Render people HTML
    renderPeopleHTML(people, groupName) {
        // For alumni, use the compact one-line format
        if (groupName === 'Alumni') {
            return people.map(person => `
                <div class="alumni-item">
                    <p class="alumni-line">${person.content}</p>
                </div>
            `).join('');
        }
        
        // For active members, use the new format similar to the screenshot
        return people.map(person => {
            // Determine the primary link for the name
            let nameLink = '';
            if (person.website && person.website.trim() !== '') {
                nameLink = person.website;
            } else if (person.scholar && person.scholar.trim() !== '') {
                nameLink = person.scholar;
            } else if (person.orcid && person.orcid.trim() !== '') {
                nameLink = person.orcid;
            }
            
            return `
                <div class="person-card">
                    <div class="person-avatar">
                        <img src="${person.avatar}" alt="${person.name}" onerror="this.style.display='none'">
                    </div>
                    <div class="person-info">
                        ${nameLink ? 
                            `<a href="${nameLink}" target="_blank" class="person-name person-name-link">${person.name}</a>` : 
                            `<div class="person-name">${person.name}</div>`
                        }
                        <p class="person-role">${person.role}</p>
                        <div class="person-brief">${person.brief || person.content}</div>
                        <div class="person-social">
                            ${person.email ? `<a href="mailto:${person.email}" title="Email"><i class="fas fa-envelope"></i></a>` : ''}
                            ${person.scholar && person.scholar.trim() !== '' ? `<a href="${person.scholar}" target="_blank" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>` : ''}
                            ${person.orcid && person.orcid.trim() !== '' ? `<a href="${person.orcid}" target="_blank" title="ORCID"><i class="fab fa-orcid"></i></a>` : ''}
                            ${person.github && person.github.trim() !== '' ? `<a href="${person.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
                            ${person.linkedin && person.linkedin.trim() !== '' ? `<a href="${person.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>` : ''}
                            ${person.website && person.website.trim() !== '' ? `<a href="${person.website}" target="_blank" title="Website"><i class="fas fa-globe"></i></a>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Render publications HTML
    renderPublicationsHTML(publications) {
        return publications.map((pub, index) => {
            const pubNumber = index + 1;
            const ieeeFormat = this.formatIEEE(pub, pubNumber);
            
            return `
                <div class="publication-item" data-type="${pub.type === 'article' ? 'journal' : pub.type === 'inproceedings' ? 'conference' : pub.type === 'misc' ? 'preprint' : pub.type}">
                    <div class="publication-number">[${pubNumber}]</div>
                    <div class="publication-content">
                        <div class="publication-ieee">
                            ${ieeeFormat}
                        </div>
                        <div class="publication-links">
                            ${pub.doi ? `<a href="https://doi.org/${pub.doi}" target="_blank" class="publication-link"><i class="fas fa-external-link-alt"></i> DOI</a>` : ''}
                            <span class="publication-type-badge ${pub.type === 'article' ? 'journal' : pub.type === 'inproceedings' ? 'conference' : pub.type === 'misc' ? 'preprint' : pub.type}">
                                ${pub.type === 'article' ? 'Journal' : pub.type === 'inproceedings' ? 'Conference' : pub.type === 'misc' ? 'Preprint' : pub.type}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Format publication in IEEE style
    formatIEEE(pub, number) {
        let ieeeFormat = '';
        
        // Format authors
        const authors = pub.author.split(' and ').map(author => author.trim());
        const formattedAuthors = authors.map(author => {
            const parts = author.split(', ');
            if (parts.length === 2) {
                return parts[1] + ' ' + parts[0]; // Last, First -> First Last
            }
            return author;
        }).join(', ');
        
        // Format title
        const title = pub.title.replace(/[{}]/g, ''); // Remove BibTeX braces
        
        // Format venue
        let venue = '';
        if (pub.journal) {
            venue = `<em>${pub.journal}</em>`;
        } else if (pub.booktitle) {
            venue = `<em>${pub.booktitle}</em>`;
        } else if (pub.type === 'misc') {
            venue = '<em>Preprint</em>';
        }
        
        // Format year
        const year = pub.year;
        
        // Format DOI
        const doi = pub.doi ? `, doi: ${pub.doi}` : '';
        
        // Construct IEEE format
        ieeeFormat = `${formattedAuthors}, "${title}," ${venue}, ${year}${doi}.`;
        
        return ieeeFormat;
    }

    // Render news HTML
    renderNewsHTML(news) {
        return news.map(item => {
            // Extract news ID from the original filename
            const newsId = item.filename ? item.filename.replace('.md', '') : item.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
            
            return `
                <div class="news-card" onclick="window.location.href='news-events-template.html?id=${newsId}'">
                    <div class="news-card-content">
                        <div class="news-card-meta">
                            <span class="news-date"><i class="fas fa-calendar"></i> ${item.date}</span>
                            <span class="news-category"><i class="fas fa-${this.getCategoryIcon(item.category)}"></i> ${item.category}</span>
                        </div>
                        <h3>${item.title}</h3>
                        <div class="news-card-excerpt">
                            ${this.getNewsExcerpt(item.content)}
                        </div>
                        <div class="news-card-link">
                            <span>Click to view details <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getNewsExcerpt(content) {
        // Get the first paragraph (text before the next ## heading)
        const firstParagraph = content.split('##')[0].trim();
        
        // Remove any remaining HTML tags and get first 200 characters
        const textOnly = firstParagraph.replace(/<[^>]*>/g, '');
        
        if (textOnly.length > 200) {
            return textOnly.substring(0, 200) + '...';
        }
        return textOnly;
    }

    renderProjectsHTML() {
        return this.projects.map(project => {
            // Extract project ID from the original filename
            const projectId = project.filename ? project.filename.replace('.md', '') : project.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
            
            return `
                <div class="project-card" onclick="window.location.href='project-template.html?id=${projectId}'">
                    <div class="project-card-content">
                        <h3>${project.title}</h3>
                        <div class="project-card-meta">
                            <div class="pi"><strong>PI:</strong> ${project.principal_investigator}</div>
                            <div class="status"><strong>Status:</strong> ${project.status}</div>
                            <div class="funding"><strong>Funding:</strong> ${project.funding}</div>
                        </div>
                        <div class="project-card-excerpt">
                            ${this.getProjectExcerpt(project.content)}
                        </div>
                        <div class="project-card-link">
                            <span>Click to view details <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getProjectExcerpt(content) {
        // Remove the "Project Overview" section and get the first paragraph
        let cleanContent = content.replace(/## Project Overview\s*/i, '');
        
        // Find the first paragraph (text before the next ## heading)
        const firstParagraph = cleanContent.split('##')[0].trim();
        
        // Remove any remaining HTML tags and get first 200 characters
        const textOnly = firstParagraph.replace(/<[^>]*>/g, '');
        
        if (textOnly.length > 200) {
            return textOnly.substring(0, 200) + '...';
        }
        return textOnly;
    }

    getCategoryIcon(category) {
        const icons = {
            'Award': 'trophy',
            'Event': 'users',
            'Research': 'flask',
            'Conference': 'presentation'
        };
        return icons[category] || 'newspaper';
    }

    // Load events
    async loadEvents() {
        try {
            // Load the dynamic file listing
            const fileListingsResponse = await fetch('content/file_listings.json?v=' + Date.now());
            const fileListings = await fileListingsResponse.json();
            const eventFiles = fileListings.events || [];
            
            const eventPromises = eventFiles.map(async (file) => {
                try {
                    const response = await fetch(file + '?v=' + Date.now());
                    const content = await response.text();
                    const { frontMatter, content: markdownContent } = this.parseFrontMatter(content);
                    
                    return {
                        ...frontMatter,
                        content: window.markdownParser.parse(markdownContent),
                        order: parseInt(frontMatter.order) || 999,
                        filename: file.split('/').pop() // Store the filename
                    };
                } catch (error) {
                    console.warn(`Could not load ${file}:`, error);
                    return null;
                }
            });
            
            const events = await Promise.all(eventPromises);
            console.log('Loaded events:', events);
            this.events = events.filter(e => e !== null).sort((a, b) => a.order - b.order);
            console.log('Filtered events:', this.events);
            
            return this.events;
        } catch (error) {
            console.error('Error loading events:', error);
            return [];
        }
    }

    // Render events HTML
    renderEventsHTML(events) {
        return events.map(item => {
            // Extract event ID from the original filename
            const eventId = item.filename ? item.filename.replace('.md', '') : item.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
            
            return `
                <div class="event-card" onclick="window.location.href='news-events-template.html?id=${eventId}'">
                    <div class="event-card-content">
                        <div class="event-card-meta">
                            <span class="event-date"><i class="fas fa-calendar"></i> ${item.date}</span>
                            <span class="event-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
                            <span class="event-type"><i class="fas fa-${this.getEventTypeIcon(item.type)}"></i> ${item.type}</span>
                        </div>
                        <h3>${item.title}</h3>
                        <div class="event-card-excerpt">
                            ${this.getEventExcerpt(item.content)}
                        </div>
                        <div class="event-card-link">
                            <span>Click to view details <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getEventExcerpt(content) {
        // Get the first paragraph (text before the next ## heading)
        const firstParagraph = content.split('##')[0].trim();
        
        // Remove any remaining HTML tags and get first 200 characters
        const textOnly = firstParagraph.replace(/<[^>]*>/g, '');
        
        if (textOnly.length > 200) {
            return textOnly.substring(0, 200) + '...';
        }
        return textOnly;
    }

    getEventTypeIcon(type) {
        const icons = {
            'Conference': 'presentation',
            'Workshop': 'chalkboard-teacher',
            'Open House': 'home',
            'Seminar': 'graduation-cap',
            'Symposium': 'users'
        };
        return icons[type] || 'calendar';
    }
}

// Global content loader instance
window.contentLoader = new ContentLoader(); 