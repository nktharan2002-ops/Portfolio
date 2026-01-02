// Initialize EmailJS
(function() {
    
    emailjs.init("SfzXA-Dpr_FsuSYPP"); // Only public key, no template ID
    
})();

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const roleText = document.getElementById('role-text');
const devSkillsGrid = document.getElementById('dev-skills');
const designSkillsGrid = document.getElementById('design-skills');
const projectsGrid = document.querySelector('.projects-grid');

// Development Skills Data
const devSkills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "Python", icon: "fab fa-python" },
    { name: "C", icon: "fas fa-c" },
    { name: "C++", icon: "fas fa-c" },
    { name: "C#", icon: "fas fa-c" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Flutter", icon: "fas fa-mobile-alt" },
    { name: "Dart", icon: "fas fa-code" },
    { name: "SQL", icon: "fas fa-database" }
];

// Design Tools Data
const designSkills = [
    { name: "CorelDRAW", icon: "fas fa-pen-nib" },
    { name: "Photoshop", icon: "fab fa-adobe" },
    { name: "Canva", icon: "fas fa-palette" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Illustrator", icon: "fas fa-paint-brush", note: "Studying" }
];

// Projects Data
const projects = [
    {
        title: "ParmaNova",
        description: "Complete pharmacy management solution with inventory tracking, billing, and customer management. Used by .NET and MySQL.",
        status: "Completed",
        statusClass: "status-completed",
        image: "Pharmacy.jpg" // Direct path to your image
    },
    {
        title: "AI Food Quality Prediction",
        description: "Uses food label data and AI to predict food quality with high accuracy. Built with Python and machine learning libraries and flutter for front-end.",
        status: "Working Project",
        statusClass: "status-working",
        image: "Food_label.jpg" // Ensure this file exists in the same folder
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website with modern animations and responsive design. Built with HTML, CSS, and JavaScript.",
        status: "Completed",
        statusClass: "status-completed",
        image: "Portfolio.jpg" // Ensure this file exists in the same folder
    },
    {
        title: "Faculty Budget Management",
        description: "System to manage faculty budget, expenses, and financial reporting. Built with PHP and MySQL.",
        status: "Working Project",
        statusClass: "status-working",
        image: "Budget.jpg" // Ensure this file exists in the same folder
    }
];

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Typing Animation for Role Text
function initTypewriter() {
    const phrases = ["Full Stack Developer", "Designer"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let cursorVisible = true;
    
    // Create and style cursor element
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    //cursor.textContent = '|';
    roleText.parentNode.insertBefore(cursor, roleText.nextSibling);
    
    // Cursor blink animation
    setInterval(() => {
        cursor.style.opacity = cursorVisible ? '1' : '0';
        cursorVisible = !cursorVisible;
    }, 500);
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Deleting text
            roleText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster when deleting
        } else {
            // Typing text
            roleText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Normal typing speed
        }
        
        // Logic for when to delete or move to next phrase
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Finished typing, wait then start deleting
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of phrase (2 seconds)
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new phrase (0.5 seconds)
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing animation
    type();
}

// Populate Development Skills
function populateDevSkills() {
    devSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        `;
        devSkillsGrid.appendChild(skillItem);
    });
}

// Populate Design Tools
function populateDesignSkills() {
    designSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        let noteHtml = '';
        if (skill.note) {
            noteHtml = `<div class="skill-note">${skill.note}</div>`;
        }
        
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
            ${noteHtml}
        `;
        designSkillsGrid.appendChild(skillItem);
    });
}

// Populate Projects
function populateProjects() {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <span class="project-status ${project.statusClass}">${project.status}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const skillItems = document.querySelectorAll('.skill-item');
    const projectCards = document.querySelectorAll('.project-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);
    
    skillItems.forEach(item => observer.observe(item));
    projectCards.forEach(card => observer.observe(card));
}

// Highlight active navigation link
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Handle contact form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_y80an1b"; // ← YOUR SERVICE ID HERE
    const TEMPLATE_ID = "template_d5u6eua"; // ← YOUR TEMPLATE ID HERE
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.querySelector('span').textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending...';
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
        .then(() => {
            // Show success message
            formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
        })
        .catch((error) => {
            // Show error message
            formMessage.textContent = 'Failed to send message. Please try again or email me directly at nktharan02@gmail.com';
            formMessage.className = 'form-message error';
            
            // Still show message for user
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            console.error('EmailJS Error:', error);
        })
        .finally(() => {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = originalText;
        });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter(); // Start typing animation
    populateDevSkills();
    populateDesignSkills();
    populateProjects();
    animateOnScroll();
    highlightNavLink();
    
    // Initialize EmailJS with your credentials
    // Replace these with your actual EmailJS credentials
    // emailjs.init("YOUR_PUBLIC_KEY");
    
    // Trigger animations for elements already in view
    setTimeout(animateOnScroll, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});