# Portfolio Website - Susara Perera

A modern, responsive portfolio website showcasing the work and skills of Susara Perera, a Full Stack Developer and Software Engineering student at SLIIT.

## 🌟 Features

- **Modern Design**: Built with React and Tailwind CSS for a sleek, professional look
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Animations**: Smooth animations using AOS (Animate On Scroll) library
- **Dynamic Content**: Typewriter effect for role animation
- **Professional Sections**:
  - Hero section with profile photo and dynamic role display
  - About section with personal introduction
  - Education timeline
  - Skills showcase with progress bars
  - Project portfolio with filtering
  - Contact form with social media links
  - Professional footer

## 🚀 Live Demo

[View Live Website](https://susara-perera.github.io/Portfolio_Susara/) *(Update this with your actual deployment URL)*

## 📱 Screenshots

### Desktop View

![Desktop Screenshot](./screenshots/desktop-hero.png)

### Mobile View

![Mobile Screenshot](./screenshots/mobile-view.png)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS 3.1.6
- **Icons**: React Icons
- **Animations**: AOS (Animate On Scroll)
- **Build Tool**: Create React App
- **Development**: VS Code with custom tasks

## 🏗️ Project Structure

```text
Portfolio_Susara/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Education.js
│   │   │   ├── Footer.js
│   │   │   ├── Hero.js
│   │   │   ├── Navbar.js
│   │   │   ├── Projects.js
│   │   │   └── Skills.js
│   │   ├── assets/
│   │   │   └── Profile.jpeg
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── .vscode/
│   └── tasks.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/susara-perera/Portfolio_Susara.git
   cd Portfolio_Susara
   ```

2. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Open in browser**
   - The app will open automatically at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Updating Personal Information

1. **Profile Photo**: Replace `frontend/src/assets/Profile.jpeg` with your photo
2. **Personal Details**: Update information in the following components:
   - `Hero.js` - Name and roles
   - `About.js` - Personal description and highlights
   - `Education.js` - Educational background
   - `Skills.js` - Technical and soft skills
   - `Projects.js` - Portfolio projects
   - `Contact.js` - Contact information and social links

### Color Scheme

The website uses a modern gradient color scheme defined in `tailwind.config.js`:

- Primary: Cyan to Blue gradient
- Secondary: Indigo to Purple gradient
- Accent: Pink and yellow highlights

### Adding New Sections

1. Create a new component in `frontend/src/components/`
2. Import and add it to `App.js`
3. Update navigation links in `Navbar.js`

## 🌐 Deployment

### Netlify (Recommended)

1. Build the project:

   ```bash
   cd frontend && npm run build
   ```

2. Deploy the `build` folder to Netlify

### Vercel

1. Connect your GitHub repository to Vercel
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/build`

### GitHub Pages

1. Install gh-pages:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:

   ```json
   "homepage": "https://susara-perera.github.io/Portfolio_Susara",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Susara Perera** - Full Stack Developer & Software Engineering Student

- 🎓 Second-year Software Engineering student at SLIIT
- 💼 Specialized in React, Node.js, and modern web technologies
- 🌱 Currently seeking internship opportunities
- 📫 Contact: [susara.perera@outlook.com](mailto:susara.perera@outlook.com)

## 🔗 Connect

- **GitHub**: [susara-perera](https://github.com/susara-perera)
- **LinkedIn**: [susara-perera](https://linkedin.com/in/susara-perera)
- **Email**: [susara.perera@outlook.com](mailto:susara.perera@outlook.com)

---

⭐ Star this repository if you found it helpful!
