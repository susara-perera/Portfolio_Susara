# Susara Perera - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and experience as a Software Engineering student.

![Portfolio Preview](./preview.png)

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and dynamic content
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Built With

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: AOS (Animate On Scroll)
- **Build Tool**: Create React App
- **Deployment**: Netlify/Vercel ready

## 📋 Sections

1. **Hero/Home** - Introduction with animated typing effect
2. **About** - Personal information and highlights
3. **Education** - Academic background and timeline
4. **Skills** - Technical and professional skills with progress bars
5. **Projects** - Showcase of development projects with filters
6. **Contact** - Contact form and information
7. **Footer** - Links and additional information

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/susara-perera/portfolio.git
   cd portfolio/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**

   ```text
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```text
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── assets/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors

The portfolio uses a custom color scheme defined in `tailwind.config.js`. You can modify the colors by updating the color palette:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Content

Update the personal information in each component:

- **Hero.js**: Name, roles, and introduction
- **About.js**: Personal description and highlights
- **Education.js**: Academic background
- **Skills.js**: Technical and professional skills
- **Projects.js**: Your projects and portfolio items
- **Contact.js**: Contact information

### Images

Replace placeholder images with your actual photos:

- Profile photos in Hero and About sections
- Project screenshots in Projects section

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and lazy loading

## 📧 Contact Form

The contact form is currently set up with a demo submission. To make it functional:

1. **EmailJS**: Integrate with EmailJS for client-side email sending
2. **Netlify Forms**: Use Netlify's built-in form handling
3. **Custom Backend**: Create your own API endpoint

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Vercel

1. Import your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with one click

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add homepage to package.json: `"homepage": "https://yourusername.github.io/portfolio"`
3. Add deploy scripts:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

### Susara Perera

- Email: [susara.perera@outlook.com](mailto:susara.perera@outlook.com)
- LinkedIn: [linkedin.com/in/susara-perera](https://linkedin.com/in/susara-perera)
- GitHub: [github.com/susara-perera](https://github.com/susara-perera)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by AOS library
- Built with Create React App and Tailwind CSS

---

⭐ Don't forget to star this repository if you found it helpful!
