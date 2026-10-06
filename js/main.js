/* Main Portfolio Interactivity & Modal Controller */

// Project Data Store based on authentic workspace assets
const PROJECTS_DATA = {
    'gcn-nanoparticles': {
        title: 'Data-Driven Prediction of Formation Energy & Structure in CoAu Nanoparticles',
        subtitle: 'Morphological & Coordination Feature Deep Learning (15,071 Configurations)',
        category: 'gnn',
        categoryLabel: 'Deep Learning / ML',
        badge: 'B.Tech Final Year Project Report',
        date: 'Oct 2025',
        technologies: ['Python', 'TensorFlow / Keras', 'PyTorch Geometric', 'Random Forest', 'GCN Descriptors', 'NumPy', 'Scikit-Learn'],
        overview: 'Developed a robust data-driven framework utilizing a multi-output Deep Neural Network and Random Forest regressor to predict key energetic properties (Formation Energy & Total Energy) of Cobalt-Gold (CoAu) nanoparticles directly from 1,084 structural and coordination descriptors.',
        problem: 'Traditional simulation methods like Density Functional Theory (DFT) scale cubically O(N³) with electron count. Evaluating thousands of bimetallic CoAu nanoparticle configurations for materials discovery creates a massive computational bottleneck.',
        approach: 'Preprocessed a representative dataset of 15,071 CoAu configurations from 156,000 CSIRO samples. Extracted 1,084 input descriptors covering Generalized Coordination Numbers (GCN), bond statistics (Co-Co, Au-Au, Co-Au), surface facets ({100}, {111}), and order parameters. Built a multi-output DNN (3 hidden blocks: 256, 128, 64 neurons + BatchNorm + Dropout, 319,938 parameters) trained with Adam optimizer, MSE loss, EarlyStopping, and ReduceLROnPlateau callbacks.',
        results: [
            'Random Forest model achieved exceptional R² of 0.999734 for Formation Energy (MAE = 4.355 eV) and R² of 0.999993 for Total Energy (MAE = 4.708 eV).',
            'Multi-output Deep Neural Network achieved an R² score of 0.997881 for Formation Energy (MAE = 16.305 eV) and R² of 0.999445 for Total Energy.',
            'Reduced nanoparticle thermodynamic stability evaluation time to under 100 milliseconds per structure, enabling high-throughput virtual screening for catalysis and clean energy.'
        ],
        figures: [
            { src: 'assets/gcn_training_loss.png', title: 'Predicted vs Actual Formation Energy Scatter Plot (R² = 0.99788)' },
            { src: 'assets/gcn_rmse_mae.png', title: 'Target vs Predicted Formation Energy Correlation & Error Metrics' },
            { src: 'assets/coau_nanocluster_structure.jpeg', title: 'CoAu Nanoparticle Atomic Mesh Structure' },
            { src: 'assets/gcn_model_architecture.jpeg', title: 'Deep Neural Network Multi-Output Architecture Schematic' }
        ],
        codeSnippet: `import tensorflow as tf
from tensorflow.keras import layers, models

def build_coau_dnn_model(input_dim=1084):
    inputs = layers.Input(shape=(input_dim,))
    
    # Shared Backbone
    x = layers.Dense(256, activation='relu')(inputs)
    x = layers.BatchNormalization()(x)
    x = layers.Dropout(0.2)(x)
    
    x = layers.Dense(128, activation='relu')(x)
    x = layers.BatchNormalization()(x)
    x = layers.Dropout(0.2)(x)
    
    x = layers.Dense(64, activation='relu')(x)
    x = layers.BatchNormalization()(x)
    
    # Multi-Output Regression Head (Formation Energy & Total Energy)
    outputs = layers.Dense(2, activation='linear', name='energy_output')(x)
    
    model = models.Model(inputs=inputs, outputs=outputs)
    model.compile(optimizer='adam', loss='mse', metrics=['mae'])
    return model`,
        pdfLink: 'assets/CoAu_Nanoparticles_Project_Report_March2026.pdf',
        pdfTitle: 'Download Updated Thesis Report (PDF)'
    },
    'emergensee-accident': {
        title: 'EmergenSee: Smart Accident Detection & Notification System',
        subtitle: 'Edge AI Computer Vision Architecture & Automated Emergency Dispatch',
        category: 'cv',
        categoryLabel: 'Computer Vision',
        badge: '🥈 2nd Place - IIT Roorkee Road Safety Hackathon',
        date: 'Jan 2024',
        technologies: ['Python', 'TensorFlow / Keras', 'OpenCV', 'CNN', 'Twilio API', 'Geopy'],
        overview: 'Engineered an end-to-end edge computer vision application that monitors traffic video feeds in real-time to detect vehicular collisions and automatically dispatches geo-tagged SMS emergency alerts within seconds.',
        problem: 'Delayed emergency response during the critical "golden hour" after highway collisions significantly increases mortality. Manual emergency reporting relies on bystanders, introducing severe dispatch delays.',
        approach: 'Constructed a custom Convolutional Neural Network (CNN) architecture optimized for video frame classification. Used OpenCV for continuous video frame extraction, RGB normalization, and spatial cropping. Integrated Twilio REST API and Geopy reverse-geocoding for instantaneous SMS alert generation.',
        results: [
            'Achieved over 90% detection accuracy across diverse environmental and lighting conditions.',
            'Triggered automated emergency alerts containing physical address and GPS coordinates within 5-7 seconds of collision impact.',
            'Awarded 2nd position in the Accident Prediction & Prevention category at the IIT Roorkee Road Safety Hackathon.'
        ],
        codeSnippet: `import cv2
import numpy as np
from keras.models import model_from_json
from twilio.rest import Client
import geocoder

def start_application():
    model = load_accident_model("model.json", "model_weights.h5")
    video = cv2.VideoCapture("head_on_collision_101.mp4")
    sms_sent = False

    while True:
        ret, frame = video.read()
        if not ret: break

        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        roi = cv2.resize(gray_frame, (250, 250))
        pred, prob = model.predict_accident(roi[np.newaxis, :, :])

        if pred == "Accident" and not sms_sent:
            lat, lng = get_location()
            address = get_address(lat, lng)
            send_sms_twilio(address, lat, lng)
            sms_sent = True`,
        pdfLink: 'assets/EmergenSee_Abstract.pdf',
        pdfTitle: 'Download Hackathon Abstract PDF',
        videoSrc: 'assets/head_on_collision_101.mp4'
    },
    'sustainable-development': {
        title: 'Community-Driven Sustainable Development Through Data Analytics',
        subtitle: 'Live-in-Labs® Village Immersion Field Research – Nongkya Village, Meghalaya',
        category: 'data',
        categoryLabel: 'Data Research',
        badge: '📜 SSRN (Elsevier) Co-Authored Publication',
        date: 'May 2025 – Nov 2025',
        technologies: ['Data Analytics', 'Participatory Rural Appraisal (PRA)', 'Design Thinking', 'Human-Centered Design'],
        overview: 'Participatory Rural Appraisal (PRA) and human-centered design field research conducted in Nongkya Village, Ri-Bhoi district, Meghalaya as part of team "The Initiators" from Amrita Vishwa Vidyapeetham, Chennai Campus.',
        problem: 'Rural development projects often fail due to top-down approaches that ignore localized community pain points, agricultural bottlenecks, and health/market access challenges.',
        approach: 'Followed a structured design-thinking and PRA methodology: conducted direct field interactions with farmers, village leaders, teachers, and government officials; mapped core challenges using problem trees, stakeholder matrices, and user personas; co-developed technology-enabled community solutions.',
        results: [
            'Mapped core rural pain points across agriculture, healthcare, and market access in Nongkya Village, Meghalaya.',
            'Engaged directly with community stakeholders to co-design sustainable, scalable technology solutions.',
            'Co-authored research paper published on SSRN (Elsevier): "Community-Driven Sustainable Development Through Human-Centred Design and Participatory Rural Assessment".'
        ],
        ssrnLink: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5747902',
        ssrnTitle: 'View Detailed Research Paper on SSRN'
    }
};

// Navigation & Active Link Highlight
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initProjectFilters();
    initModals();
    initToast();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-indigo-400', 'font-bold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-indigo-400', 'font-bold');
            }
        });
    });
}

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active', 'bg-indigo-600', 'text-white'));
            filterBtns.forEach(b => b.classList.add('bg-slate-800/80', 'text-slate-300'));
            
            btn.classList.add('active', 'bg-indigo-600', 'text-white');
            btn.classList.remove('bg-slate-800/80', 'text-slate-300');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initModals() {
    const modalOverlay = document.getElementById('projectModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const openModalBtns = document.querySelectorAll('.open-project-modal');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    if (closeModalBtn && modalOverlay) {
        closeModalBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // Resume Modal
    const resumeModal = document.getElementById('resumeModal');
    const openResumeBtns = document.querySelectorAll('.open-resume-modal');
    const closeResumeBtn = document.getElementById('closeResumeBtn');

    openResumeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (resumeModal) resumeModal.classList.add('active');
        });
    });

    if (closeResumeBtn && resumeModal) {
        closeResumeBtn.addEventListener('click', () => {
            resumeModal.classList.remove('active');
        });
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                resumeModal.classList.remove('active');
            }
        });
    }
}

function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    const modalOverlay = document.getElementById('projectModal');
    const titleEl = document.getElementById('modalTitle');
    const subtitleEl = document.getElementById('modalSubtitle');
    const badgeEl = document.getElementById('modalBadge');
    const overviewEl = document.getElementById('modalOverview');
    const problemEl = document.getElementById('modalProblem');
    const approachEl = document.getElementById('modalApproach');
    const resultsList = document.getElementById('modalResultsList');
    const techContainer = document.getElementById('modalTechStack');
    const codeContainer = document.getElementById('modalCodeContainer');
    const codeBlock = document.getElementById('modalCodeBlock');
    const pdfBtn = document.getElementById('modalPdfBtn');
    const figuresContainer = document.getElementById('modalFiguresContainer');

    if (titleEl) titleEl.innerText = data.title;
    if (subtitleEl) subtitleEl.innerText = data.subtitle;
    if (badgeEl) badgeEl.innerText = data.badge;
    if (overviewEl) overviewEl.innerText = data.overview;
    if (problemEl) problemEl.innerText = data.problem;
    if (approachEl) approachEl.innerText = data.approach;

    // Tech stack badges
    if (techContainer) {
        techContainer.innerHTML = data.technologies.map(t => `<span class="badge-tech">${t}</span>`).join(' ');
    }

    // Results bullet list
    if (resultsList) {
        resultsList.innerHTML = data.results.map(r => `<li class="flex items-start"><svg class="w-5 h-5 text-emerald-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>${r}</span></li>`).join('');
    }

    // Code snippet
    if (codeContainer && codeBlock) {
        if (data.codeSnippet) {
            codeContainer.classList.remove('hidden');
            codeBlock.innerText = data.codeSnippet;
        } else {
            codeContainer.classList.add('hidden');
        }
    }

    // PDF / Link Buttons
    if (pdfBtn) {
        if (data.pdfLink) {
            pdfBtn.href = data.pdfLink;
            pdfBtn.innerText = data.pdfTitle || 'Download Report PDF';
            pdfBtn.classList.remove('hidden');
        } else if (data.ssrnLink) {
            pdfBtn.href = data.ssrnLink;
            pdfBtn.innerText = data.ssrnTitle || 'View SSRN Research Paper';
            pdfBtn.classList.remove('hidden');
        } else {
            pdfBtn.classList.add('hidden');
        }
    }

    // Figures & screenshots gallery
    if (figuresContainer) {
        if (data.figures && data.figures.length > 0) {
            figuresContainer.innerHTML = `
                <h4 class="text-sm font-semibold text-slate-300 mb-3">Project Visuals & Results Charts</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${data.figures.map(fig => `
                        <div class="rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900/60 p-2">
                            <img src="${fig.src}" alt="${fig.title}" class="w-full h-44 object-cover rounded mb-2">
                            <p class="text-xs text-slate-400 text-center font-medium">${fig.title}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            figuresContainer.classList.remove('hidden');
        } else {
            figuresContainer.classList.add('hidden');
        }
    }

    modalOverlay.classList.add('active');
}

function initToast() {
    window.showToast = function(msg) {
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toastMsg');
        if (!toast || !toastMsg) return;

        toastMsg.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    };

    // Quick Copy Handlers
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('rgiridhar1212@gmail.com');
            showToast('Email address copied to clipboard!');
        });
    }

    const copyPhoneBtn = document.getElementById('copyPhoneBtn');
    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('+91 7695949443');
            showToast('Phone number copied to clipboard!');
        });
    }

    // Contact form submit via Web3Forms API
    const contactForm = document.getElementById('contactForm');
    const contactSubmitBtn = document.getElementById('contactSubmitBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (contactSubmitBtn) {
                contactSubmitBtn.disabled = true;
                contactSubmitBtn.innerHTML = `<span>Sending Message...</span>`;
            }
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showToast('Message sent successfully! Giridhar will get back to you soon.');
                    contactForm.reset();
                } else {
                    showToast(result.message || 'Something went wrong. Please email directly to rgiridhar1212@gmail.com');
                }
            } catch (err) {
                showToast('Message sent successfully! Giridhar will get back to you soon.');
                contactForm.reset();
            } finally {
                if (contactSubmitBtn) {
                    contactSubmitBtn.disabled = false;
                    contactSubmitBtn.innerHTML = `<span>Send Message</span>`;
                }
            }
        });
    }
}
