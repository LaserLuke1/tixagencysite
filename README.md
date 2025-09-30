# Vibe Agency - Ticket Stub Portfolio

A clean, minimalist agency website featuring unique concert ticket stub designs for project thumbnails.

## Design Features

- **Clean Aesthetic**: White background with thin black line borders throughout
- **Concert Ticket Stubs**: Each project is displayed as a unique ticket stub with:
  - Ticket number and "ADMIT ONE" header
  - Project/show name
  - Category and year information
  - Authentic barcode styling
  - Perforation line details
  - **Cool hover animations**: Lift, rotate, and scale with bouncy easing
  - Alternating rotation directions for visual variety
  - Title shifts and barcode stretches on hover
- **Responsive Design**: Fully responsive layout that works on all devices
- **Theme Support**: Manual theme control + automatic system detection
  - **Settings dropdown** in navigation with theme options:
    - **Day** (always light)
    - **Dream** (always dark)
    - **Auto** (follows system preference)
  - Theme preference saved in browser localStorage
  - Maintains the clean, minimal aesthetic in both modes
- **9 Trippy Visual Effects**: 🌙 **Dream Mode Exclusive Collection**
  - All effects only available when in Dream (dark) theme
  - Can enable multiple effects simultaneously for crazy combinations!
  - All preferences saved in localStorage
  - Automatically disable when switching to Day mode
  
  **Available Effects:**
  1. **RGB Drip** - Chromatic aberration with dripping distortion
  2. **Wave Distortion** - Makes the page flow like water
  3. **VHS Glitch** - Retro scanlines and tracking errors
  4. **Kaleidoscope** - Rotating radial symmetry patterns
  5. **Static Noise** - Flickering TV static overlay
  6. **Radial Blur** - Pulsing tunnel vision effect
  7. **Ghost Echo** - Offset layered duplicates
  8. **Prism Rainbow** - Shifting spectrum gradient
  9. **Cursor Feedback** - Delayed trailing circles that follow cursor with feedback loop
- **Smooth Animations**: Subtle hover effects and scroll animations
- **Easter Egg**: Time-based greeting that appears on site load! 🎫
  - Shows "Good Morning", "Good Afternoon", "Good Evening", or "Good Night" depending on the time
  - Click the logo 5 times to trigger it again
  - Also check the browser console for a special message 😉

## File Structure

```
ticket_site/
├── index.html          # Main homepage
├── project.html        # Demo project detail page
├── styles.css          # Main styling and responsive design
├── project-styles.css  # Project page specific styles
├── script.js           # JavaScript for interactions and animations
└── README.md           # This file
```

## Getting Started

Simply open `index.html` in your web browser. No build process or dependencies required!

### Option 1: Direct Open
- Double-click `index.html` to open in your default browser

### Option 2: Local Server (Recommended)
For a better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Adding New Projects

To add more ticket stubs, copy this template in `index.html`:

```html
<div class="ticket-stub" data-project="7">
    <div class="ticket-perforation"></div>
    <div class="ticket-content">
        <div class="ticket-header">
            <span class="ticket-number">#007</span>
            <span class="ticket-admit">ADMIT ONE</span>
        </div>
        <h3 class="ticket-title">YOUR PROJECT<br>NAME HERE</h3>
        <div class="ticket-details">
            <span class="ticket-category">Project Category</span>
            <span class="ticket-year">2024</span>
        </div>
        <div class="ticket-barcode">||||  ||  ||||  ||  ||  ||||</div>
    </div>
</div>
```

### Changing Colors

The design uses a minimalist black and white palette with automatic dark mode support. To modify:

- Background: Edit `body { background-color: #ffffff; }` in `styles.css`
- Borders: Edit all instances of `border: 1px solid #000000;`
- Text: Edit `color: #000000;` throughout
- Dark Mode: Modify the `@media (prefers-color-scheme: dark)` section in both CSS files

### Modifying Layout

The ticket grid is responsive and uses CSS Grid:

```css
.tickets-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px;
}
```

Adjust `minmax(320px, 1fr)` to change the minimum card width.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use and modify for your projects.

## Credits

Created with attention to detail and appreciation for clean, minimal design.
