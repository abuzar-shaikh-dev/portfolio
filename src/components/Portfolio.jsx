import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  // 1. useState for navigation tabs and dark mode theme toggle
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(false);

  // 2. useEffect to update the browser document title dynamically
  useEffect(() => {
    document.title = `Abuzar Shaikh | ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`;
  }, [activeTab]);

  // 3. useEffect to handle dark mode class injection into body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="header-left">
          <img 
            src="/public/abuzar.jpg" 
            alt="Abuzar Shaikh" 
            className="profile-img" 
            onError={(e) => { e.target.style.display = 'none'; }} // Fallback if image path is pending
          />
          <div>
            <h1>Abuzar Shaikh</h1>
            <p>AI & ML Engineering Student @LTCE | Seeking AI/ML & SDE Internships | Ex-AI Automation Intern @ IBM SkillsBuild</p>
          </div>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Navigation Buttons */}
      <nav className="portfolio-nav">
        <button 
          className={activeTab === 'about' ? 'active' : ''} 
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button 
          className={activeTab === 'projects' ? 'active' : ''} 
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button 
          className={activeTab === 'contact' ? 'active' : ''} 
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </nav>

      {/* Conditional Rendering of Content */}
      <main className="portfolio-content">
        {activeTab === 'about' && (
          <section className="tab-section">
            <h2>About Me</h2>
            <p>
              I am a B.Tech student in AI & ML at Lokmanya Tilak College of Engineering, passionate about building scalable, intelligent systems and solving complex computational challenges. My work bridges artificial intelligence, software engineering, and core computer science fundamentals—turning theoretical concepts into intuitive, production-ready software.
            </p>
            <p>
              Recently, I completed an intensive <strong>AI Automation & Intelligent Solutions Internship with IBM SkillsBuild</strong> (conducted with AICTE and BharatCares), where I engineered end-to-end automation workflows, system architectures, and hands-on machine learning pipelines.
            </p>
            <h3>Technical Core & Expertise:</h3>
            <ul>
              <li><strong>Languages & Core CS:</strong> Python, Data Structures & Algorithms, Operating Systems Concepts</li>
              <li><strong>Backend & AI Workflows:</strong> Flask, RESTful APIs, Machine Learning Pipelines, AI Automation</li>
              <li><strong>Frontend & UI/UX Design:</strong> HTML5, CSS3, Modern UI Design, Responsive Interfaces</li>
              <li><strong>Tools & Systems:</strong> System Architecture Design, Git/GitHub, Process Scheduling Simulation</li>
            </ul>
            <p>
              Connect with me online:{' '}
              <a href="https://www.linkedin.com/in/abuzar-a-shaikh/" target="_blank" rel="noopener noreferrer" className="email-link">
                LinkedIn
              </a>
              {' | '}
              <a href="https://github.com/tracbyte" target="_blank" rel="noopener noreferrer" className="email-link">
                GitHub
              </a>
            </p>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="tab-section">
            <h2>My Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>GyanMitra</h3>
                <p>
                  An intelligent AI-driven platform designed for automated knowledge workflows and interactive learning solutions.
                </p>
                <p><strong>My Role:</strong> UI/UX & Flask Developer - designed the user interface and built backend web services using Flask.</p>
                <a href="https://github.com/tracbyte/gyanmitra" target="_blank" rel="noopener noreferrer" className="email-link">View Repository</a>
              </div>
              <div className="project-card">
                <h3>CPU Scheduler Simulator (Mini Project-I SEM IV)</h3>
                <p>
                  A system utility that bridges OS theory and live kernel data—monitoring active processes and simulating CPU scheduling efficiency in real-time.
                </p>
                <p><strong>My Role:</strong> UI/UX & Frontend Engineer - designed and built the responsive Glassmorphic dashboard interface.</p>
                <a href="https://github.com/tracbyte/cpu-scheduler" target="_blank" rel="noopener noreferrer" className="email-link">View Repository</a>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="tab-section">
            <h2>Get In Touch</h2>
            <p>I am currently open to AI/ML and Software Engineering (SDE) Internship opportunities. Feel free to reach out via email or connect with me professionally:</p>
            <p>
              📧 Email:{' '}
              <a href="mailto:abuzar_07@yahoo.com" className="email-link">abuzar_07@yahoo.com</a>
            </p>
            <p>
              💼 LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/abuzar-a-shaikh/" target="_blank" rel="noopener noreferrer" className="email-link">
                abuzar-a-shaikh
              </a>
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
