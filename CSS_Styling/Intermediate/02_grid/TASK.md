# CSS Grid Layout - Practice Task

## Overview
Master CSS Grid by building multiple complex layouts including a complete website, dashboard interface, and various grid-based components. You'll learn to create sophisticated two-dimensional layouts that are responsive and maintainable.

## Learning Objectives
By completing this task, you will:
- Create complex two-dimensional layouts with CSS Grid
- Master grid template areas for semantic layouts
- Implement responsive grid systems with auto-fit and minmax
- Build dashboard and magazine-style layouts
- Understand grid item placement and spanning
- Create flexible grid systems for various content types

## Task Requirements

### 1. Page Layout with Grid Areas
- Create a `.page-layout` using CSS Grid with named template areas:
  - Header spanning full width at top
  - Sidebar (250px wide) on the left
  - Main content area taking remaining space
  - Footer spanning full width at bottom
- Use `grid-template-areas` for semantic, readable layout
- Implement proper responsive behavior for mobile screens

### 2. Photo Gallery Grid
- Build a responsive photo gallery using CSS Grid:
  - Auto-fit columns with minimum 200px width
  - Some photos should span 2 columns (wide format)
  - Some photos should span 2 rows (tall format)
  - Featured images span both 2 columns and 2 rows
- Add consistent gap between all grid items
- Implement hover effects that don't break the grid

### 3. Pricing Table Layout
- Create a responsive pricing table:
  - 3 equal columns on desktop screens
  - Stack to single column on mobile
  - Featured plan stands out (larger, highlighted)
  - All cards maintain equal height regardless of content
- Center align the middle card vertically if needed
- Add proper spacing and visual hierarchy

### 4. Blog Layout System
- Design a complex blog layout:
  - Main article takes 2/3 of the width
  - Sidebar takes 1/3 of the width
  - Related articles grid below main content
  - Grid should adapt to different screen sizes
- Implement proper content hierarchy and spacing
- Ensure readability and visual balance

### 5. Dashboard Grid System
- Build a 12-column dashboard grid:
  - Stats cards spanning different column widths (3, 4, 6 columns)
  - Large chart area spanning 8 columns
  - Activity feed spanning 4 columns
  - Full-width data table spanning all 12 columns
- Implement responsive breakpoints where grid reorganizes
- Add proper spacing and visual grouping

### 6. Magazine Layout
- Create a magazine-style layout:
  - Featured article as large hero section
  - Secondary articles in sidebar
  - Related content below in multi-column grid
  - Flexible grid that adapts to content
- Implement visual hierarchy with different sized grid areas
- Add proper typography and spacing

### 7. Card-Based Grid System
- Build a flexible card grid:
  - Auto-fit cards with minimum and maximum widths
  - Cards grow to fill available space
  - Maintain aspect ratios for different card types
  - Implement loading states and empty states
- Add smooth transitions for layout changes
- Ensure accessibility for keyboard navigation

### 8. Complex Grid Overlays
- Create overlapping grid layouts:
  - Items that span multiple rows and columns
  - Overlapping elements using z-index
  - Background grid areas for visual design
  - Content that breaks out of standard grid
- Implement creative layouts while maintaining usability

### 9. Responsive Grid Patterns
- Implement various responsive grid patterns:
  - Auto-fit with minmax for flexible columns
  - Explicit grid tracks for controlled layouts
  - Subgrid for nested grid alignment (where supported)
  - Container queries for component-based responsiveness

### 10. Advanced Grid Techniques
- Master advanced CSS Grid features:
  - Named grid lines for precise placement
  - Grid template shorthand properties
  - Implicit vs explicit grid behavior
  - Grid auto-flow for dynamic content
- Implement complex alignment and justification

## Bonus Challenges
- Create a CSS Grid version of masonry layout
- Build a calendar interface using CSS Grid
- Implement a complex form layout with grid
- Create an image comparison grid with overlays
- Build a responsive email template layout
- Design a portfolio showcase with varied grid areas

## Files to Work With
- **`task.html`** - Multiple layout examples and components
- **`task_solution.css`** - Your CSS Grid implementation

## HTML Structure Overview
The HTML includes:
- Complete page layout with header, sidebar, main, footer
- Photo gallery with images of different aspect ratios
- Pricing cards with varying content lengths
- Blog layout with articles and related content
- Dashboard components with different data visualizations
- Various content types to test grid flexibility

## Success Criteria
Your completed task should demonstrate:
- ✅ Proper use of grid template areas for semantic layouts
- ✅ Responsive behavior using auto-fit and minmax
- ✅ Complex item placement and spanning techniques
- ✅ Effective use of grid gaps and alignment
- ✅ Professional dashboard and magazine layouts
- ✅ Accessibility considerations throughout
- ✅ Clean, maintainable CSS with good organization

## Key CSS Grid Properties to Master

### Container Properties
- `display: grid` - Creates grid container
- `grid-template-columns/rows` - Defines grid tracks
- `grid-template-areas` - Creates named grid areas
- `grid-template` - Shorthand for template properties
- `gap` (or `grid-gap`) - Sets spacing between tracks
- `justify-items/align-items` - Aligns items within their areas
- `justify-content/align-content` - Aligns entire grid

### Item Properties
- `grid-column/row` - Places items in specific tracks
- `grid-area` - Places items in named areas or coordinates
- `justify-self/align-self` - Aligns individual items
- `grid-column-start/end` - Defines item span explicitly
- `grid-row-start/end` - Defines item row placement

## Grid Layout Patterns to Implement
1. **Holy Grail Layout** - Semantic page structure with grid areas
2. **Dashboard Layout** - Mixed-size widgets in responsive grid
3. **Magazine Layout** - Complex editorial design with varied sizing
4. **Gallery Grid** - Image grid with different aspect ratios
5. **Card Grid** - Flexible content cards with auto-fit
6. **Form Grid** - Complex forms with aligned inputs and labels

## Responsive Grid Strategies
- Use `minmax()` for flexible track sizing
- Implement `auto-fit` for dynamic column numbers
- Combine `fr` units with fixed sizes
- Use `repeat()` for pattern creation
- Plan mobile-first grid transformations

## Common Mistakes to Avoid
- Overcomplicating grid definitions
- Not planning for content of different lengths
- Forgetting about implicit grid behavior
- Misunderstanding grid area vs grid line placement
- Not testing with real content variations
- Ignoring accessibility in complex layouts

## Testing Requirements
After completing your CSS:
1. ✅ Test all layouts on various screen sizes
2. ✅ Verify grid areas work with different content amounts
3. ✅ Check that responsive behavior works smoothly
4. ✅ Ensure keyboard navigation works in complex grids
5. ✅ Test loading states and empty content scenarios
6. ✅ Validate that layouts don't break with long content

## Browser Support Notes
- CSS Grid has excellent modern browser support
- Consider fallbacks for older browsers if needed
- Test in various browsers for consistency
- Use feature queries (@supports) for progressive enhancement

## Performance Considerations
- Avoid overly complex grid definitions
- Use efficient selectors for grid items
- Consider paint and layout performance
- Test with large amounts of content

## Time Estimate
- **Beginner**: 6-8 hours
- **With experience**: 4-5 hours

## Learning Resources
- [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Grid Garden Game](https://cssgridgarden.com/)
- [Grid by Example](https://gridbyexample.com/)

Remember: CSS Grid excels at two-dimensional layouts and page-level design. Combined with Flexbox for component-level layouts, you can create any design pattern efficiently and maintainably!