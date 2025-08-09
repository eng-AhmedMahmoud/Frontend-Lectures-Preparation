# CSS Units - Practice Task

## Overview
Master the art of CSS units by building a responsive layout that demonstrates the proper use of pixels, percentages, em, rem, and viewport units. You'll create a flexible design that adapts to different screen sizes and user preferences.

## Learning Objectives
By completing this task, you will:
- Use appropriate CSS units for different scenarios
- Create responsive layouts with relative units
- Implement scalable typography with rem and em
- Build fluid designs with percentages and viewport units
- Understand when to use each unit type

## Task Requirements

### 1. Root Font Size & CSS Variables
- Set the root font size to 18px for rem calculations
- Create CSS custom properties for consistent spacing values
- Use these variables throughout your stylesheet

### 2. Container Layout
- Create a container that's 90% wide but max 1000px
- Center the container using margin auto
- Add responsive padding using rem units

### 3. Header Design
- Make the header full viewport width (100vw)
- Set the main heading to scale between 24px and 48px using clamp()
- Use viewport units for responsive typography

### 4. Card System
- Create cards that are 300px on desktop but 100% on mobile
- Use media queries to change card behavior
- Implement consistent spacing with rem units

### 5. Button Design
- Use em units for button padding (0.75em vertical, 1.5em horizontal)
- Ensure buttons scale with their font size
- Add hover effects that work across different sizes

### 6. Sidebar Layout
- Make the sidebar 25% of container width with min-width of 200px
- Use rem for consistent spacing throughout sidebar content
- Ensure sidebar adapts to different screen sizes

### 7. Footer Requirements
- Create a footer that's always at least 10vh tall
- Use flexbox to center content vertically
- Implement responsive font sizes that scale with viewport

### 8. Responsive Typography
- Use clamp() for fluid typography
- Implement a typography scale using rem units
- Ensure text remains readable at all screen sizes

### 9. Spacing System
- Create a consistent spacing scale using custom properties
- Use rem units for margins and padding
- Implement responsive spacing that adapts to screen size

### 10. Mobile Responsiveness
- Stack sidebar below main content on mobile
- Adjust card layouts for smaller screens
- Ensure all touch targets are at least 44px (accessibility requirement)

## Bonus Challenges
- Implement a modular scale for typography
- Use CSS logical properties for international compatibility
- Create a design system with consistent spacing and sizing
- Add smooth transitions between responsive breakpoints
- Implement advanced viewport unit techniques (vmin, vmax)

## Files to Work With
- **`task.html`** - The HTML structure with semantic markup
- **`task_solution.css`** - Your CSS implementation using various units

## HTML Structure Overview
The HTML includes:
- Header with responsive navigation
- Main content area with card grid
- Sidebar with navigation and widgets
- Footer with centered content
- Various text elements to demonstrate typography scaling

## Success Criteria
Your completed task should demonstrate:
- ✅ Appropriate unit choice for different scenarios
- ✅ Responsive design that works on all screen sizes
- ✅ Scalable typography using relative units
- ✅ Consistent spacing system throughout
- ✅ Proper use of viewport units for responsive design
- ✅ Clean, maintainable CSS with good organization

## Unit Usage Guidelines
- **px**: Borders, box-shadows, small fixed elements
- **%**: Widths, flexible layouts, responsive containers
- **em**: Padding/margin relative to font size, component-based scaling
- **rem**: Font sizes, consistent spacing, global measurements
- **vw/vh**: Full-width/height elements, responsive typography
- **clamp()**: Fluid typography and spacing

## Common Mistakes to Avoid
- Using px for everything (not responsive)
- Mixing em and rem without understanding the difference
- Forgetting to test at different screen sizes
- Not considering user font size preferences
- Using viewport units for everything (can cause accessibility issues)

## Testing Checklist
After completing your CSS:
1. ✅ Test at different screen sizes (mobile, tablet, desktop)
2. ✅ Verify text scaling by changing browser font size
3. ✅ Check that containers don't break at extreme sizes
4. ✅ Ensure touch targets are large enough on mobile
5. ✅ Validate that the design remains usable at 200% zoom

## Time Estimate
- **Beginner**: 3-4 hours
- **With experience**: 2-3 hours

Remember: Good unit choice is fundamental to creating responsive, accessible web designs. Think about the user's context and choose units that create the best experience across all devices and preferences!