 // Project data array
    const projects = [
      {
        id: 0,
        title: "HiTok App",
        description: "Integrated messaging and communication platform designed specifically for the community. HiTok combines secure messaging, voice calls, and file sharing with localized features and interfaces. The platform is optimized for varying network conditions, ensuring reliable communication even in areas with limited bandwidth.",
        images: [
          "assets/img/projects/hitok1.png",
          "assets/img/projects/hitok2.jpeg",
          "assets/img/projects/hitok3.jpeg",
          "assets/img/projects/sample hitok poster 10.png"
        ],
        location: "Nationwide",
        date: "Launched 2024",
        category: "Software Solution"
      },
      {
        id: 1,
        title: "Barangay Broadband Program",
        description: "Launched HiWifi through community access points across selected barangays in partnership with local governments to promote digital inclusion. This initiative bridges the digital divide by providing essential internet access to underserved areas. Each access point delivers reliable 50Mbps connections with content filtering for safe browsing, particularly benefiting students and small businesses.",
        images: [
          "assets/img/projects/no-image.png",
          "assets/img/projects/no-image.png",
          "assets/img/projects/no-image.png",
        ],
        location: "Multiple Barangays",
        date: "Ongoing since 2022",
        category: "Community WiFi"
      },
      {
        id: 2,
        title: "Marketing Activities",
        description: "Comprehensive awareness campaigns for the Community WiFi Project through targeted promotions and community outreach. Our multi-channel approach connects more people and empowers more lives through digital inclusion. Campaigns include barangay assemblies, school programs, and social media engagement to ensure widespread adoption and maximum community benefit.",
        images: [
          "assets/img/projects/marketing7.jpg",
          "assets/img/projects/marketing5.jpg",
          "assets/img/projects/marketing8.jpg",
          "assets/img/projects/marketing9.jpg"
        ],
        location: "Project Areas",
        date: "Daily Campaigns",
        category: "Community Engagement"
      },
      {
        id: 3,
        title: "Technical Survey & Design",
        description: "Conducted detailed site assessments and network mapping to ensure accurate, efficient, and scalable infrastructure planning. Our team uses advanced GIS tools and network simulation software to create optimal designs that account for terrain challenges, future growth, and cost efficiency. This meticulous approach guarantees infrastructure that delivers optimal performance with future-proof solutions.",
        images: [
          "assets/img/projects/survey5.png",
          "assets/img/projects/survey6.png",
          "assets/img/projects/survey1.jpg",
          "assets/img/projects/survey2.jpg",
          "assets/img/projects/survey3.jpg"
        ],
        location: "Project Sites",
        date: "Pre-Implementation",
        category: "Planning Phase"
      },
      {
        id: 4,
        title: "HDD Non-Trenching and Cable Blowing",
        description: "Utilized Horizontal Directional Drilling (HDD) technology to install fiber optic cables beneath roads, rivers, and urban zones with minimal surface disruption. This innovative approach enabled secure and efficient underground connectivity for enterprise clients and ISPs while significantly reducing environmental impact and community disruption compared to traditional trenching methods.",
        images: [
          "assets/img/projects/hdd1.jpg",
          "assets/img/projects/hdd2.png",
          "assets/img/projects/hdd3.png",
          "assets/img/projects/hdd4.png",
          "assets/img/projects/hdd5.png"
        ],
        location: "Metro Manila & Provincial Areas",
        date: "2021-2023",
        category: "Fiber Optic Installation"
      },
      {
        id: 5,
        title: "OSP Aerial Installation",
        description: "Deployed aerial fiber lines across challenging terrains, connecting rural municipalities to high-speed internet. This critical infrastructure brings reliable connectivity to remote areas, fostering economic growth and access to information. Our installations use weather-resistant cabling and robust support structures designed to withstand tropical storm conditions common in the Philippines.",
        images: [
          "assets/img/projects/osp.webp",
          "assets/img/projects/osp1.png",
          "assets/img/projects/osp2.png",
          "assets/img/projects/osp3.png",
          "assets/img/projects/osp4.png"
        ],
        location: "Eastern Visayas Region",
        date: "2022-2023",
        category: "Rural Connectivity"
      },
      {
        id: 6,
        title: "IDC Construction",
        description: "A strategic infrastructure initiative focused on expanding reliable broadband access and supporting sustainable digital development in key areas. Our data center constructions are built to Tier III standards, featuring redundant power systems, advanced cooling solutions, and robust security measures to ensure uninterrupted operations and data protection for our clients.",
        images: [
          "assets/img/projects/idc1.jpg",
          "assets/img/projects/idc2.jpg"
        ],
        location: "Metro Manila",
        date: "2022-2023",
        category: "Data Infrastructure"
      },
      {
        id: 7,
        title: "Base Tower Civil Works & Telecom Installation",
        description: "Constructed and commissioned multiple cellular towers in mountainous regions, significantly boosting signal coverage for local communities and emergency responders. These towers are engineered for challenging terrains with features like reinforced foundations, lightning protection, and remote monitoring systems. They serve as vital communication hubs, especially important during natural disasters.",
        images: [
          "assets/img/projects/tower1.jpg",
          "assets/img/projects/tower2.jpg"
        ],
        location: "Eastern Visayas",
        date: "2021-2023",
        category: "Wireless Infrastructure"
      }
    ];

    // Modal functionality
    let currentProject = null;
    let currentSlide = 0;

    function openProjectModal(projectId) {
      currentProject = projects.find(p => p.id === projectId);
      currentSlide = 0;
      
      // Update modal content
      document.getElementById('modal-project-title').textContent = currentProject.title;
      document.getElementById('modal-project-description').textContent = currentProject.description;
      document.getElementById('modal-project-location').innerHTML = `<i class="bi bi-geo-alt"></i> ${currentProject.location}`;
      document.getElementById('modal-project-date').innerHTML = `<i class="bi bi-calendar"></i> ${currentProject.date}`;
      document.getElementById('modal-project-category').innerHTML = `<i class="bi bi-tag"></i> ${currentProject.category}`;
      
      // Create carousel slides
      const carousel = document.querySelector('.project-carousel');
      carousel.innerHTML = `
        <div class="carousel-arrow prev" onclick="changeSlide(-1)">&#10094;</div>
        <div class="carousel-arrow next" onclick="changeSlide(1)">&#10095;</div>
      `;
      
      currentProject.images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${image}" alt="${currentProject.title} - Image ${index + 1}">`;
        carousel.appendChild(slide);
      });
      
      // Create dots
      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'carousel-nav';
      const dots = document.createElement('div');
      dots.className = 'carousel-dots';
      
      currentProject.images.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(i);
        dots.appendChild(dot);
      });
      
      dotsContainer.appendChild(dots);
      carousel.appendChild(dotsContainer);
      
      // Show modal
      document.getElementById('projectModal').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
      document.getElementById('projectModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function changeSlide(direction) {
      const slides = document.querySelectorAll('.carousel-slide');
      const newSlide = currentSlide + direction;
      
      if (newSlide >= slides.length) {
        currentSlide = 0;
      } else if (newSlide < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = newSlide;
      }
      
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
      });

      // Update dots
      const dots = document.querySelectorAll('.carousel-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    function goToSlide(n) {
      currentSlide = n;
      const slides = document.querySelectorAll('.carousel-slide');
      const dots = document.querySelectorAll('.carousel-dot');
      
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
      });
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      if (event.target === document.getElementById('projectModal')) {
        closeProjectModal();
      }
    }

    // Close with ESC key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeProjectModal();
      }
    });

    // Project filtering
    document.addEventListener('DOMContentLoaded', function() {
      const filterButtons = document.querySelectorAll('.project-filter button');
      const projectCards = document.querySelectorAll('.project-card');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Filter projects
          const filter = button.getAttribute('data-filter');
          projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
      
      // Animated counter for stats
      const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;
          const increment = target / speed;
          
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
          } else {
            counter.innerText = target;
          }
        });
      };
      
      // Trigger counters when scrolled to
      const statsSection = document.querySelector('.project-stats');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(statsSection);
    });