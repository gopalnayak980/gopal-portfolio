/**
 * GOPAL KUMAR — AWWWARDS-LEVEL DEVELOPER PORTFOLIO
 * High-Performance Animation & Interaction Engine
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. PROJECT CASE STUDY DATA DICTIONARY
  // --------------------------------------------------------------------------
  const PROJECT_DATA = {
    hireai: {
      title: 'HireAI',
      subtitle: 'AI-Powered Job Board & Career Platform',
      category: 'Full-Stack MERN + AI',
      overview:
        'HireAI is an intelligent job recruitment and career preparation ecosystem. It bridges the gap between job seekers and relevant opportunities by leveraging Google Gemini AI to analyze uploaded PDF resumes against live job requirements in real time, delivering a match score, missing skill recommendations, and tailored AI interview prep questions.',
      problem:
        'Traditional job boards present thousands of listings with no actionable feedback on why an applicant gets rejected or what skills they are missing for a specific role.',
      solution:
        'Built an end-to-end full-stack platform that parses candidate resumes client-side with PDF.js, integrates the Adzuna API for live real-time job listings, and employs Gemini AI for deep semantic resume scoring and customized mock interview simulation.',
      architecture: [
        'Frontend: React 18, Vite, Tailwind CSS with modular component hierarchy',
        'Backend: Node.js, Express.js REST API with JWT authentication & role-based middleware',
        'Database: MongoDB Atlas with Mongoose schema validation for users, saved jobs, and match history',
        'AI Layer: Google Gemini API for semantic resume evaluation and role-specific Q&A generation',
        'External APIs: Adzuna Jobs API for live multi-region job aggregation',
        'Deployment: Vercel (Frontend SPA) + Render (Backend REST API)'
      ],
      features: [
        'Real-time job search with keyword, location, and salary filtering',
        'Instant PDF resume parsing via PDF.js',
        'AI Resume Matcher: 0-100% score with breakdown of key strengths and missing keywords',
        'AI Interview Preparation: Generates realistic technical and behavioral questions based on target job description',
        'Protected JWT dashboard for bookmarking jobs and tracking past match evaluations'
      ],
      learnings:
        'Gained deep experience in optimizing prompt engineering for deterministic JSON extraction from LLMs, handling binary PDF stream parsing securely, and managing stateless JWT session refreshes across decoupled deployments.',
      liveUrl: 'https://hireai-blond.vercel.app',
      repoUrl: 'https://github.com/gopalnayak980/hireai'
    },

    wanderlist: {
      title: 'WanderList',
      subtitle: 'Full-Stack Travel & Property Marketplace',
      category: 'Full-Stack Node.js & Cloudinary',
      overview:
        'WanderList is a rich travel listing and vacation rental marketplace inspired by Airbnb. It empowers travelers to discover unique stays across global destinations, read community reviews, and manage bookings, while providing hosts with an end-to-end property publishing suite with Cloudinary image optimizations.',
      problem:
        'Travelers need a trustworthy, visually rich platform to explore verified listings with accurate geographic mapping, genuine reviews, and seamless booking inquiry capabilities.',
      solution:
        'Engineered a complete MVC web application featuring robust session-based authentication with Passport.js, automated Cloudinary multi-image upload pipelines, Mapbox/Google Maps location tagging, and Groq AI-powered travel itinerary recommendations.',
      architecture: [
        'Frontend: EJS Templating, Vanilla CSS, Bootstrap 5, Custom Micro-interactions',
        'Backend: Node.js, Express.js MVC Architecture with RESTful route design',
        'Database: MongoDB with Mongoose relational schemas (User, Listing, Review, Booking)',
        'Authentication: Passport.js local strategy with salted hashing',
        'Media Storage: Cloudinary API with automated transformations and CDN delivery',
        'AI Integration: Groq AI for instant destination tips and smart itinerary suggestions'
      ],
      features: [
        'Dynamic property discovery with interactive search, category filters, and price ranges',
        'Multi-image listing creator with drag-and-drop Cloudinary media upload',
        'User review and star-rating engine with authorization safeguards',
        'Map-based property visualization and geolocation integration',
        'AI Travel Assistant powered by Groq AI for personalized itinerary planning'
      ],
      learnings:
        'Mastered the MVC paradigm in Node.js, handling relational data references and cascading deletes in MongoDB, securing multipart form uploads with Multer & Cloudinary, and implementing bulletproof authorization guards for host resources.',
      liveUrl: 'https://github.com/gopalnayak980',
      repoUrl: 'https://github.com/gopalnayak980'
    },

    jarvis: {
      title: 'Jarvis AI',
      subtitle: 'Personal AI Voice Assistant with Real-Time Vision',
      category: 'Python AI & Computer Vision',
      overview:
        'Jarvis AI is an intelligent personal desktop companion capable of real-time bilingual voice interaction in Hindi and English. Featuring an animated futuristic HUD, persistent memory storage, and camera-based computer vision via Google Gemini Vision, Jarvis can execute OS commands, answer complex queries, and analyze surroundings in real time.',
      problem:
        'Standard voice assistants are locked into rigid closed ecosystems, lack contextual bilingual fluency (especially Hindi/English code-switching), and have no visual situational awareness.',
      solution:
        'Developed a lightweight, high-performance Python/Flask backend integrated with browser Web Speech APIs, WebRTC camera streaming, SQLite for episodic memory, and Gemini Vision for live image scene analysis.',
      architecture: [
        'Core Engine: Python 3, Flask REST backend with sub-process OS command automation',
        'Frontend HUD: HTML5 Canvas animation, CSS futuristic glow shaders, JavaScript audio bridge',
        'Voice Layer: Web Speech API for low-latency voice recognition & Text-to-Speech synthesis',
        'Vision Layer: WebRTC live frame capture piped to Google Gemini 1.5 Flash Vision',
        'Memory: SQLite local database with indexed conversation history and user preference recall',
        'Deployment: Render with optimized background workers'
      ],
      features: [
        'Seamless Hindi + English natural conversational comprehension',
        'Real-time visual analysis of user camera feed via Gemini Vision',
        'Persistent SQLite memory to remember user preferences, tasks, and past interactions',
        'Desktop & PC control commands (app launching, system metrics, web searches)',
        'Custom animated Canvas HUD reacting dynamically to speech frequencies'
      ],
      learnings:
        'Refined skills in real-time audio/video streaming over WebRTC, orchestrating asynchronous Python worker tasks, managing lightweight SQL memory stores, and optimizing low-latency speech synthesis pipelines.',
      liveUrl: 'https://jarvis-ai-8zh0.onrender.com',
      repoUrl: 'https://github.com/gopalnayak980/jarvis-ai'
    },

    buildingmaterial: {
      title: 'Building Material Supplier',
      subtitle: 'Real-World Business Digitization & Material Calculator',
      category: 'Real-World Business Solution',
      overview:
        "Digitized my family's 25-year-old offline building materials supply business (established 2000 in Barhi, Hazaribagh, Jharkhand) into a thriving online business hub. The website showcases core inventory (Bricks, Sand, Stone Chips, Cement), provides a multi-step construction quotation calculator, and connects customers directly with sales via a one-click WhatsApp ordering flow.",
      problem:
        'A reputable 25-year-old local supplier was completely invisible on search engines, relying purely on word-of-mouth with zero digital presence or automated quotation mechanisms.',
      solution:
        'Designed and deployed a modern, lightweight, mobile-first business portal with custom material estimation algorithms, WhatsApp API integration, Google Search Console indexing, Google Business Profile configuration, and local SEO optimizations.',
      architecture: [
        'Frontend: Semantic HTML5, Vanilla CSS3, Modern JavaScript (Zero heavy dependencies for instant 100/100 Lighthouse speed)',
        'Calculator Engine: Pure JS mathematical models estimating material requirements based on construction square footage',
        'Integrations: WhatsApp Business Click-to-Chat API with pre-filled order manifests, Google Maps Embed API',
        'SEO & Hosting: GitHub Pages with custom domain DNS routing, structured schema.org LocalBusiness JSON-LD markup'
      ],
      features: [
        'Comprehensive product showcase for high-grade Bricks, Sand, Stone Chips, and Cement',
        'Interactive Construction & Material Calculator providing instant price and volume estimates',
        'Direct 1-Click WhatsApp inquiry with structured pre-populated quotation parameters',
        'Google Maps driving directions, verified contact channels, and local business reviews',
        '100/100 Lighthouse performance and mobile responsiveness across low-bandwidth connections'
      ],
      learnings:
        'Understood the immense value of applying software engineering to solve tangible, real-world business challenges. Learned local SEO optimization, structured data schemas, and the critical importance of zero-friction mobile UX for commercial conversions.',
      liveUrl: 'https://jaimatadibuildingmaterial.com',
      repoUrl: 'https://github.com/gopalnayak980/jai-mata-di-website'
    }
  };

  // --------------------------------------------------------------------------
  // 2. PARTICLE CONSTELLATION CANVAS ENGINE (Hero Background)
  // --------------------------------------------------------------------------
  function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, active: false };
    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 0.8;
        this.color = Math.random() > 0.6 ? '#6366f1' : Math.random() > 0.3 ? '#3b82f6' : '#06b6d4';
        this.baseAlpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Subtle mouse repulsion / attraction
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.baseAlpha;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#3b82f6';
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    }

    let isVisible = true;
    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
    });

    function animate() {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
        connectParticles();
      }
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    });
  }

  // --------------------------------------------------------------------------
  // 3. CURSOR SPOTLIGHT FOLLOWER
  // --------------------------------------------------------------------------
  function initCursorSpotlight() {
    const spotlight = document.querySelector('.cursor-spotlight');
    if (!spotlight || window.innerWidth < 1024) return;

    window.addEventListener('mousemove', (e) => {
      spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }

  // --------------------------------------------------------------------------
  // 4. FLOATING NAVBAR & ACTIVE SECTION TRACKER
  // --------------------------------------------------------------------------
  function initNavbar() {
    const navHeader = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Scroll blur state
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navHeader?.classList.add('scrolled');
      } else {
        navHeader?.classList.remove('scrolled');
      }

      // Active Section Highlighter
      let currentSection = '';
      const scrollPos = window.scrollY + 180;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });

      mobileLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });

    // Mobile Hamburger Drawer Toggle
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 5. INTERACTIVE SKILLS FILTERING
  // --------------------------------------------------------------------------
  function initSkillsMatrix() {
    const tabs = document.querySelectorAll('.skill-tab-btn');
    const cards = document.querySelectorAll('.skill-category-card');

    if (!tabs.length || !cards.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        cards.forEach((card) => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.4s ease-out forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. PROJECT DETAIL MODAL ENGINE
  // --------------------------------------------------------------------------
  function initProjectModals() {
    const modalOverlay = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const detailButtons = document.querySelectorAll('.btn-project-details');

    if (!modalOverlay) return;

    function openModal(projectId) {
      const data = PROJECT_DATA[projectId];
      if (!data) return;

      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-subtitle').textContent = data.subtitle;
      document.getElementById('modal-category').textContent = data.category;
      document.getElementById('modal-overview').textContent = data.overview;
      document.getElementById('modal-problem').textContent = data.problem;
      document.getElementById('modal-solution').textContent = data.solution;
      document.getElementById('modal-learnings').textContent = data.learnings;

      // Architecture List
      const archContainer = document.getElementById('modal-architecture');
      archContainer.innerHTML = '';
      data.architecture.forEach((item) => {
        const li = document.createElement('div');
        li.className = 'modal-feature-item';
        li.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${item}</span>
        `;
        archContainer.appendChild(li);
      });

      // Key Features List
      const featContainer = document.getElementById('modal-features');
      featContainer.innerHTML = '';
      data.features.forEach((item) => {
        const li = document.createElement('div');
        li.className = 'modal-feature-item';
        li.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${item}</span>
        `;
        featContainer.appendChild(li);
      });

      // Action Links
      const liveBtn = document.getElementById('modal-live-link');
      const repoBtn = document.getElementById('modal-repo-link');

      liveBtn.href = data.liveUrl;
      repoBtn.href = data.repoUrl;

      liveBtn.style.display = data.liveUrl ? 'inline-flex' : 'none';
      repoBtn.style.display = data.repoUrl ? 'inline-flex' : 'none';

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    detailButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pid = btn.getAttribute('data-project');
        openModal(pid);
      });
    });

    closeBtn?.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. MAGNETIC BUTTON PHYSICS
  // --------------------------------------------------------------------------
  function initMagneticButtons() {
    if (window.innerWidth < 1024) return;

    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .social-pill, .btn-project-live');

    magneticElements.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. EMAIL COPY TO CLIPBOARD & TOAST SYSTEM
  // --------------------------------------------------------------------------
  function initEmailCopy() {
    const copyBtn = document.getElementById('btn-copy-email');
    const toast = document.getElementById('toast-notification');
    const toastText = document.getElementById('toast-text');

    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      const email = 'gopal32452@gmail.com';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback
          const textArea = document.createElement('textarea');
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        if (toast && toastText) {
          toastText.textContent = `Copied ${email} to clipboard!`;
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 3200);
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. CERTIFICATES FILTERING
  // --------------------------------------------------------------------------
  function initCertificatesFilter() {
    const filterBtns = document.querySelectorAll('.cert-filter-btn');
    const certCards = document.querySelectorAll('.cert-card-premium');

    if (!filterBtns.length || !certCards.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active tab
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        certCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. GSAP SCROLLTRIGGER REVEAL ANIMATIONS
  // --------------------------------------------------------------------------
  function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Section headers reveal
    gsap.utils.toArray('.section-header').forEach((header) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    // Certificate cards reveal
    gsap.utils.toArray('.cert-card-premium').forEach((card, idx) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        delay: (idx % 3) * 0.1,
        duration: 0.7,
        ease: 'power3.out'
      });
    });

    // About photo card reveal
    const photoCard = document.querySelector('.about-photo-card');
    if (photoCard) {
      gsap.from(photoCard, {
        scrollTrigger: {
          trigger: photoCard,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -30,
        duration: 0.9,
        ease: 'power3.out'
      });
    }

    // Project cards staggered entrance & image parallax
    gsap.utils.toArray('.project-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 45,
        duration: 0.9,
        ease: 'power3.out'
      });
    });

    // Timeline items reveal
    gsap.utils.toArray('.timeline-item').forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power2.out'
      });
    });

    // Activity cards reveal
    gsap.utils.toArray('.activity-card').forEach((card, idx) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        delay: idx * 0.1,
        duration: 0.7,
        ease: 'power2.out'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 11. APP INITIALIZATION
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initHeroCanvas();
    initCursorSpotlight();
    initNavbar();
    initSkillsMatrix();
    initCertificatesFilter();
    initProjectModals();
    initMagneticButtons();
    initEmailCopy();
    initGSAPAnimations();
  });
})();
