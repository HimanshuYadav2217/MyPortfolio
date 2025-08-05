# Customizable Portfolio Website

A fully customizable, modern and responsive portfolio website built with HTML, CSS, and JavaScript. This template allows you to easily showcase your work, skills, and contact information.

## Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean and professional design
- **Dark Mode**: Toggle between light and dark themes
- **Dynamic Typing Effect**: Animated text in the hero section
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Contact Form**: Ready-to-use form (requires backend integration for actual submission)
- **Scroll Reveal Animations**: Elements animate as they come into view
- **Easy to Customize**: Well-commented code for easy modifications

## How to Customize

### Basic Information

1. **Name & Role**: Edit your name and profession in the HTML file
   - Update in the navbar, hero section, about section, and footer

2. **Profile Photo**: Replace the placeholder image
   - Replace `images/profile.svg` with your own photo (recommended size: 400x400px)

3. **About Me**: Update your personal information
   - Edit the text in the About section
   - Update your details (name, email, location, availability)

4. **Skills**: Customize your skills list
   - Add or remove skill items in the Skills section
   - Use Font Awesome icons (already included)

5. **Projects**: Showcase your work
   - Replace project images in the `images` folder
   - Update project titles, descriptions, and links
   - Modify the technology tags for each project

6. **Contact Information**: Update your contact details
   - Change email, location, phone number
   - Update social media links

### Styling Customization

1. **Colors**: Change the color scheme by editing CSS variables in the `:root` section of `css/style.css`
   - Primary color: `--primary-color`
   - Background color: `--background-color`
   - Text color: `--text-color`
   - And more...

2. **Fonts**: Change the typography
   - The template uses Google Fonts (Poppins)
   - To change, update the Google Fonts link in the HTML head and the font-family in CSS

3. **Layout**: Modify the layout as needed
   - The template uses CSS Flexbox and Grid for layouts
   - Adjust spacing using the CSS variables (--spacing-xs, --spacing-sm, etc.)

### JavaScript Customization

1. **Typing Effect**: Change the rotating text in the hero section
   - Edit the `data-roles` attribute in the HTML

2. **Form Handling**: Implement actual form submission
   - The current implementation shows a success message without sending data
   - Modify the form submission code in `script.js` to connect to your backend

## File Structure

```
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets
│   ├── profile.svg     # Profile picture placeholder
│   ├── project1.svg    # Project image placeholder
│   ├── project2.svg    # Project image placeholder
│   └── project3.svg    # Project image placeholder
└── README.md           # This file
```

## Usage

1. Clone or download this repository
2. Customize the content as described above
3. Deploy to your preferred hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Credits

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

## License

Feel free to use this template for your personal portfolio. Attribution is appreciated but not required.