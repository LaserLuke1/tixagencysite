# Art Project Portfolio Site

A creative studio portfolio with ticket-stub styled project cards featuring parallax effects, theme modes, and dynamic animations.

## File Structure

```
ticket_site/
├── index.html              # Homepage with featured projects
├── projects/               # Individual project pages
│   └── midnight-jazz.html  # Example project page
├── projects-data.js        # Project metadata & configuration
├── styles.css              # Global styles
├── project-styles.css      # Project page specific styles
├── script.js               # Main JavaScript
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

## Theme Configuration

Users can select themes via Settings dropdown:
- **Day**: Light mode with black dots
- **Night**: Dark mode with white dots  
- **Auto**: Follows system preference (default on mobile)

## Project Display Control

Control which projects appear on homepage by setting `featured: true/false` in `projects-data.js`.

## Next Steps

Consider implementing:
1. Dynamic project generation from `projects-data.js`
2. Project filtering/categories
3. Search functionality
4. Project pagination
5. Load more/infinite scroll

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- iOS device orientation support with permission handling

