# Project Images Guide

## Current Project Images

I've updated your portfolio projects with suitable placeholder images from Unsplash that match each project type:

### 1. Employee Attendance System
- **Current Image**: Business/office environment representing attendance tracking
- **Suggestion**: Replace with actual screenshots of your attendance system dashboard

### 2. Food Ordering System - Microservices Architecture
- **Current Image**: Food delivery/restaurant app interface
- **Suggestion**: Screenshot of your food ordering system interface or architecture diagram

### 3. Ayurveda Hospital Management System
- **Current Image**: Healthcare/medical technology interface
- **Suggestion**: Screenshots of your hospital management system dashboard

### 4. E-Commerce System
- **Current Image**: Online shopping/e-commerce interface
- **Suggestion**: Screenshots of your e-commerce platform showing product listings, cart, etc.

### 5. Mobile Application Development
- **Current Image**: Mobile app development/smartphone interface
- **Suggestion**: Screenshots of your actual mobile apps or app store listings

### 6. Portfolio Website
- **Current Image**: Web development/coding workspace
- **Suggestion**: Screenshot of your actual portfolio website

## How to Add Your Own Screenshots

1. **Take Screenshots**: Capture high-quality screenshots of your actual projects
2. **Optimize Images**: 
   - Recommended size: 400x250 pixels or 16:10 aspect ratio
   - Format: PNG or JPG
   - Optimize for web (compress to reduce file size)

3. **Add to Assets**: Place your images in `/src/assets/projects/`

4. **Update Projects.js**: Replace the Unsplash URLs with your local images:
   ```javascript
   // Instead of Unsplash URL:
   image: "https://images.unsplash.com/photo-..."
   
   // Use local image:
   image: require("../assets/projects/your-image-name.png")
   ```

## Image Requirements

- **Aspect Ratio**: 16:10 (400x250px) or similar
- **File Size**: Under 500KB each
- **Quality**: High resolution but optimized for web
- **Content**: Should clearly show your project's interface or key features

## Alternative: Project Mockups

If you don't have screenshots yet, you can create mockups using:
- Figma
- Canva
- Adobe XD
- Or other design tools

The current Unsplash images are professional and will work well until you can replace them with actual project screenshots.
