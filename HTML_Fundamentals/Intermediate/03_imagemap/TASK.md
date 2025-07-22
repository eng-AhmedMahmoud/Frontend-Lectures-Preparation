# HTML Imagemap Task

## Objective
Create an HTML page with an interactive imagemap that demonstrates your understanding of the `<map>` and `<area>` elements.

## Requirements

### Create a Navigation Imagemap
Create an HTML page with:
1. An image that represents a simple website navigation (can be a basic graphic or SVG)
2. Use imagemap to create clickable areas for:
   - Home section
   - About section  
   - Services section
   - Contact section

### Implement Different Area Shapes
Your imagemap should include:
- At least one rectangular area (`shape="rect"`)
- At least one circular area (`shape="circle"`)
- Proper coordinates for each area
- Descriptive `alt` and `title` attributes

### Add Interactivity
- Each area should link to a corresponding section on the same page
- Create the content sections that the areas link to
- Add visual feedback when hovering over clickable areas

### HTML Structure Requirements
```html
<!-- Your image with usemap attribute -->
<img src="your-image" alt="Navigation" usemap="#nav-map">

<!-- Your map definition -->
<map name="nav-map">
  <!-- Your area elements here -->
</map>

<!-- Your content sections here -->
```

### Bonus Challenges
1. Add CSS styling to highlight the clickable areas visually
2. Use a polygon shape (`shape="poly"`) for an irregular area
3. Add JavaScript to show which area was clicked

## Learning Goals
- Understand how to create interactive images using HTML imagemaps
- Learn to work with coordinates and different area shapes
- Practice linking between different sections of a page
- Understand accessibility considerations for imagemaps

## Tips
- Use browser developer tools to help determine coordinates
- Test your imagemap by clicking on different areas
- Ensure all areas have proper `alt` text for accessibility
- Consider using online tools to help generate coordinates

## Validation
- Ensure your HTML is valid
- Test that all clickable areas work correctly
- Verify that the page is accessible to screen readers
