// CV Data - Single source of truth for all CV entries
const cvEntries = [
    // 2025
    {
        id: 'lollapalooza-2025',
        number: '073',
        type: 'Show',
        category: 'Laser',
        title: 'TWICE - Lollapalooza',
        venue: 'Lollapalooza Bud Light Stage',
        location: 'Chicago, IL',
        date: 'July 2025',
        year: 2025,
        description: 'Laser show, Bud Light stage.'
    },
    {
        id: 'datfest-2025',
        number: '073',
        type: 'Performance',
        category: 'Visuals',
        title: 'DATFEST VJ Performance',
        venue: 'Chemistry Creative',
        location: 'Brooklyn, NY',
        date: 'March 2025',
        year: 2025,
        description: 'Visuals performance for industry meetup event.'
    },
    {
        id: 'digital-graffiti-2025',
        number: '068',
        type: 'Exhibition',
        category: 'Visuals',
        title: 'ECHO - Digital Graffiti',
        venue: 'Digital Graffiti Projection Mapping Festival',
        location: 'Alys Beach, FL',
        date: 'May 2025',
        year: 2025,
        description: 'Projection-mapped installation integrating AI for real-time show control.'
    },
    // 2024
    {
        id: 'peacock-theater-2024',
        number: '072',
        type: 'Show',
        category: 'Laser',
        title: 'Moein',
        venue: 'Peacock Theater',
        location: 'Los Angeles, CA',
        date: 'September 2024',
        year: 2024,
        description: 'Laser production for live performance.'
    },
    {
        id: 'skinwalker-ranch-2024',
        number: '071',
        type: 'Exhibition',
        category: 'Laser',
        title: 'The Secret of Skinwalker Ranch – History Channel',
        venue: 'Skinwalker Ranch',
        location: 'Gusher, Utah',
        date: 'September 2024',
        year: 2024,
        description: 'Laser design and production.'
    },
    {
        id: 'sesac-awards-2024',
        number: '070',
        type: 'Show',
        category: 'Laser',
        title: 'SESAC LA Music Awards',
        venue: 'Dream Hollywood Hotel',
        location: 'Los Angeles, CA',
        date: 'September 2024',
        year: 2024,
        description: 'Laser production for awards ceremony.'
    },
    {
        id: 'digital-graffiti-2024',
        number: '068',
        type: 'Exhibition',
        category: 'Visuals',
        title: 'FDBK Systems - Digital Graffiti',
        venue: 'Digital Graffiti Projection Mapping Festival',
        location: 'Alys Beach, FL',
        date: 'May 2024',
        year: 2024,
        description: 'Interactive installation for Digital Graffiti.'
    },
    {
        id: 'radius-bicep-2024',
        number: '066',
        type: 'Show',
        category: 'Laser',
        title: 'BICEP',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'April 2024',
        year: 2024,
        description: 'Laser production for BICEP performance.'
    },
    {
        id: 'hob-april-2024',
        number: '065',
        type: 'Performance',
        category: 'Visuals',
        title: 'Protocol Presents',
        venue: 'House of Blues',
        location: 'Chicago, IL',
        date: 'April 2024',
        year: 2024,
        description: 'Laser show production.'
    },
    {
        id: 'cookies-grand-opening-2024',
        number: '064',
        type: 'Exhibition',
        category: 'Laser',
        title: 'Cookies CHI Grand Opening',
        venue: 'Cookies Retail Chicago',
        location: 'Chicago, IL',
        date: 'March 2024',
        year: 2024,
        description: 'Laser installation for grand opening event.'
    },
    {
        id: 'radius-fresch-2024',
        number: '063',
        type: 'Show',
        category: 'Laser',
        title: 'Dr. Fresch x Habstrakt',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'February 2024',
        year: 2024,
        description: 'Laser production for Dr Fresch and Habstrakt performance.'
    },
    {
        id: 'hob-feb-2024',
        number: '062',
        type: 'Performance',
        category: 'Visuals',
        title: 'Protocol Presents',
        venue: 'House of Blues',
        location: 'Chicago, IL',
        date: 'February 2024',
        year: 2024,
        description: 'VJ and laser production.'
    },
    {
        id: 'radius-armnhmr-2024',
        number: '061',
        type: 'Show',
        category: 'Laser',
        title: 'ARMNHMR',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'January 2024',
        year: 2024,
        description: 'Laser production for ARMNHMR performance.'
    },
    
    // 2023
    {
        id: 'proper-crssd-nye-2023',
        number: '060',
        type: 'Show',
        category: 'Laser',
        title: 'PROPER CRSSD NYE',
        venue: 'Petco Park',
        location: 'San Diego, CA',
        date: 'December 2023',
        year: 2023,
        description: 'Laser production for New Year\'s Eve event.'
    },
    {
        id: 'afro-jack-2023',
        number: '058',
        type: 'Show',
        category: 'Laser',
        title: 'Afro Jack',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'November 2023',
        year: 2023,
        description: 'Laser production for Afro Jack performance.'
    },
    {
        id: 'Kaskade-2023',
        number: '057',
        type: 'Show',
        category: 'Visuals',
        title: 'Kaskade',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'November 2023',
        year: 2023,
        description: 'VJ production for Lipless.'
    },
    {
        id: 'sonny-radius-2023',
        number: '056',
        type: 'Show',
        category: 'Visuals',
        title: 'Sonny Fodera',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'November 2023',
        year: 2023,
        description: 'VJ production for Sonny performance.'
    },
    {
        id: 'armin-radius-2023',
        number: '055',
        type: 'Show',
        category: 'Visuals',
        title: 'Armin van Buuren',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'November 2023',
        year: 2023,
        description: 'VJ production for Armin performance.'
    },
    {
        id: 'dimibowie-dotd-2023',
        number: '054',
        type: 'Performance',
        category: 'Visuals',
        title: 'Dimibowie - Day of the Dead',
        venue: 'Day of the Dead Event',
        location: 'Chicago, IL',
        date: 'November 2023',
        year: 2023,
        description: 'VJ production for Day of the Dead celebration.'
    },
    {
        id: 'soho-house-2023',
        number: '053',
        type: 'Exhibition',
        category: 'Laser',
        title: 'Liquid Sky',
        venue: 'Soho House Chicago',
        location: 'Chicago, IL',
        date: 'October 2023',
        year: 2023,
        description: 'Laser installation and show at Soho House Chicago.'
    },
    {
        id: 'deadmau5-radius-2023',
        number: '052',
        type: 'Show',
        category: 'Visuals',
        title: 'Day of the Deadmau5',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'October 2023',
        year: 2023,
        description: 'VJ production for Deadmau5 performance.'
    },
    {
        id: 'anjuna-radius-2023',
        number: '051',
        type: 'Show',
        category: 'Laser',
        title: 'Anjunabeats After Dark',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'October 2023',
        year: 2023,
        description: 'Laser production for Anjuna performance.'
    },
    {
        id: 'carl-cox-radius-2023',
        number: '050',
        type: 'Show',
        category: 'Laser',
        title: 'Carl Cox',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'October 2023',
        year: 2023,
        description: 'Laser production for Carl Cox performance.'
    },
    {
        id: 'ben-bohmer-2023',
        number: '048',
        type: 'Show',
        category: 'Laser',
        title: 'Ben Bohmer',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'October 2023',
        year: 2023,
        description: 'Laser production for Ben Bohmer.'
    },
    {
        id: 'rich-nxt-2023',
        number: '047',
        type: 'Performance',
        category: 'Visuals',
        title: 'Rich NXT - DimiBowie',
        venue: 'Rich NXT',
        location: 'Chicago, IL',
        date: 'September 2023',
        year: 2023,
        description: 'Visual production, live visuals.'
    },
    {
        id: 'arc-afters-radius-2023',
        number: '043',
        type: 'Show',
        category: 'Laser',
        title: 'ARC Official After Parties',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'September 2023',
        year: 2023,
        description: 'Laser production for ARC Music Festival afterparties.'
    },
    {
        id: 'lolla-afters-radius-2023',
        number: '039',
        type: 'Show',
        category: 'Laser',
        title: 'Lollapalooza Official After Parties',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'August 2023',
        year: 2023,
        description: 'Laser production for Lollapalooza afterparties.'
    },
    {
        id: 'heatwave-afters-radius-2023',
        number: '032',
        type: 'Show',
        category: 'Laser',
        title: 'Heatwave Official After Parties',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'June 2023',
        year: 2023,
        description: 'Laser production for Heatwave afterparties.'
    },
    {
        id: 'digital-graffiti-2023',
        number: '068',
        type: 'Exhibition',
        category: 'Laser',
        title: 'Diamond Lichtfeld - Digital Graffiti',
        venue: 'Digital Graffiti Projection Mapping Festival',
        location: 'Alys Beach, FL',
        date: 'May 2023',
        year: 2023,
        description: 'Laser and video mapped installation.'
    },
    {
        id: 'fmk-mar-2023',
        number: '029',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK Series',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'March - September 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    
    // 2022
    {
        id: 'petre-dimibowie-2022',
        number: '023',
        type: 'Performance',
        category: 'Visuals',
        title: 'Petre Inspirescu, DimiBowie',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'October 2022',
        year: 2022,
        description: 'Visual production, live visuals.'
    },
    {
        id: 'midnight-rush-2022',
        number: '022',
        type: 'Performance',
        category: 'Lighting',
        title: 'Midnight Rush',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'October 2022',
        year: 2022,
        description: 'Lighting design, live visuals.'
    },
    {
        id: 'pilsen-fest-2022',
        number: '022',
        type: 'Performance',
        category: 'Visuals',
        title: 'Kenny Larkin - Pilsen Festival',
        venue: 'Pilsen',
        location: 'Chicago, IL',
        date: 'October 2022',
        year: 2022,
        description: 'Lighting design, live visuals.'
    },
    {
        id: 'arc-installation-2022',
        number: '020',
        type: 'Exhibition',
        category: 'Lighting',
        title: 'Quantum Tunnel - Arc Music Festival',
        venue: 'ARC Music Festival',
        location: 'Chicago, IL',
        date: 'August-September 2022',
        year: 2022,
        description: 'Interactive installation design for ARC Music Festival.'
    },
    {
        id: 'fire-house-7-2022',
        number: '019',
        type: 'Performance',
        category: 'Lighting',
        title: 'Fire House VII',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'August 2022',
        year: 2022,
        description: 'Fire House series production, live visuals.'
    },
    {
        id: 'fire-house-6-lolla-2022',
        number: '018',
        type: 'Performance',
        category: 'Lighting',
        title: 'Fire House VI, Lollapalooza Pre-Party',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'July 2022',
        year: 2022,
        description: 'Fire House series production, live visuals.'
    },
    {
        id: 'fire-house-5-2022',
        number: '017',
        type: 'Performance',
        category: 'Visuals',
        title: 'Fire House V',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'June 2022',
        year: 2022,
        description: 'Fire House series production, live visuals.'
    },
    {
        id: 'fire-house-4-2022',
        number: '017',
        type: 'Performance',
        category: 'Visuals',
        title: 'Fire House IV',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'May 2022',
        year: 2022,
        description: 'Fire House series production, live visuals.'
    },
    {
        id: 'digital-graffiti-2022',
        number: '015',
        type: 'Exhibition',
        category: 'Visuals',
        title: 'Prayer Wheel - Digital Graffiti',
        venue: 'Digital Graffiti Projection Mapping Festival',
        location: 'Alys Beach, FL',
        date: 'May 2022',
        year: 2022,
        description: 'Interactive installation.'
    },
    {
        id: 'fire-house-3-2022',
        number: '015',
        type: 'Performance',
        category: 'Visuals',
        title: 'Fire House III',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'April 2022',
        year: 2022,
        description: 'Fire House series production, live visuals.'
    },
    {
        id: 'gtronic-dimi-2022',
        number: '014',
        type: 'Performance',
        category: 'Visuals',
        title: 'Gtronic - DimiBowie',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'April 2022',
        year: 2022,
        description: 'Visual production, live visuals.'
    },
    {
        id: 'fire-house-2-2022',
        number: '013',
        type: 'Performance',
        category: 'Visuals',
        title: 'Fire House II',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'March 2022',
        year: 2022,
        description: 'Fire House series production, live visuals.'
    },
    {
        id: 'taimur-dimi-2022',
        number: '012',
        type: 'Performance',
        category: 'Visuals',
        title: 'Taimur - DimiBowie',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'February 2022',
        year: 2022,
        description: 'Visual production, live visuals.'
    },
    {
        id: 'fire-house-1-2022',
        number: '011',
        type: 'Performance',
        category: 'Visuals',
        title: 'Fire House I',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'February 2022',
        year: 2022,
        description: 'Fire House series production, live visuals.'
    },
    {
        id: 'praslea-dimi-2022',
        number: '010',
        type: 'Performance',
        category: 'Visuals',
        title: 'Praslea - DimiBowie',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'January 2022',
        year: 2022,
        description: 'Visual production, live visuals.'
    },
    
    // 2021
    {
        id: 'janina-dimi-2021',
        number: '009',
        type: 'Performance',
        category: 'Visuals',
        title: 'Janina - DimiBowie',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'December 2021',
        year: 2021,
        description: 'Visual production, live visuals.'
    },
    {
        id: 'guti-dimi-2021',
        number: '008',
        type: 'Performance',
        category: 'Visuals',
        title: 'Guti - DimiBowie',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'November 2021',
        year: 2021,
        description: 'Visual production, live visuals.'
    },
    //2019
    {
        id: 'digital-graffiti-2019',
        number: '068',
        type: 'Exhibition',
        category: 'Visuals',
        title: 'Digital Graffiti 2019',
        venue: 'Digital Graffiti Projection Mapping Festival',
        location: 'Alys Beach, FL',
        date: 'May 2019',
        year: 2019,
        description: 'Motion design, visuals.'
    },
];

// Helper functions
function getEntriesByYear(year) {
    return cvEntries.filter(entry => entry.year === year);
}

function getEntriesByType(type) {
    return cvEntries.filter(entry => entry.type.toLowerCase() === type.toLowerCase());
}

function getEntriesByCategory(category) {
    return cvEntries.filter(entry => entry.category.toLowerCase() === category.toLowerCase());
}

function getAllYears() {
    const years = [...new Set(cvEntries.map(entry => entry.year))];
    return years.sort((a, b) => b - a); // Descending order
}

function getEntryById(id) {
    return cvEntries.find(entry => entry.id === id);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cvEntries, getEntriesByYear, getEntriesByType, getEntriesByCategory, getAllYears, getEntryById };
}
