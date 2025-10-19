# Contributing to Resume & Portfolio Tools

First off, thank you for considering contributing to this project! 🎉

This document provides guidelines for contributing to the Resume & Portfolio Tools suite.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

---

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone.

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Trolling, insulting/derogatory comments
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

---

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:
1. Check the [Issues](https://github.com/wanghongsheng01/wanghongsheng01.github.io/issues) page
2. Verify the bug is reproducible
3. Check if it's already been reported

When reporting bugs, include:
- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Browser and OS versions**
- **Any error messages**

Example:
```markdown
**Bug**: PDF parsing fails for large files

**Steps to Reproduce**:
1. Go to resume-to-homepage.html
2. Upload a PDF > 5MB
3. Click generate

**Expected**: Parse successfully
**Actual**: Browser freezes

**Environment**:
- Browser: Chrome 120.0
- OS: macOS 14.0
- File size: 6.2 MB
```

### Suggesting Features

Feature suggestions are welcome! Please:
1. Check existing issues first
2. Provide clear use case
3. Explain benefits to users
4. Consider implementation complexity

Template:
```markdown
**Feature**: Add Excel resume parsing

**Use Case**: Many recruiters use Excel spreadsheets

**Benefits**:
- Wider format support
- Better for structured data
- Common in HR departments

**Implementation Ideas**:
- Use SheetJS library
- Similar to current PDF/Word parsing
- Extract cell data intelligently
```

### Adding New Templates

We always welcome new template designs!

Requirements:
- Responsive design (mobile, tablet, desktop)
- Clean, professional appearance
- Consistent with existing design system
- Well-commented CSS
- Browser-tested

Steps:
1. Create template function in the tool file
2. Add preview in template selector
3. Test on multiple devices
4. Update documentation
5. Submit PR with screenshots

### Improving Documentation

Documentation improvements are highly valued:
- Fix typos or unclear wording
- Add missing information
- Improve examples
- Translate to other languages
- Add diagrams or screenshots

---

## Development Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.)
- Git
- Basic HTML/CSS/JavaScript knowledge

### Local Development

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR-USERNAME/wanghongsheng01.github.io.git
cd wanghongsheng01.github.io

# 2. Create a new branch
git checkout -b feature/your-feature-name

# 3. Start a local server
python3 -m http.server 8000
# or
npx serve

# 4. Open in browser
open http://localhost:8000/tools.html
```

### Project Structure

```
wanghongsheng01.github.io/
├── index.html                 # Personal homepage
├── tools.html                 # Tools landing page
├── resume-to-homepage.html    # Basic converter
├── resume-builder-pro.html    # Pro converter
├── portfolio-builder.html     # Portfolio generator
├── README.md                  # Main documentation
├── QUICKSTART.md             # Quick start guide
├── CONTRIBUTING.md           # This file
├── LICENSE                   # MIT license
├── sitemap.xml              # SEO sitemap
├── robots.txt               # Crawler rules
└── CHANGELOG.md             # Version history
```

### Key Technologies

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations
- **JavaScript ES6+**: Async/await, Promises
- **PDF.js**: PDF parsing
- **Mammoth.js**: Word document parsing
- **GitHub Pages**: Hosting

---

## Coding Standards

### HTML

- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Proper indentation (2 spaces)
- Validate with W3C validator

Example:
```html
<section class="tool-section" role="region" aria-label="Upload Area">
  <h2>Upload Your Resume</h2>
  <div class="upload-zone">
    <!-- Content -->
  </div>
</section>
```

### CSS

- Use CSS Grid and Flexbox for layouts
- Mobile-first responsive design
- Consistent naming (kebab-case)
- Group related properties
- Comment complex rules

Example:
```css
/* Tool Card Component */
.tool-card {
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Appearance */
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Spacing */
  padding: 2rem;
  margin-bottom: 2rem;

  /* Animation */
  transition: transform 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
}
```

### JavaScript

- Use ES6+ features
- Clear variable names
- Functions should do one thing
- Add comments for complex logic
- Handle errors gracefully

Example:
```javascript
/**
 * Parses a PDF file and extracts text content
 * @param {File} file - The PDF file to parse
 * @returns {Promise<string>} Extracted text
 */
async function parsePDF(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(item => item.str).join(' ');
    }

    return text;
  } catch (error) {
    console.error('PDF parsing failed:', error);
    throw new Error('Failed to parse PDF file');
  }
}
```

### Design System

Follow the existing design system:

**Colors**:
```css
--primary: #667eea;
--secondary: #764ba2;
--success: #11998e;
--danger: #e74c3c;
--text: #333333;
```

**Typography**:
```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--h1: 3em;
--h2: 2em;
--body: 1em;
```

**Spacing**:
```css
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

---

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(portfolio): add new template style

Add a new "Minimalist" template option for portfolio builder.
This template uses more whitespace and clean typography.

Closes #42

---

fix(resume): improve PDF parsing accuracy

Fixed issue where PDF parser was missing contact information
in certain resume formats. Updated regex patterns to be more
inclusive.

Fixes #38

---

docs(readme): add browser compatibility section

Added detailed information about which browsers are supported
and minimum version requirements.
```

### Rules

- Use present tense ("add" not "added")
- Use imperative mood ("move" not "moves")
- First line max 72 characters
- Reference issues and PRs
- Explain what and why, not how

---

## Pull Request Process

### Before Submitting

1. **Test thoroughly**
   - Test on multiple browsers
   - Test on different screen sizes
   - Test with various file types
   - Check for console errors

2. **Update documentation**
   - Update README if needed
   - Add to CHANGELOG
   - Update QUICKSTART if applicable

3. **Code quality**
   - Follow coding standards
   - Add comments where needed
   - Remove console.logs
   - Check for typos

### Submitting PR

1. **Create PR with clear title**
   ```
   feat: Add dark mode toggle
   ```

2. **Fill out PR template**
   ```markdown
   ## Description
   Adds a dark mode toggle button to all tools.

   ## Type of Change
   - [x] New feature
   - [ ] Bug fix
   - [ ] Documentation update

   ## Testing
   - [x] Tested on Chrome 120
   - [x] Tested on Firefox 119
   - [x] Tested on Safari 17
   - [x] Mobile responsive

   ## Screenshots
   [Attach screenshots here]

   ## Checklist
   - [x] Code follows style guidelines
   - [x] Self-reviewed code
   - [x] Commented complex code
   - [x] Updated documentation
   - [x] No breaking changes
   ```

3. **Link related issues**
   ```markdown
   Closes #45
   Related to #32
   ```

### Review Process

1. Maintainers will review your PR
2. Address any feedback
3. Once approved, PR will be merged
4. Your contribution will be credited in CHANGELOG

### After Merge

1. Update your fork
   ```bash
   git checkout master
   git pull upstream master
   ```

2. Delete feature branch
   ```bash
   git branch -d feature/your-feature-name
   ```

---

## Testing Guidelines

### Manual Testing Checklist

#### For Tool Features
- [ ] File upload works (click and drag-drop)
- [ ] Parsing completes without errors
- [ ] Preview renders correctly
- [ ] Download button works
- [ ] Copy button works
- [ ] Error messages are clear

#### For UI Components
- [ ] Layout doesn't break on small screens
- [ ] All buttons are clickable
- [ ] Hover effects work
- [ ] Animations are smooth
- [ ] Colors are consistent

#### Cross-Browser Testing
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)

#### Responsive Testing
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)

### Performance Testing

Check that:
- Page loads in < 2 seconds
- File processing is < 5 seconds
- No memory leaks
- Smooth animations (60fps)

### Accessibility Testing

Verify:
- Keyboard navigation works
- Screen reader compatible
- Sufficient color contrast
- ARIA labels present
- Focus indicators visible

---

## Documentation

### When to Update Docs

Update documentation when you:
- Add a new feature
- Change existing behavior
- Fix a bug that affects usage
- Add new dependencies
- Change project structure

### Documentation Files

- **README.md**: Overview, features, installation
- **QUICKSTART.md**: Quick tutorials and tips
- **CONTRIBUTING.md**: This file
- **CHANGELOG.md**: Version history
- **Code comments**: Explain complex logic

### Documentation Style

- Use clear, simple language
- Provide examples
- Add screenshots where helpful
- Keep it up-to-date
- Link to related docs

---

## Questions?

If you have questions:

1. Check existing documentation
2. Search closed issues
3. Open a new issue with "Question" label
4. Be specific about your question

---

## Recognition

All contributors will be:
- Listed in CHANGELOG
- Credited in commits
- Acknowledged in releases

Thank you for contributing! 🙏

---

**Project Maintainer**: Hongsheng Wang
**License**: MIT
**Last Updated**: 2025-10-19
