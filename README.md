# 🚀 Customisable Developer Portfolio Template

A sleek, responsive, and high-performance developer portfolio template built with **Vite** and a component-driven structure. Designed for developers who want a modern personal website that is easy to customise, deploy, and maintain.

## 🌟 Features

- **Blazing Fast:** Powered by Vite for near-instant hot module replacement (HMR) and optimized builds.
- **Easy Customisation:** Centralised content structure to quickly swap in your own details, projects, and social links.
- **CI/CD Ready:** Pre-configured GitHub Actions workflow for automated deployments.
- **Fully Responsive:** Looks sharp on mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Bundler:** Vite
- **Core:** React / Vue (configured via `src/`)
- **Deployment:** GitHub Actions

---

## 💻 Getting Started (Local Setup)

Follow these steps to get a local copy of this portfolio running on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed (v18.0.0 or higher recommended).

### 2. Clone the Repository
```bash
git clone https://github.com
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
# or if you use yarn: yarn install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to see the site running locally.

---

## ✍️ How to Customise with Your Details

To make this portfolio yours, follow these quick adjustment steps:

1. **Update Personal Information:** Open the `src/` directory. Modify the profile components or data files to update your name, bio, skills, and work experience.
2. **Swap Assets:** Replace the placeholder images, icons, and your resume PDF inside the `public/` directory. Make sure to keep the file names identical or update the paths in your code.
3. **Configure Metadata:** Update the website title, description, and favicon inside `index.html` for better SEO.

---

## 🚀 How to Build and Deploy

### Production Build
When you are ready to ship your website, generate an optimized production build:
```bash
npm run build
```
This creates a `dist/` folder containing the static HTML, CSS, and JS files ready for hosting.

### Automated Deployment (GitHub Actions)
This repository includes an automated pipeline under `.github/workflows/`. To automatically deploy your portfolio to **GitHub Pages**:
1. Go to your repository settings on GitHub.
2. Navigate to **Pages** -> **Build and deployment**.
3. Under *Source*, select **GitHub Actions**.
4. Push your changes to the `main` branch, and the workflow will handle the rest!

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork it, use it, and modify it to showcase your unique developer journey!
