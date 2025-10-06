// Project Data - Single source of truth for all projects
const projects = [
    {
        id: 'midnight-jazz',
        number: '001',
        title: 'MIDNIGHT<br>JAZZ FESTIVAL',
        category: 'Branding & Identity',
        year: '2024',
        thumbnail: '../assets/CW_Lobby_V7.webp',
        featured: true,
        url: 'projects/midnight-jazz.html',
        client: 'Midnight Jazz Festival',
        services: 'Brand Identity<br>Visual Design<br>Art Direction',
        recognition: 'Design Award Winner',
        description: {
            challenge: 'Midnight Jazz Festival needed a complete brand refresh that would capture the sophisticated yet spontaneous nature of jazz music. The identity had to appeal to both longtime jazz enthusiasts and a younger, contemporary audience.',
            approach: 'We developed a visual language that balanced elegance with energy. The brand system uses clean typography, bold compositions, and a refined color palette that evokes the atmosphere of late-night jazz performances. Every touchpoint was designed to feel like a collectible piece of the festival experience.'
        },
        results: [
            { number: '250%', text: 'Increase in ticket sales' },
            { number: '15K', text: 'Social media engagement' },
            { number: '12', text: 'Press features' }
        ],
        nextProject: 'electric-dreams'
    },
    {
        id: 'electric-dreams',
        number: '002',
        title: 'ELECTRIC<br>DREAMS TOUR',
        category: 'Digital Experience',
        year: '2024',
        thumbnail: '../assets/Vossler_led_volume.jpg',
        featured: true,
        url: 'projects/electric-dreams.html',
        client: 'Electric Dreams Tour',
        services: 'Digital Design<br>Motion Graphics<br>Interactive Media',
        recognition: 'Innovation Award',
        description: {
            challenge: 'Creating an immersive digital experience for a cutting-edge electronic music tour.',
            approach: 'We designed a comprehensive visual system that integrated seamlessly with live performances.'
        },
        results: [
            { number: '180%', text: 'Audience growth' },
            { number: '25K', text: 'Digital interactions' },
            { number: '8', text: 'Industry awards' }
        ],
        nextProject: 'urban-soundscape'
    },
    {
        id: 'urban-soundscape',
        number: '003',
        title: 'URBAN<br>SOUNDSCAPE',
        category: 'Art Direction',
        year: '2024',
        thumbnail: '../assets/Tecate-pal-norte_thumb02.jpg',
        featured: true,
        url: 'projects/urban-soundscape.html',
        nextProject: 'neon-nights'
    },
    {
        id: 'neon-nights',
        number: '004',
        title: 'NEON<br>NIGHTS',
        category: 'Event Production',
        year: '2023',
        thumbnail: '../assets/ATT_thumb.webp',
        featured: true,
        url: 'projects/neon-nights.html',
        nextProject: 'wavelength-sessions'
    },
    {
        id: 'wavelength-sessions',
        number: '005',
        title: 'WAVELENGTH<br>SESSIONS',
        category: 'Brand Strategy',
        year: '2023',
        thumbnail: '../assets/IMG_4408.webp',
        thumbnailPosition: 'center top',
        featured: true,
        url: 'projects/wavelength-sessions.html',
        nextProject: 'frequency-collective'
    },
    {
        id: 'frequency-collective',
        number: '006',
        title: 'FREQUENCY<br>COLLECTIVE',
        category: 'Web Design',
        year: '2023',
        thumbnail: '../assets/Subaru_NN_photo01.jpg',
        featured: true,
        url: 'projects/frequency-collective.html',
        nextProject: 'midnight-jazz'
    }
];

// Helper functions
function getFeaturedProjects() {
    return projects.filter(project => project.featured);
}

function getProjectById(id) {
    return projects.find(project => project.id === id);
}

function getNextProject(currentId) {
    const current = getProjectById(currentId);
    if (current && current.nextProject) {
        return getProjectById(current.nextProject);
    }
    return null;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, getFeaturedProjects, getProjectById, getNextProject };
}

