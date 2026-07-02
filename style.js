// Resume Data Arrays
const workHistory = [
    {
        role: "Product Manager",
        company: "SectorQube",
        date: "2024 — 2025",
        bullets: [
            "Designed QC & Technician applications, boosting operational visibility and cutting core system bugs by 30%.",
            "Developed unified SOPs for installation, maintenance, and assembly, reducing factory floor production delays by 20%.",
            "Built ML model components optimized for intrusion detection (92% accuracy) and predictive hardware analytics."
        ]
    },
    {
        role: "Founder",
        company: "Bitnut Technologies",
        date: "2021 — 2024",
        bullets: [
            "Conducted over 100 customer interviews to validate high-durability telecommunication platforms.",
            "Developed Asturlab, a custom long-range hardware radio network with integrated hardware encryption layers."
        ]
    },
    {
        role: "Business Development & Sales Intern",
        company: "Jordensky",
        date: "2023",
        bullets: [
            "Built early-stage founder networks, coordinating investor access pipelines for growth capital optimization."
        ]
    },
    {
        role: "Community Management Intern",
        company: "The Product Folks",
        date: "2022",
        bullets: [
            "Coordinated the scale launch of Insurjo and Web3 Fundamentals digital hubs, driving 55,000+ customer sign-ups."
        ]
    }
];

const hardwareProjects = [
    {
        title: "NDSM Stress Tech Anomaly Detector",
        desc: "Neurofeedback instrumentation using BioAmp processing blocks to dynamically trigger auditory feedback arrays based on raw biometric trends."
    },
    {
        title: "RGPR Landslide Mapping Radar",
        desc: "Convolutional neural network mapping tools engineered to scan subsurface Ground Penetrating Radar data for anomalies during natural disaster operations."
    }
];

const openSourceContributions = [
    {
        title: "Global Data Science Repository Curation",
        desc: "Curated open-access technical guide repository containing community training materials. Achieved 5,100+ stars and 520+ forks from active engineering contributors."
    }
];

const academicData = {
    degree: "B.Tech, Electronics & Communication",
    college: "NSS College of Engineering",
    period: "2018 — 2022",
    details: "Student Council Association Chairperson (ELACSTA) & Institution's Innovation Coordinator."
};

const recognitionData = [
    "KSUM Innovation Grant Recipient (Chosen from 625 competing engineering squads)",
    "Top 8 Placement, IIT-M GDC I-NCUBATE System Cohort 16"
];

const writingsData = [
    {
        title: "Vibe Coding: How I Built a Digital Bookshelf with Claude Code",
        date: "Jun 29, 2026",
        readTime: "4 min read",
        preview: "I had over 460 books and no catalog. I decided to solve it with AI using natural language instructions. Here is how execution keeps getting cheaper, but taste still does not..."
    },
    {
        title: "Building Asturlab: Designing Hardware Protocols Under Extreme Technical Constraints",
        date: "Mar 14, 2026",
        readTime: "7 min read",
        preview: "A deep dive into building long-range radio infrastructure without standard cloud accessibility, balancing device power limits and hardware data packet encryption."
    }
];

// Completely flattened render logic to prevent injection blocks
function renderWorkView() {
    let workHTML = '';
    for (let i = 0; i < workHistory.length; i++) {
        const item = workHistory[i];
        let bulletsHTML = '';
        for (let j = 0; j < item.bullets.length; j++) {
            bulletsHTML += '<li>' + item.bullets[j] + '</li>';
        }
        workHTML += `
            <div class="work-block" style="margin-bottom: 32px;">
                <div class="list-item-header">
                    <h3 class="title-bold">${item.role}</h3>
                    <span class="metadata-mono">${item.date}</span>
                </div>
                <div class="subtitle-muted">${item.company}</div>
                <ul class="bullet-points">${bulletsHTML}</ul>
            </div>
        `;
    }

    let awardsHTML = '';
    for (let k = 0; k < recognitionData.length; k++) {
        awardsHTML += '<li>' + recognitionData[k] + '</li>';
    }

    return `
        <div class="split-layout">
            <div>
                <h2 class="section-label-mono">Experience</h2>
                <div class="list-stack">${workHTML}</div>
            </div>
            <div>
                <h2 class="section-label-mono">Education & Honors</h2>
                <div class="list-stack" style="gap: 32px;">
                    <div>
                        <div class="list-item-header">
                            <h3 class="title-bold" style="font-size: 1rem;">${academicData.degree}</h3>
                            <span class="metadata-mono">${academicData.period}</span>
                        </div>
                        <div class="subtitle-muted" style="margin-bottom: 4px;">${academicData.college}</div>
                        <p class="subtitle-muted" style="font-size: 0.85rem; font-style: italic;">${academicData.details}</p>
                    </div>
                    <hr style="border: 0; height: 1px; background: var(--border);">
                    <div>
                        <ul class="bullet-points">${awardsHTML}</ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProjectsView() {
    let projectsHTML = '';
    for (let i = 0; i < hardwareProjects.length; i++) {
        const proj = hardwareProjects[i];
        projectsHTML += `
            <div class="interactive-row" style="margin-bottom: 16px;">
                <div class="list-item-header">
                    <h3 class="title-bold">${proj.title}</h3>
                </div>
                <p class="subtitle-muted" style="margin: 4px 0 0 0; font-size: 0.95rem;">${proj.desc}</p>
            </div>
        `;
    }

    let ossHTML = '';
    for (let j = 0; j < openSourceContributions.length; j++) {
        const oss = openSourceContributions[j];
        ossHTML += `
            <div class="interactive-row">
                <h3 class="title-bold">${oss.title}</h3>
                <p class="subtitle-muted" style="margin: 4px 0 0 0; font-size: 0.95rem;">${oss.desc}</p>
            </div>
        `;
    }

    return `
        <h2 class="section-label-mono">Selected Projects</h2>
        <div class="list-stack" style="margin-bottom: 48px;">${projectsHTML}</div>
        <h2 class="section-label-mono">Open Source</h2>
        <div class="list-stack">${ossHTML}</div>
    `;
}

function renderWritingsView() {
    let writingsHTML = '';
    for (let i = 0; i < writingsData.length; i++) {
        const post = writingsData[i];
        writingsHTML += `
            <a href="#" class="interactive-row" style="margin-bottom: 16px;" onclick="event.preventDefault();">
                <div class="list-item-header">
                    <h3 class="title-bold" style="color: var(--accent);">${post.title}</h3>
                    <span class="metadata-mono">${post.date}</span>
                </div>
                <p class="subtitle-muted" style="margin: 4px 0 8px 0; font-size: 0.95rem;">${post.preview}</p>
                <span class="metadata-mono" style="font-size: 0.75rem;">${post.readTime}</span>
            </a>
        `;
    }
    return `
        <h2 class="section-label-mono">Writings</h2>
        <div class="list-stack">${writingsHTML}</div>
    `;
}

// Global Tab Manager Engine
function setView(viewName) {
    const container = document.getElementById('view-content');
    if (!container) return;

    if (viewName === 'work') container.innerHTML = renderWorkView();
    if (viewName === 'projects') container.innerHTML = renderProjectsView();
    if (viewName === 'writings') container.innerHTML = renderWritingsView();

    // Toggle CSS classes on elements dynamically
    const tabs = document.querySelectorAll('.tab-link');
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].getAttribute('data-tab') === viewName) {
            tabs[i].classList.add('active');
        } else {
            tabs[i].classList.remove('active');
        }
    }
}

// Light / Dark Global Storage Configurations
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '⊙ Light' : '☾ Dark';

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', nextTheme);
        themeToggle.textContent = nextTheme === 'light' ? '⊙ Light' : '☾ Dark';
        localStorage.setItem('theme', nextTheme);
    });
}

// Kickstart process orchestration cleanly
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    setView('work');

    const tabButtons = document.querySelectorAll('.tab-link');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', function(e) {
            const targetTab = e.target.getAttribute('data-tab');
            setView(targetTab);
        });
    }
});
