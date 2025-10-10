# Art Project Portfolio Site

A creative studio portfolio with ticket-stub styled project cards featuring parallax effects, theme modes, and dynamic animations.

## File Structure

```
ticket_site/
├── index.html              # Homepage with featured projects
├── cv.html                 # CV/Resume page
├── projects/               # Individual project pages
│   ├── midnight-jazz.html  # Example project page
│   └── _template.html      # Project template
├── projects-data.js        # Project metadata & configuration
├── cv-data.js              # CV entries data
├── styles.css              # Global styles
├── project-styles.css      # Project page specific styles
├── cv-styles.css           # CV page specific styles
├── script.js               # Main JavaScript
├── cv-script.js            # CV filtering JavaScript
├── assets/                 # Images and media
│   ├── CW_Lobby_V7.webp
│   ├── Vossler_led_volume.jpg
│   └── ...
└── _doc/                   # Documentation videos
```

## Adding a New Project

### Method 1: Using projects-data.js (Recommended)

1. **Add project data** to `projects-data.js`:
```javascript
{
    id: 'your-project-slug',
    number: '007',
    title: 'YOUR PROJECT<br>NAME',
    category: 'Category Name',
    year: '2025',
    thumbnail: '../assets/your-image.jpg',
    featured: true,  // Set to true to show on homepage
    url: 'projects/your-project-slug.html',
    client: 'Client Name',
    services: 'Service 1<br>Service 2',
    recognition: 'Award or Recognition',
    description: {
        challenge: 'Description of the challenge...',
        approach: 'Description of your approach...'
    },
    results: [
        { number: '300%', text: 'Growth metric' },
        { number: '20K', text: 'Engagement metric' },
        { number: '15', text: 'Another metric' }
    ],
    nextProject: 'next-project-slug'
}
```

2. **Create project page** in `projects/` folder:
   - Copy `projects/midnight-jazz.html` as a template
   - Update all project-specific content
   - Make sure paths use `../` prefix for assets/css/js

3. **Add thumbnail** to `assets/` folder

4. **Update homepage** (optional):
   - Add ticket stub in `index.html` if not using dynamic generation
   - Or implement dynamic generation from `projects-data.js`

### Method 2: Manual

1. Create HTML file in `projects/your-project.html`
2. Update all relative paths (add `../` prefix)
3. Add project thumbnail to `assets/`
4. Link from homepage

## Path Structure

### Homepage (`index.html`)
- CSS: `styles.css`
- JS: `script.js`  
- Images: `assets/image.jpg`

### Project Pages (`projects/*.html`)
- CSS: `../styles.css`, `../project-styles.css`
- JS: `../script.js`
- Images: `../assets/image.jpg`
- Links: `../index.html`

## Features

- **Theme Modes**: Light, Dark, Auto (system preference)
- **Parallax Effects**: Mouse-based (desktop) and device orientation (mobile)
- **World Clock**: Auto-appears after 30s inactivity
- **Polka Dot Backgrounds**: Consistent pattern across all sections
- **Ticket Stub Design**: Unique project card styling with perforation details
- **CV Page**: Filterable list of shows, performances, and exhibitions
- **Responsive Design**: Mobile-first approach with touch support

## Theme Configuration

Users can select themes via Settings dropdown:
- **Day**: Light mode with black dots
- **Night**: Dark mode with white dots  
- **Auto**: Follows system preference (default on mobile)

## Project Display Control

Control which projects appear on homepage by setting `featured: true/false` in `projects-data.js`.

## Managing CV Entries

Add new shows/performances/exhibitions to `cv-data.js`:

```javascript
{
    id: 'unique-slug',
    number: '025',
    type: 'Exhibition', // Exhibition, Performance, or Show
    title: 'Your Event Name',
    venue: 'Venue Name, City',
    date: 'Month Year',
    year: 2025,
    description: 'Brief description of the event.'
}
```

The CV page automatically:
- Groups entries by year (newest first)
- Provides filtering by type (All, Exhibition, Performance, Show)
- Maintains ticket stub aesthetic
- Adapts to theme modes

## Next Steps

Consider implementing:
1. Dynamic project generation from `projects-data.js`
2. Dynamic CV generation from `cv-data.js`
3. Search functionality across projects and CV
4. Project pagination
5. Load more/infinite scroll
6. Export CV as PDF

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- iOS device orientation support with permission handling



