# CSS Flexbox Layout - Practice Task

## Overview
Master CSS Flexbox by building a complete responsive website layout. You'll create flexible, modern layouts that adapt to different screen sizes while maintaining proper alignment and distribution of content.

## Learning Objectives
By completing this task, you will:
- Understand flexbox container and item properties
- Create responsive layouts without media queries
- Master flex alignment and distribution techniques
- Build common layout patterns with flexbox
- Implement the Holy Grail layout and other classic designs
- Handle flex item sizing and growth behavior

## Task Requirements

### 1. Page Structure (Flex Container)
- Make the `.page-wrapper` a flex container with column direction
- Ensure the layout fills the full viewport height (min-height: 100vh)
- Allow the main content area to grow and fill available space
- Create a proper document flow with header, main, and footer

### 2. Header Navigation Layout
- Create a sticky header with flexbox layout:
  - Logo aligned to the left
  - Navigation centered with evenly spaced items
  - Search/user actions aligned to the right
- Implement responsive behavior that stacks on mobile
- Add smooth transitions for layout changes

### 3. Sidebar and Main Content Layout
- Build a flexible sidebar layout:
  - Main content takes available space (flex-grow)
  - Sidebar has fixed width (300px) on desktop
  - Stack vertically on mobile screens
- Implement proper spacing between sidebar and main content
- Allow content to scroll independently if needed

### 4. Card Grid System
- Create a responsive card grid using flexbox:
  - 3 cards per row on desktop
  - 2 cards per row on tablet
  - 1 card per row on mobile
- Ensure cards have equal heights regardless of content
- Implement proper gaps and spacing between cards

### 5. Media Object Pattern
- Build the classic media object layout:
  - Image positioned on the left (fixed width)
  - Content fills the remaining space
  - Vertically center-aligned content
- Make it responsive for mobile screens
- Handle different image sizes gracefully

### 6. Form Layout
- Create a flexible form layout:
  - Label and input pairs properly aligned
  - Multi-column form sections on wider screens
  - Submit button aligned appropriately
- Implement responsive form behavior
- Add proper spacing and visual hierarchy

### 7. Footer Layout
- Design a flexible footer:
  - Multiple columns of links on desktop
  - Stacked layout on mobile
  - Copyright text centered at bottom
- Implement equal-width columns that adapt
- Add proper spacing and visual separation

### 8. Button Groups and Toolbars
- Create flexible button groups:
  - Buttons distribute evenly across available space
  - Proper spacing between buttons
  - Responsive stacking on smaller screens
- Implement toolbar layouts with mixed content types

### 9. Flexible Navigation Patterns
- Build responsive navigation menus:
  - Horizontal navigation with flexible spacing
  - Dropdown menu positioning with flexbox
  - Mobile hamburger menu transformation
- Ensure accessibility with keyboard navigation

### 10. Advanced Flex Techniques
- Implement complex alignment scenarios:
  - Items aligned to different positions within container
  - Mixed alignment on main and cross axes
  - Flexible spacing between groups of items
- Use flex-basis, flex-grow, and flex-shrink effectively

## Bonus Challenges
- Create a Holy Grail layout (header, 3-column main, footer)
- Implement a CSS-only accordion using flexbox
- Build a responsive image gallery with flexible sizing
- Create a dashboard layout with flexible widgets
- Implement a sticky footer that pushes to bottom
- Build a pricing table with equal-height cards

## Files to Work With
- **`task.html`** - Complete website structure with various layout components
- **`task_solution.css`** - Your flexbox implementation

## HTML Structure Overview
The HTML includes:
- Header with logo, navigation, and user actions
- Main content area with sidebar and primary content
- Card grid for products or articles
- Media objects for content display
- Contact form with various input types
- Footer with multiple content sections

## Success Criteria
Your completed task should demonstrate:
- ✅ Proper flexbox container and item setup
- ✅ Responsive behavior without complex media queries
- ✅ Equal-height columns and cards
- ✅ Proper alignment and distribution of space
- ✅ Flexible content that adapts to different sizes
- ✅ Professional, modern layout appearance
- ✅ Accessibility considerations for all users

## Key Flexbox Properties to Master

### Container Properties
- `display: flex` - Creates flex container
- `flex-direction` - Sets main axis direction
- `flex-wrap` - Controls wrapping behavior
- `justify-content` - Aligns items along main axis
- `align-items` - Aligns items along cross axis
- `align-content` - Aligns wrapped lines
- `gap` - Sets spacing between items

### Item Properties
- `flex-grow` - Controls growth factor
- `flex-shrink` - Controls shrink factor
- `flex-basis` - Sets initial size before growth/shrink
- `flex` - Shorthand for grow, shrink, basis
- `align-self` - Overrides container's align-items
- `order` - Changes visual order without changing HTML

## Layout Patterns to Implement
1. **Holy Grail Layout** - Header, 3-column main, footer
2. **Media Object** - Image with accompanying text content
3. **Card Layout** - Equal-height cards in flexible grid
4. **Sticky Footer** - Footer at bottom of viewport or content
5. **Navigation Bar** - Flexible navigation with proper alignment
6. **Form Layout** - Responsive form with flexible inputs

## Common Mistakes to Avoid
- Forgetting to set `display: flex` on container
- Confusing main axis vs cross axis alignment
- Not understanding flex-grow vs flex-basis
- Overusing `!important` instead of understanding specificity
- Not testing with different content lengths
- Ignoring accessibility considerations

## Responsive Design Strategy
- Use `flex-wrap` for natural responsive behavior
- Implement `flex-basis` with percentage or pixel values
- Combine flexbox with min/max width constraints
- Use `order` property for mobile layout reorganization
- Test thoroughly on various screen sizes

## Testing Requirements
After completing your CSS:
1. ✅ Test layout on desktop, tablet, and mobile sizes
2. ✅ Verify equal heights work with different content lengths
3. ✅ Check that navigation remains usable at all sizes
4. ✅ Ensure form layout works on various screen widths
5. ✅ Test with longer/shorter content in flexible areas
6. ✅ Validate keyboard navigation works properly

## Browser Support Considerations
- Modern flexbox has excellent browser support
- Test in various browsers for consistency
- Consider graceful degradation for older browsers
- Use vendor prefixes if supporting older browsers

## Time Estimate
- **Beginner**: 5-6 hours
- **With experience**: 3-4 hours

## Learning Resources
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Flexbox Froggy Game](https://flexboxfroggy.com/)

Remember: Flexbox is perfect for one-dimensional layouts and component-level design. Master these patterns, and you'll be able to create flexible, maintainable layouts for any project!