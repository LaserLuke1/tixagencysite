// CV Page Dynamic Generation and Filtering
document.addEventListener('DOMContentLoaded', function() {
    // Generate CV entries from data
    generateCVEntries();
    
    // Set up filtering
    setupFiltering();
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

function generateCVEntries() {
    const container = document.getElementById('cv-entries-container');
    if (!container) return;
    
    // Get all years
    const years = getAllYears();
    
    // Generate sections for each year
    years.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.className = 'cv-year-section';
        
        // Year label
        const yearLabel = document.createElement('h2');
        yearLabel.className = 'year-label';
        yearLabel.textContent = year;
        yearSection.appendChild(yearLabel);
        
        // Get entries for this year
        const entries = getEntriesByYear(year);
        
        // Create entry elements with year-based numbering
        entries.forEach((entry, index) => {
            const yearNumber = index + 1;
            const entryElement = createEntryElement(entry, yearNumber);
            yearSection.appendChild(entryElement);
        });
        
        container.appendChild(yearSection);
    });
}

function createEntryElement(entry, yearNumber) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'cv-entry';
    entryDiv.setAttribute('data-category', entry.category.toLowerCase());
    
    const locationHTML = entry.location ? `<span class="entry-location">${entry.location}</span>` : '';
    
    entryDiv.innerHTML = `
        <div class="entry-header">
            <div class="entry-badges">
                <span class="entry-type">${entry.type}</span>
                <span class="entry-category">${entry.category}</span>
            </div>
        </div>
        <h3 class="entry-title">${entry.title}</h3>
        <div class="entry-details">
            <span class="entry-venue"><span class="venue-label">Venue:</span> ${entry.venue}</span>
            <div class="entry-date-location">
                <span class="entry-date">${entry.date}</span>
                ${locationHTML}
            </div>
        </div>
        <p class="entry-description">${entry.description}</p>
    `;
    
    return entryDiv;
}

function setupFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Track active filters
    let activeTypeFilter = 'all';
    let activeCategoryFilter = 'all';

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const filterType = button.getAttribute('data-filter-type');
            
            // Update active button within the same filter group
            const filterGroup = button.closest('.filter-group');
            const groupButtons = filterGroup.querySelectorAll('.filter-btn');
            groupButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active filters
            if (filterType === 'type') {
                activeTypeFilter = filter;
            } else if (filterType === 'category') {
                activeCategoryFilter = filter;
            }
            
            // Apply filters
            applyFilters(activeTypeFilter, activeCategoryFilter);
        });
    });
}

function applyFilters(typeFilter, categoryFilter) {
    const cvEntries = document.querySelectorAll('.cv-entry');
    
    cvEntries.forEach(entry => {
        const entryType = entry.querySelector('.entry-type').textContent.toLowerCase();
        const entryCategory = entry.getAttribute('data-category');
        
        // Check if entry matches both active filters
        const typeMatch = (typeFilter === 'all') || (entryType === typeFilter);
        const categoryMatch = (categoryFilter === 'all') || (entryCategory === categoryFilter);
        
        if (typeMatch && categoryMatch) {
            entry.classList.remove('hidden');
            entry.style.animation = 'fadeIn 0.5s ease';
        } else {
            entry.classList.add('hidden');
        }
    });
}
