# NorthPeak Digital – Task B: Optimization Changelog

## Project Links

- **Repository:** https://github.com/Vishesh07s/northpeak-digital-agency
- **Live Demo:** https://heroic-khapse-afc2f5.netlify.app/
- **Loom Video:** https://www.loom.com/share/bbfa9ffff84543ca9d5e457035d79674

---

# Performance Optimizations

| Optimization | What I Implemented | Why It Helps |
|---------------|--------------------|--------------|
| Vanilla HTML, CSS & JavaScript | Built the project without any frontend framework. | Keeps the website lightweight and reduces unnecessary JavaScript. |
| Deferred JavaScript | Added the `defer` attribute to the main JavaScript file. | Allows HTML to load first and prevents render-blocking scripts. |
| Inline SVG Icons | Used inline SVG icons instead of icon libraries. | Reduces external requests and keeps icons sharp on all screen sizes. |
| Font Preconnect | Added preconnect links for Google Fonts. | Helps the browser establish the connection earlier, improving font loading. |
| Optimized CSS Animations | Used `transform` and `opacity` for hover animations instead of layout-changing properties. | Results in smoother animations with fewer layout recalculations. |

---

# Accessibility Improvements

| Feature | Implementation | Benefit |
|----------|----------------|---------|
| Semantic HTML | Used `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` where appropriate. | Improves document structure for screen readers and search engines. |
| Proper Heading Structure | Maintained a logical heading hierarchy (`h1 → h2 → h3`). | Makes navigation easier for assistive technologies. |
| Accessible Forms | Connected every input with its corresponding `<label>` and added clear validation messages. | Improves usability for keyboard and screen-reader users. |
| Mobile Friendly Controls | Buttons and interactive elements use comfortable touch target sizes. | Improves usability on mobile devices. |
| Color Contrast | Selected colors with good contrast between text and background. | Improves readability and accessibility. |

---

# Design Decisions

### Things I'm Proud Of

### 1. Clean Component Structure
The project is divided into reusable sections such as Navbar, Hero, Services, Pricing, Contact, and Footer. Utility classes were used to avoid repeating CSS.

### 2. Performance-Focused Approach
Instead of adding unnecessary libraries, I kept the project lightweight using semantic HTML, modern CSS, and vanilla JavaScript.

### 3. Responsive Layout
The website was designed to work across desktop, tablet, and mobile screens using Flexbox, CSS Grid, and responsive spacing.

---

# If I Had More Time

I would enhance the project by:

- Adding subtle scroll and reveal animations.
- Replacing the hero dashboard placeholder with a richer interactive dashboard illustration.
- Connecting the contact form to a backend (Express.js or Serverless Functions) and storing submissions in a database such as PostgreSQL or Supabase.
- Improving the dashboard mockup with more realistic analytics and data visualizations.

---

# Lighthouse Goal

The project was built with the goal of achieving a Lighthouse score of **90+** in Performance and Accessibility by focusing on semantic HTML, lightweight assets, responsive design, and clean CSS.