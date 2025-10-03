'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [heroData, setHeroData] = useState({
    title: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch('https://n8n.konstantinluksha.ru/webhook/6c2760af-2644-46aa-9440-4b6dabd5d944', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          // Обрабатываем массив данных
          if (Array.isArray(data) && data.length > 0) {
            const firstItem = data[0];
            setHeroData({
              title: firstItem.Title || 'Build the Future with Modern Web Design',
              description: firstItem.Description || 'Create stunning, responsive web applications with our comprehensive design system. Built for developers who demand excellence in both aesthetics and functionality.'
            });
          }
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
        // Устанавливаем дефолтные значения при ошибке
        setHeroData({
          title: 'Build the Future with Modern Web Design',
          description: 'Create stunning, responsive web applications with our comprehensive design system. Built for developers who demand excellence in both aesthetics and functionality.'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="#" className="logo">
              NextDesign
            </a>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a href="#features" className="nav-link">Features</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="#" className="btn-primary">Get Started</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section" style={{ textAlign: 'center', background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%)' }}>
        <div className="container">
          {isLoading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                border: '4px solid rgba(255, 255, 255, 0.3)', 
                borderTop: '4px solid #ffffff', 
                borderRadius: '50%', 
                animation: 'spin 1s linear infinite' 
              }}></div>
              <p className="body-text" style={{ color: 'var(--text-secondary)' }}>
                Загрузка данных...
              </p>
            </div>
          ) : (
            <>
              <h1 className="hero-text" style={{ marginBottom: '24px' }}>
                {heroData.title}
              </h1>
              <p className="body-text" style={{ fontSize: '1.25rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                {heroData.description}
              </p>
            </>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <a href="#features" className="btn-primary">Explore Features</a>
            <a href="#docs" className="btn-secondary">View Documentation</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="heading-1" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Powerful Features
          </h2>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
            Everything you need to create exceptional user experiences
          </p>
          
          <div className="grid">
            {/* Feature Card 1 */}
            <div className="feature-card">
              <div style={{ marginBottom: '16px' }}>
                <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                Lightning Fast Performance
              </h3>
              <p className="body-text">
                Optimized for speed with advanced caching, code splitting, and image optimization. 
                Your users will experience blazing-fast load times across all devices.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card highlight">
              <div style={{ marginBottom: '16px' }}>
                <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="heading-2" style={{ marginBottom: '12px', color: '#000000' }}>
                Responsive Design System
              </h3>
              <p className="body-text" style={{ color: '#000000' }}>
                Mobile-first approach with flexible grid systems and adaptive components. 
                Your designs will look perfect on any screen size, from mobile to desktop.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card">
              <div style={{ marginBottom: '16px' }}>
                <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                Developer Experience
              </h3>
              <p className="body-text">
                Built with TypeScript, hot reloading, and comprehensive documentation. 
                Focus on building features, not configuring tools.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="feature-card">
              <div style={{ marginBottom: '16px' }}>
                <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1l3 6h6l-5 4 2 6-6-3-6 3 2-6-5-4h6l3-6z"/>
                </svg>
              </div>
              <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                Modern UI Components
              </h3>
              <p className="body-text">
                Pre-built components with consistent styling and behavior. 
                Customize them to match your brand or use them as-is for rapid development.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="feature-card">
              <div style={{ marginBottom: '16px' }}>
                <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                Accessibility First
              </h3>
              <p className="body-text">
                WCAG compliant components with proper ARIA labels, keyboard navigation, 
                and screen reader support. Inclusive design for all users.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="feature-card">
              <div style={{ marginBottom: '16px' }}>
                <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                SEO Optimized
              </h3>
              <p className="body-text">
                Server-side rendering, meta tag management, and performance optimization 
                ensure your content ranks well in search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ background: 'rgba(26, 26, 26, 0.3)' }}>
        <div className="container">
          <div className="content-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-1" style={{ marginBottom: '24px' }}>
              About Our Design System
            </h2>
            <p className="body-text" style={{ marginBottom: '24px' }}>
              Our design system is built on the principles of consistency, accessibility, and developer experience. 
              We&apos;ve carefully crafted every component to work seamlessly together while maintaining the flexibility 
              to adapt to your unique brand requirements.
            </p>
            <p className="body-text" style={{ marginBottom: '32px' }}>
              From typography scales to color palettes, every element has been tested across multiple devices 
              and use cases. The result is a cohesive, professional appearance that your users will love.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span className="code-text">TypeScript</span>
              <span className="code-text">React</span>
              <span className="code-text">Next.js</span>
              <span className="code-text">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-1" style={{ marginBottom: '16px' }}>
            Ready to Get Started?
          </h2>
          <p className="body-text" style={{ marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Join thousands of developers who are already building amazing experiences with our design system.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn-primary">Start Building</a>
            <a href="#" className="btn-secondary">View Examples</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '32px 0', marginTop: '80px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <a href="#" className="logo">NextDesign</a>
              <p className="caption-text" style={{ marginTop: '8px' }}>
                Modern web design system for developers
              </p>
            </div>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#" className="nav-link">Documentation</a>
              <a href="#" className="nav-link">GitHub</a>
              <a href="#" className="nav-link">Support</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '24px', paddingTop: '24px', textAlign: 'center' }}>
            <p className="caption-text">
              © 2024 NextDesign. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}