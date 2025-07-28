# Adding Publications

This guide will help you add new publications to the WEN Lab website using the BibTeX format.

## 📋 Prerequisites

- Basic knowledge of BibTeX syntax
- Publication information (authors, title, journal/conference, year, etc.)
- DOI or URL for the publication (if available)

## 🎯 Step-by-Step Process

### Step 1: Locate the BibTeX File

1. **Navigate to**: `content/publications.bib`
2. **Open the file** in a text editor
3. **Add your new publication** at the end of the file

### Step 2: BibTeX Entry Template

```bibtex
@article{fu2024neural,
  title={Neural-Machine Interface Design for Wearable Robotics},
  author={Fu, Jirui and Al-Ramadan, Ali and Wen, Yue and Rodriguez, Clara},
  journal={IEEE Transactions on Neural Systems and Rehabilitation Engineering},
  volume={32},
  number={3},
  pages={789--801},
  year={2024},
  publisher={IEEE},
  doi={10.1109/TNSRE.2024.1234567},
  url={https://ieeexplore.ieee.org/document/1234567},
  type={journal}
}

@inproceedings{wen2024adaptive,
  title={Adaptive Control Strategies for Lower-Limb Exoskeletons},
  author={Wen, Yue and Fu, Jirui and Smith, Jane},
  booktitle={2024 IEEE International Conference on Robotics and Automation (ICRA)},
  pages={1234--1240},
  year={2024},
  organization={IEEE},
  doi={10.1109/ICRA.2024.1234567},
  url={https://ieeexplore.ieee.org/document/1234567},
  type={conference}
}

@article{alramadan2024machine,
  title={Machine Learning Approaches for Real-Time Signal Processing in Neural Interfaces},
  author={Al-Ramadan, Ali and Fu, Jirui and Johnson, Mike},
  journal={Journal of Neural Engineering},
  volume={21},
  number={2},
  pages={025001},
  year={2024},
  publisher={IOP Publishing},
  doi={10.1088/1741-2552/abc123},
  url={https://iopscience.iop.org/article/10.1088/1741-2552/abc123},
  type={journal}
}
```

### Step 3: BibTeX Entry Structure

#### Required Fields:

- **`@article`** or **`@inproceedings`**: Entry type
- **`{citation_key}`**: Unique identifier (e.g., `fu2024neural`)
- **`title`**: Publication title
- **`author`**: Author names (use "and" to separate multiple authors)
- **`year`**: Publication year
- **`type`**: Publication type (`journal`, `conference`, `preprint`, `book`, `patent`)

#### For Journal Articles:

- **`journal`**: Journal name
- **`volume`**: Volume number
- **`number`**: Issue number (optional)
- **`pages`**: Page range
- **`publisher`**: Publisher name

#### For Conference Papers:

- **`booktitle`**: Conference name
- **`pages`**: Page range
- **`organization`**: Organizing body (e.g., IEEE, ACM)

#### Optional Fields:

- **`doi`**: Digital Object Identifier
- **`url`**: Direct link to the publication
- **`abstract`**: Publication abstract (not displayed on website)
- **`keywords`**: Keywords for categorization
- **`month`**: Publication month
- **`address`**: Conference location (for conference papers)

### Step 4: Citation Key Naming Convention

Use a consistent naming convention for citation keys:

```
{lastname_first_author}{year}{first_word_title}
```

Examples:
- `fu2024neural` (Fu et al., 2024, "Neural-Machine Interface...")
- `wen2024adaptive` (Wen et al., 2024, "Adaptive Control...")
- `alramadan2024machine` (Al-Ramadan et al., 2024, "Machine Learning...")

### Step 5: Publication Types

The website supports these publication types:

#### Journal Articles (`type={journal}`)
- Peer-reviewed journal publications
- Include volume, number, pages, publisher
- Example: IEEE Transactions, Science Robotics, Nature Communications

#### Conference Papers (`type={conference}`)
- Conference proceedings and presentations
- Include booktitle, pages, organization
- Example: ICRA, IROS, EMBC, RehabWeek

#### Preprints (`type={preprint}`)
- Preprints and working papers
- Include repository information
- Example: arXiv, bioRxiv, medRxiv

#### Books (`type={book}`)
- Book chapters and monographs
- Include publisher and chapter information
- Example: Springer, Elsevier, CRC Press

#### Patents (`type={patent}`)
- Patents and patent applications
- Include patent number and filing date
- Example: US Patents, International Patents

## 📁 File Organization

### BibTeX File Structure:
```
content/publications.bib
├── Journal Articles
├── Conference Papers
├── Preprints
├── Books
└── Patents
```

### Website Display:
- **Publications Page**: Shows all publications with filtering by type
- **IEEE Format**: Publications are displayed in IEEE citation format
- **Numbered List**: Publications are automatically numbered
- **Filtering**: Users can filter by publication type

## 🔄 Updating Existing Publications

To update an existing publication:

1. **Find the entry** in `content/publications.bib`
2. **Edit the relevant fields** (title, authors, DOI, etc.)
3. **Save the file**
4. **Refresh the website** to see changes

## 🚨 Common Issues & Solutions

### Issue: Publication not appearing
**Solution**: 
1. Check the BibTeX syntax is correct
2. Verify the `type` field matches exactly: `journal`, `conference`, `preprint`, `book`, or `patent`
3. Ensure the entry is properly closed with `}`
4. Refresh the browser (Ctrl+F5 for hard refresh)

### Issue: Authors not displaying correctly
**Solution**: 
1. Use "and" to separate multiple authors
2. Include full names (First Last)
3. Check for special characters or accents

### Issue: DOI link not working
**Solution**: 
1. Verify the DOI is correct and complete
2. Include the full URL format: `https://doi.org/10.1109/...`
3. Test the link in a browser

### Issue: Wrong publication type
**Solution**: Check the `type` field matches exactly one of the allowed values

## 📝 Example Entries by Type

### Journal Article:
```bibtex
@article{fu2024neural,
  title={Neural-Machine Interface Design for Wearable Robotics},
  author={Fu, Jirui and Al-Ramadan, Ali and Wen, Yue},
  journal={IEEE Transactions on Neural Systems and Rehabilitation Engineering},
  volume={32},
  number={3},
  pages={789--801},
  year={2024},
  publisher={IEEE},
  doi={10.1109/TNSRE.2024.1234567},
  type={journal}
}
```

### Conference Paper:
```bibtex
@inproceedings{wen2024adaptive,
  title={Adaptive Control Strategies for Lower-Limb Exoskeletons},
  author={Wen, Yue and Fu, Jirui and Smith, Jane},
  booktitle={2024 IEEE International Conference on Robotics and Automation (ICRA)},
  pages={1234--1240},
  year={2024},
  organization={IEEE},
  doi={10.1109/ICRA.2024.1234567},
  type={conference}
}
```

### Preprint:
```bibtex
@article{alramadan2024machine,
  title={Machine Learning Approaches for Real-Time Signal Processing},
  author={Al-Ramadan, Ali and Fu, Jirui},
  journal={arXiv preprint arXiv:2401.12345},
  year={2024},
  url={https://arxiv.org/abs/2401.12345},
  type={preprint}
}
```

### Book Chapter:
```bibtex
@inbook{fu2024wearable,
  title={Wearable Robotics: Design and Control},
  author={Fu, Jirui and Wen, Yue},
  editor={Smith, John and Johnson, Mike},
  booktitle={Advances in Rehabilitation Engineering},
  pages={123--145},
  year={2024},
  publisher={Springer},
  address={New York},
  doi={10.1007/978-3-030-12345-6_8},
  type={book}
}
```

### Patent:
```bibtex
@patent{fu2024neural,
  title={Neural Interface System for Wearable Robotics},
  author={Fu, Jirui and Al-Ramadan, Ali},
  number={US Patent 11,234,567},
  year={2024},
  month={March},
  type={patent}
}
```

## ✅ Checklist

Before adding a publication:

- [ ] BibTeX syntax is correct
- [ ] Citation key follows naming convention
- [ ] All required fields are included
- [ ] Publication type is correctly specified
- [ ] DOI/URL is valid and working
- [ ] Author names are properly formatted
- [ ] File is saved in `content/publications.bib`
- [ ] Website is tested locally before deployment

## 📊 Publication Management Tips

### Content Organization:
- **Regular Updates**: Add new publications as they are published
- **Consistent Formatting**: Use consistent author name formatting
- **Complete Information**: Include DOI and URLs when available
- **Categorization**: Use appropriate publication types

### Quality Control:
- **Proofreading**: Check for typos and formatting errors
- **Validation**: Verify DOIs and URLs work correctly
- **Consistency**: Maintain consistent citation style
- **Completeness**: Include all relevant publication information

### Collaboration:
- **Team Coordination**: Coordinate with team members on publication updates
- **External Collaborators**: Include all authors and collaborators
- **Acknowledgment**: Properly credit funding sources and institutions
- **Open Access**: Include open access links when available

## 🔧 Advanced Features

### Custom Filtering:
The website automatically categorizes publications by type and displays them in tabs.

### Citation Formatting:
Publications are displayed in IEEE format with automatic numbering.

### Search and Filter:
Users can filter publications by type and search by title or author.

### Export Options:
Publications can be exported in various formats for different purposes.

---

*Need help? Check the [Troubleshooting](../troubleshooting.md) guide or contact the website administrator.* 