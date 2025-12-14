# 🎨 Portfolio Website - Eka Putra (Kyuutora)

Modern, professional portfolio website showcasing Java development and game development projects with dark mode design and smooth animations.

## ✨ Features

- **Modern Dark Mode Design** - Professional dark theme with vibrant accent colors
- **Responsive Layout** - Perfect display on all devices (desktop, tablet, mobile)
- **Smooth Animations** - Engaging animations using CSS keyframes and Intersection Observer
- **Interactive Components** - Typing effect, parallax scrolling, hover effects
- **Case Study Format** - Detailed project presentations with problem-solution-impact structure
- **Contact Integration** - Easy-to-use contact form with social media links
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Option 1: Direct Open
1. Open `index.html` in any modern web browser
2. No build process required!

### Option 2: Local Server (Recommended)
If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
Portofolio/
├── index.html              # Main HTML file
├── styles/
│   ├── theme.css          # Design tokens & variables
│   ├── global.css         # Global styles & reset
│   ├── components.css     # Component styles
│   └── animations.css     # Animation keyframes
├── scripts/
│   ├── main.js            # Core functionality
│   └── animations.js      # Animation logic
└── README.md              # This file
```

## 🎯 Sections

1. **Hero** - Introduction with typing effect and gradient animations
2. **About** - Personal story, skills, and statistics
3. **Projects** - Featured projects with case study format
4. **Experience** - Timeline of education and work experience
5. **Contact** - Contact form and social media links
6. **Footer** - Quick links and copyright info

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Inter font family

## 🎨 Customization

### Changing Colors
Edit `styles/theme.css` to customize the color scheme:

```css
:root {
    --color-accent-primary: #3b82f6;    /* Primary blue */
    --color-accent-secondary: #8b5cf6;  /* Purple */
    --color-accent-tertiary: #06b6d4;   /* Cyan */
}
```

### Updating Content
All content is in `index.html`. Search for:
- Hero section: Search for `class="hero"`
- Projects: Search for `class="projects"`
- Experience: Search for `class="timeline"`

### Adding Projects
Duplicate a `.project-card` div in the Projects section and update:
- Project title
- Description
- Tech stack tags
- GitHub link

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (limited support)

## 🔧 Performance

- **Optimized Animations** - Uses CSS transforms and opacity for 60fps
- **Lazy Loading** - Images and animations load on scroll
- **Minimal Dependencies** - No heavy frameworks
- **Fast Load Time** - ~200KB total size (without images)

## 📝 Future Enhancements

- [ ] Add project screenshots/images
- [ ] Integrate with a backend for contact form
- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add more project case studies
- [ ] Create downloadable CV/Resume

## 👤 Contact

- **Email**: putra.dvpr@gmail.com
- **LinkedIn**: Eka Putra
- **Instagram**: @kyuuto_san
- **GitHub**: [putra-as-kyuutora](https://github.com/putra-as-kyuutora/)
- **WhatsApp**: +62 831-7857-9534

## 📄 License

This project is open source and available for personal use.

---

**Made with ❤️ by Eka Putra | Built with HTML, CSS & JavaScript**
