# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

This is a **static portfolio and resume tools website** hosted on GitHub Pages. The project provides a suite of free, browser-based tools for converting resumes into personal homepages and creating portfolio websites.

**Live URL**: https://wanghongsheng01.github.io/

**Tech Stack**: Pure HTML/CSS/JavaScript (no frameworks), PDF.js, Mammoth.js

---

## Core Tools Architecture

### 1. Tool Suite Components

The project consists of 4 main HTML tools:
- **tools.html** - Navigation hub for all tools
- **resume-to-homepage.html** - Basic resume to homepage converter (PDF/Word/LaTeX/TXT support)
- **resume-builder-pro.html** - Enhanced version with dual input modes (upload + manual entry)
- **portfolio-builder.html** - Portfolio/project showcase generator with multiple templates
- **cv-builder.html** - LaTeX resume converter

Additionally:
- **index.html** - Personal homepage (academic profile)
- **portfolio.html**, **products.html** - Static portfolio pages
- **demos/** - Project demos (MagiQ, CITIC Futures, Mysteel, etc.)

### 2. Key Technical Patterns

**Self-contained Architecture**:
- Each tool is a single HTML file with embedded CSS and JavaScript
- No external dependencies except CDN libraries (PDF.js, Mammoth.js)
- All file processing happens client-side (privacy-first design)

**Common Features**:
- Drag-and-drop file upload
- Real-time iframe preview
- One-click HTML download
- Responsive design (CSS Grid/Flexbox)
- Gradient-based modern UI

**File Parsing**:
- PDF: Mozilla PDF.js (v3.11.174)
- Word: Mammoth.js (v1.6.0)
- LaTeX: Custom regex parsing
- Text: Simple text extraction

---

## Development Commands

### Local Development
```bash
# Start a local server (preferred method)
python3 -m http.server 8000

# Alternative with Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server (if installed)
npx http-server -p 8000

# Access at http://localhost:8000
```

### Testing
```bash
# No formal test suite - manual testing required
# Open tools in browser and test with sample files

# Test checklist:
# 1. Upload various file formats (PDF, DOCX, TXT, LaTeX)
# 2. Verify parsing accuracy
# 3. Check preview rendering
# 4. Test download functionality
# 5. Validate on mobile/tablet (responsive design)
# 6. Cross-browser testing (Chrome, Firefox, Safari, Edge)
```

### Deployment
```bash
# This repo uses GitHub Pages
# Any push to master branch auto-deploys

git add .
git commit -m "feat: description"
git push origin master

# Site updates at https://wanghongsheng01.github.io/ within 1-2 minutes
```

---

## Code Structure & Conventions

### HTML Tool Structure
Each tool follows this pattern:
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <!-- Meta tags, title -->
    <style>
        /* Embedded CSS - typically 200-400 lines */
        /* Uses CSS Grid/Flexbox */
        /* Gradient backgrounds: #667eea to #764ba2 */
    </style>
</head>
<body>
    <!-- UI Elements -->
    <script src="CDN_LIBRARY_IF_NEEDED"></script>
    <script>
        /* JavaScript logic - typically 300-600 lines */
        /* File upload handlers */
        /* Parsing functions */
        /* Preview generation */
        /* Download functionality */
    </script>
</body>
</html>
```

### Color Scheme
- Primary gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Background: Gradient purple/blue
- Cards: White with `border-radius: 20px`
- Shadows: `0 20px 60px rgba(0, 0, 0, 0.3)`

### Responsive Breakpoints
- Desktop: > 968px (2-column grid)
- Mobile/Tablet: ≤ 968px (1-column stack)

---

## Key Implementation Details

### File Upload Pattern
```javascript
// Drag-and-drop + click upload
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    processFile(file);
});
```

### PDF Parsing (using PDF.js)
```javascript
pdfjsLib.getDocument({data: arrayBuffer}).promise.then(pdf => {
    // Extract text from all pages
    // Parse sections: contact, education, experience
    // Generate structured HTML
});
```

### Preview Generation
```javascript
// Use srcdoc for iframe preview
previewFrame.srcdoc = generatedHTML;

// Fallback for older browsers
previewFrame.contentDocument.write(generatedHTML);
```

### Download Functionality
```javascript
const blob = new Blob([htmlContent], {type: 'text/html'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'my-homepage.html';
a.click();
```

---

## Common Tasks

### Adding a New Tool
1. Create new HTML file: `new-tool.html`
2. Copy structure from existing tool (e.g., `resume-to-homepage.html`)
3. Implement specific parsing/generation logic
4. Add entry in `tools.html` navigation
5. Update `sitemap.xml` with new URL
6. Document in README.md

### Fixing Parsing Issues
1. Check regex patterns in JavaScript section
2. Test with problematic file
3. Add console.log debugging
4. Update parser logic
5. Verify with multiple file formats

### Updating Styles
1. Locate `<style>` block in HTML file
2. Modify CSS (maintain gradient theme)
3. Test responsive behavior (resize browser)
4. Check across browsers

### Adding Documentation
- Project docs go in root: `*.md` files
- Use consistent format (see existing docs)
- Update README.md table of contents if needed

---

## Important Files

### Configuration
- **robots.txt** - SEO crawler permissions
- **sitemap.xml** - Search engine sitemap (must be updated when adding pages)
- **.nojekyll** - Disables Jekyll processing on GitHub Pages
- **.gitignore** - Git ignore rules

### Documentation
- **README.md** - Main project documentation (Chinese)
- **QUICKSTART.md** - 5-minute getting started guide
- **CONTRIBUTING.md** - Contribution guidelines
- **PRODUCT_DELIVERY.md** - Product delivery report
- **FINAL_REPORT.md** - Project completion report
- **PERFORMANCE.md** - Performance optimization notes
- **FAQ.md** - Frequently asked questions
- **CHANGELOG.md** - Version history

### Assets
- **jemdoc.css** - Academic homepage styles
- **personal-photo.jpg**, **whs.jpg** - Profile images
- **magiq-qr.jpg**, **wechat-qr.jpg** - QR codes

---

## Known Limitations

1. **File Size**: Large PDFs (>10MB) may cause browser slowdown
2. **Parsing Accuracy**: Complex resume layouts may not parse perfectly
3. **Browser Support**: Requires modern browser with FileReader API
4. **CDN Dependency**: Requires internet for PDF.js/Mammoth.js (loaded from CDN)
5. **No Backend**: All processing is client-side; no server-side validation

---

## SEO & Performance

### SEO Optimizations
- Semantic HTML tags
- Meta descriptions in all pages
- Sitemap.xml for indexing
- Robots.txt for crawler guidance
- Mobile-friendly responsive design

### Performance Considerations
- Inline CSS/JS (reduces HTTP requests)
- Lazy iframe loading
- Blob URLs for downloads (memory efficient)
- CDN for external libraries
- No heavy frameworks (vanilla JS)

---

## Demos Directory Structure

The `demos/` folder contains live project showcases:
- **magiq/** - MagiQ AI dialogue platform demo
- **citic-futures/** - CITIC Futures training platform demo
- **mysteel/** - Mysteel industry platform demo
- **capitaLand-jtbd/** - CapitaLand JTBD analysis
- **cv-builder/** - CV builder demo files
- **sci-template-trans/** - Scientific template translator

Each demo is a self-contained SPA or static site.

---

## Debugging Tips

### Testing File Upload
```javascript
// Add logging to file processing
console.log('File type:', file.type);
console.log('File size:', file.size);
console.log('Parsed content:', parsedData);
```

### Preview Issues
- Check iframe `srcdoc` support
- Verify HTML validity (use W3C validator)
- Test with simpler content first
- Check browser console for errors

### Download Not Working
- Verify Blob creation
- Check MIME type (`text/html`)
- Test in different browsers
- Ensure filename is valid

---

## Best Practices

1. **Keep Tools Self-Contained**: Each HTML file should work independently
2. **Privacy First**: Never send user data to servers
3. **Progressive Enhancement**: Work without JS for basic features (where possible)
4. **Accessibility**: Use semantic HTML, ARIA labels where needed
5. **Mobile First**: Design for mobile, enhance for desktop
6. **Documentation**: Keep Chinese docs (primary language) updated
7. **Git Commits**: Use conventional commits format: `feat:`, `fix:`, `docs:`

---

## External References

- **PDF.js Docs**: https://mozilla.github.io/pdf.js/
- **Mammoth.js Docs**: https://github.com/mwilliamson/mammoth.js
- **GitHub Pages Docs**: https://docs.github.com/pages
- **FileReader API**: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
