// CV Data - Single source of truth for all CV entries
const cvEntries = [
    // 2025
    {
        id: 'datfest-2025',
        number: '073',
        type: 'Performance',
        category: 'Visuals',
        title: 'DATFEST Visuals',
        venue: 'Chemistry Creative',
        location: 'Brooklyn, NY',
        date: 'March 29, 2025',
        year: 2025,
        description: 'Visuals performance for industry meetup event.'
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
        date: 'September 29, 2024',
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
        date: 'September 18, 2024',
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
        date: 'September 17, 2024',
        year: 2024,
        description: 'Laser production for awards ceremony.'
    },
    {
        id: 'joes-weed-st-2024',
        number: '069',
        type: 'Show',
        category: 'Lighting',
        title: 'Joe\'s on Weed St',
        venue: 'Joe\'s on Weed St',
        location: 'Chicago, IL',
        date: 'June 28, 2024',
        year: 2024,
        description: 'Laser show production.'
    },
    {
        id: 'digital-graffiti-2024',
        number: '068',
        type: 'Exhibition',
        category: 'Visuals',
        title: 'Digital Graffiti 2024',
        venue: 'Digital Graffiti Festival',
        location: 'Alys Beach, FL',
        date: 'May 17, 2024',
        year: 2024,
        description: 'Installation design and execution for Digital Graffiti festival.'
    },
    {
        id: 'dark-matter-coffee-2024',
        number: '067',
        type: 'Exhibition',
        category: 'Laser',
        title: 'Dark Matter Coffee - Artist Art Fair',
        venue: 'Dark Matter Coffee',
        location: 'Chicago, IL',
        date: 'April 13, 2024',
        year: 2024,
        description: 'Laser installation for art fair event.'
    },
    {
        id: 'radius-bicep-2024',
        number: '066',
        type: 'Performance',
        category: 'Laser',
        title: 'BICEP',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'April 12, 2024',
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
        date: 'April 4, 2024',
        year: 2024,
        description: 'Laser show production.'
    },
    {
        id: 'cookies-grand-opening-2024',
        number: '064',
        type: 'Performance',
        category: 'Laser',
        title: 'Cookies CHI Grand Opening',
        venue: 'Cookies Retail',
        location: 'Chicago, IL',
        date: 'March 16, 2024',
        year: 2024,
        description: 'Laser production for grand opening event.'
    },
    {
        id: 'radius-fresch-2024',
        number: '063',
        type: 'Performance',
        category: 'Laser',
        title: 'Dr. Fresch x Habstrakt',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'February 17, 2024',
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
        date: 'February 3, 2024',
        year: 2024,
        description: 'VJ and laser production.'
    },
    {
        id: 'radius-armnhmr-2024',
        number: '061',
        type: 'Performance',
        category: 'Laser',
        title: 'ARMNHMR',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'January 20, 2024',
        year: 2024,
        description: 'Laser production for ARMNHMR performance.'
    },
    
    // 2023
    {
        id: 'proper-crssd-nye-2023',
        number: '060',
        type: 'Performance',
        category: 'Laser',
        title: 'PROPER CRSSD NYE',
        venue: 'PROPER',
        location: 'San Diego, CA',
        date: 'December 31, 2023',
        year: 2023,
        description: 'Laser production for New Year\'s Eve event.'
    },
    {
        id: 'dragon-room-fmk-nov-2023',
        number: '059',
        type: 'Performance',
        category: 'Visuals',
        title: 'Dragon Room - FMK',
        venue: 'Dragon Room',
        location: 'Chicago, IL',
        date: 'November 25, 2023',
        year: 2023,
        description: 'VJ production for FMK performance.'
    },
    {
        id: 'afro-jack-2023',
        number: '058',
        type: 'Performance',
        category: 'Laser',
        title: 'RADIUS - Afro Jack',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'November 18, 2023',
        year: 2023,
        description: 'Laser production for Afro Jack performance.'
    },
    {
        id: 'lipless-cermak-2023',
        number: '057',
        type: 'Performance',
        category: 'Visuals',
        title: 'Lipless @ Cermak',
        venue: 'Cermak',
        location: 'Chicago, IL',
        date: 'November 17, 2023',
        year: 2023,
        description: 'VJ production for Lipless.'
    },
    {
        id: 'sonny-radius-2023',
        number: '056',
        type: 'Performance',
        category: 'Visuals',
        title: 'RADIUS - Sonny',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'November 11, 2023',
        year: 2023,
        description: 'VJ production for Sonny performance.'
    },
    {
        id: 'armin-radius-2023',
        number: '055',
        type: 'Performance',
        category: 'Visuals',
        title: 'RADIUS - Armin',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'November 10, 2023',
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
        date: 'November 4, 2023',
        year: 2023,
        description: 'VJ production for Day of the Dead celebration.'
    },
    {
        id: 'soho-house-2023',
        number: '053',
        type: 'Performance',
        category: 'Laser',
        title: 'Soho House Chicago',
        venue: 'Soho House',
        location: 'Chicago, IL',
        date: 'October 28, 2023',
        year: 2023,
        description: 'Laser production at Soho House.'
    },
    {
        id: 'deadmau5-radius-2023',
        number: '052',
        type: 'Performance',
        category: 'Visuals',
        title: 'RADIUS - Deadmau5',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'October 27, 2023',
        year: 2023,
        description: 'VJ production for Deadmau5 performance.'
    },
    {
        id: 'anjuna-radius-2023',
        number: '051',
        type: 'Performance',
        category: 'Laser',
        title: 'RADIUS - Anjuna',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'October 21, 2023',
        year: 2023,
        description: 'Laser production for Anjuna performance.'
    },
    {
        id: 'carl-cox-radius-2023',
        number: '050',
        type: 'Performance',
        category: 'Laser',
        title: 'RADIUS - Carl Cox',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'October 20, 2023',
        year: 2023,
        description: 'Laser production for Carl Cox performance.'
    },
    {
        id: 'concord-2023',
        number: '049',
        type: 'Performance',
        category: 'Visuals',
        title: 'Concord Music Hall',
        venue: 'Concord Music Hall',
        location: 'Chicago, IL',
        date: 'October 12, 2023',
        year: 2023,
        description: 'VJ production.'
    },
    {
        id: 'ben-bohmer-2023',
        number: '048',
        type: 'Performance',
        category: 'Laser',
        title: 'Ben Bohmer',
        venue: 'Performance Venue',
        location: 'Chicago, IL',
        date: 'October 7, 2023',
        year: 2023,
        description: 'Laser production for Ben Bohmer.'
    },
    {
        id: 'rich-nxt-2023',
        number: '047',
        type: 'Performance',
        category: 'Visuals',
        title: 'Rich NXT - Dimibowie',
        venue: 'Rich NXT',
        location: 'Chicago, IL',
        date: 'September 29, 2023',
        year: 2023,
        description: 'VJ production for Dimibowie.'
    },
    {
        id: 'primary-ld-2023',
        number: '046',
        type: 'Performance',
        category: 'Lighting',
        title: 'Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'September 23, 2023',
        year: 2023,
        description: 'Lighting design and visuals production.'
    },
    {
        id: 'fmk-sept16-2023',
        number: '045',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'September 16, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'fmk-sept9-2023',
        number: '044',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'September 9, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'arc-afters-radius-2023',
        number: '043',
        type: 'Performance',
        category: 'Laser',
        title: 'ARC Afters @ RADIUS',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'September 1-3, 2023',
        year: 2023,
        description: 'Laser production for ARC Music Festival afterparties.'
    },
    {
        id: 'fmk-aug26-2023',
        number: '042',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'August 26, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'fmk-aug19-2023',
        number: '041',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'August 19, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'fmk-aug12-2023',
        number: '040',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'August 12, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'lolla-afters-radius-2023',
        number: '039',
        type: 'Performance',
        category: 'Laser',
        title: 'Lollapalooza Afters @ RADIUS',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'August 3-6, 2023',
        year: 2023,
        description: 'Laser production for Lollapalooza afterparties.'
    },
    {
        id: 'fmk-jul29-2023',
        number: '038',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'July 29, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'fmk-jul22-2023',
        number: '037',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'July 22, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'fmk-jul15-2023',
        number: '036',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'July 15, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'fmk-jul8-2023',
        number: '035',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'July 8, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'fmk-jul1-2023',
        number: '034',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'July 1, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'fmk-jun24-2023',
        number: '033',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'June 24, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'heatwave-afters-radius-2023',
        number: '032',
        type: 'Performance',
        category: 'Laser',
        title: 'Heatwave Afters @ RADIUS',
        venue: 'RADIUS',
        location: 'Chicago, IL',
        date: 'June 10-11, 2023',
        year: 2023,
        description: 'Laser production for Heatwave afterparties.'
    },
    {
        id: 'fmk-jun3-2023',
        number: '031',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'June 3, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'laser-warehouse-2023',
        number: '030',
        type: 'Performance',
        category: 'Laser',
        title: 'Laser Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'April 26, 2023',
        year: 2023,
        description: 'Laser warehouse event production.'
    },
    {
        id: 'fmk-mar-2023',
        number: '029',
        type: 'Performance',
        category: 'Visuals',
        title: 'FMK',
        venue: 'FMK',
        location: 'Chicago, IL',
        date: 'March 18, 2023',
        year: 2023,
        description: 'Weekly FMK production.'
    },
    {
        id: 'els-birthday-2023',
        number: '028',
        type: 'Performance',
        category: 'Visuals',
        title: 'El\'s Birthday @ Blind Barber',
        venue: 'Blind Barber',
        location: 'Chicago, IL',
        date: 'March 12, 2023',
        year: 2023,
        description: 'Private event production.'
    },
    {
        id: 'red-party-fmk-2023',
        number: '027',
        type: 'Performance',
        category: 'Visuals',
        title: 'Red Party @ Dragon Room - FMK',
        venue: 'Dragon Room',
        location: 'Chicago, IL',
        date: 'February 11, 2023',
        year: 2023,
        description: 'Red Party themed event production.'
    },
    {
        id: 'dimibowie-warehouse-feb-2023',
        number: '026',
        type: 'Performance',
        category: 'Visuals',
        title: 'DimiBowie @ Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'February 4, 2023',
        year: 2023,
        description: 'Visual production for DimiBowie performance.'
    },
    
    // 2022
    {
        id: 'avilo-prysm-2022',
        number: '025',
        type: 'Performance',
        category: 'Visuals',
        title: 'Avilo @ Prysm',
        venue: 'Prysm',
        location: 'Chicago, IL',
        date: 'November 11, 2022',
        year: 2022,
        description: 'Visual production for Avilo.'
    },
    {
        id: 'trifecta-primary-oct-2022',
        number: '024',
        type: 'Performance',
        category: 'Lighting',
        title: 'Trifecta @ Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'October 28, 2022',
        year: 2022,
        description: 'Lighting and production for Trifecta event.'
    },
    {
        id: 'petre-dimibowie-2022',
        number: '023',
        type: 'Performance',
        category: 'Visuals',
        title: 'Petre, dimibowie @ Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'October 15, 2022',
        year: 2022,
        description: 'Visual production for Petre and dimibowie.'
    },
    {
        id: 'midnight-rush-2022',
        number: '022',
        type: 'Performance',
        category: 'Lighting',
        title: 'Midnight Rush @ Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'October 8, 2022',
        year: 2022,
        description: 'Lighting design for Midnight Rush event.'
    },
    {
        id: 'pilsen-fest-2022',
        number: '021',
        type: 'Performance',
        category: 'Visuals',
        title: 'Pilsen Fest + After Party',
        venue: 'Pilsen',
        location: 'Chicago, IL',
        date: 'September 16, 2022',
        year: 2022,
        description: 'Festival and afterparty visual production.'
    },
    {
        id: 'arc-installation-2022',
        number: '020',
        type: 'Exhibition',
        category: 'Visuals',
        title: 'ARC Music Fest Installation',
        venue: 'ARC Music Festival',
        location: 'Chicago, IL',
        date: 'August-September 2022',
        year: 2022,
        description: 'Installation design for ARC Music Festival.'
    },
    {
        id: 'fire-house-7-2022',
        number: '019',
        type: 'Performance',
        category: 'Lighting',
        title: 'Fire House 7 @ Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'August 26, 2022',
        year: 2022,
        description: 'Fire House series production.'
    },
    {
        id: 'fire-house-6-lolla-2022',
        number: '018',
        type: 'Performance',
        category: 'Lighting',
        title: 'Fire House 6 - Lolla Pre-Party @ Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'July 29, 2022',
        year: 2022,
        description: 'Lollapalooza pre-party production.'
    },
    {
        id: 'fire-house-5-2022',
        number: '017',
        type: 'Performance',
        category: 'Lighting',
        title: 'Fire House 5 @ Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'June 24, 2022',
        year: 2022,
        description: 'Fire House series production.'
    },
    {
        id: 'trifecta-warehouse-2022',
        number: '016',
        type: 'Performance',
        category: 'Visuals',
        title: 'Trifecta @ Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'June 17, 2022',
        year: 2022,
        description: 'Trifecta event visual production.'
    },
    {
        id: 'fire-house-3-2022',
        number: '015',
        type: 'Performance',
        category: 'Lighting',
        title: 'Fire House 3 @ Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'April 29, 2022',
        year: 2022,
        description: 'Fire House series production.'
    },
    {
        id: 'gtronic-dimi-2022',
        number: '014',
        type: 'Performance',
        category: 'Visuals',
        title: 'Gtronic, dimi @ Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'April 16, 2022',
        year: 2022,
        description: 'Visual production for Gtronic and dimi.'
    },
    {
        id: 'fire-house-2-2022',
        number: '013',
        type: 'Performance',
        category: 'Lighting',
        title: 'Fire House 2 @ Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'March 26, 2022',
        year: 2022,
        description: 'Fire House series production.'
    },
    {
        id: 'taimur-dimi-2022',
        number: '012',
        type: 'Performance',
        category: 'Visuals',
        title: 'Taimur, Dimi @ Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'February 26, 2022',
        year: 2022,
        description: 'Visual production for Taimur and Dimi.'
    },
    {
        id: 'fire-house-1-2022',
        number: '011',
        type: 'Performance',
        category: 'Lighting',
        title: 'Fire House 1 @ Primary',
        venue: 'Primary',
        location: 'Chicago, IL',
        date: 'February 4, 2022',
        year: 2022,
        description: 'Fire House series production.'
    },
    {
        id: 'praslea-dimi-2022',
        number: '010',
        type: 'Performance',
        category: 'Visuals',
        title: 'Praslea, dimi @ Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'January 7, 2022',
        year: 2022,
        description: 'Visual production for Praslea and dimi.'
    },
    
    // 2021
    {
        id: 'janina-dimi-2021',
        number: '009',
        type: 'Performance',
        category: 'Visuals',
        title: 'Janina, dimi @ Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'December 17, 2021',
        year: 2021,
        description: 'Visual production for Janina and dimi.'
    },
    {
        id: 'guti-dimi-2021',
        number: '008',
        type: 'Performance',
        category: 'Visuals',
        title: 'Guti, dimi @ Warehouse',
        venue: 'Warehouse',
        location: 'Chicago, IL',
        date: 'November 13, 2021',
        year: 2021,
        description: 'Visual production for Guti and dimi.'
    },
    {
        id: 'bthd-avilo-nov-2021',
        number: '007',
        type: 'Performance',
        category: 'Visuals',
        title: 'Bring The House Down / Avilo @ The Dime',
        venue: 'The Dime',
        location: 'Chicago, IL',
        date: 'November 12, 2021',
        year: 2021,
        description: 'Visual production for Bring The House Down event.'
    },
    {
        id: 'bthd-avilo-oct-2021',
        number: '006',
        type: 'Performance',
        category: 'Visuals',
        title: 'Bring The House Down / Avilo @ The Dime',
        venue: 'The Dime',
        location: 'Chicago, IL',
        date: 'October 22, 2021',
        year: 2021,
        description: 'Visual production for Bring The House Down event.'
    }
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
