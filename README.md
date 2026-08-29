# Developer Portfolio

A sleek, responsive, and high-performance personal portfolio website built to showcase my professional background, technical skills, projects, and achievements.

## 🚀 Features

- **Modern Architecture:** Fast builds and hot module replacement powered by Vite.
- **Component-Driven Design:** Built using a modular and maintainable directory structure inside `src`.
- **CI/CD Integrated:** Automated build and deployment pipelines configured via GitHub Actions.
- **Responsive Web Design:** Fully optimized for smooth browsing across mobile, tablet, and desktop devices.

## 📂 Project Structure

```text
├── .github/workflows/   # CI/CD deployment configuration pipelines
├── public/              # Static assets (images, icons, resumes, favicon)
├── src/                 # Application source code (components, styles, pages)
├── index.html           # Main HTML entry point
├── package.json         # Node.js dependencies and project scripts
└── vite.config.js       # Vite bundler configuration configurations
```

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v18.0.0 or higher recommended)
- npm or yarn package manager

## 💻 Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if you use yarn: yarn install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   # or: yarn dev
   ```

4. **View your site:**
   Open your browser and navigate to the address shown in your terminal (usually `http://localhost:5173`).

## 🛠️ Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server with live-reloading.
- `npm run build`: Compiles and optimizes the application for production into a `dist/` folder.
- `npm run preview`: Locally previews the production build.

## 🚀 Deployment

This project includes automated workflows. Any push or pull request to the `main` branch triggers the GitHub Actions pipeline located in `.github/workflows/` to automatically build and deploy the updated application (e.g., to GitHub Pages, Vercel, or Netlify).
