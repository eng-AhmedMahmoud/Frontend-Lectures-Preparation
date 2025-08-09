# CSS Selectors - Practice Task

## Overview
Master CSS selectors by building a complete e-commerce product page. You'll use element selectors, classes, IDs, pseudo-classes, attribute selectors, and combinators to create a fully styled, interactive shopping experience.

## Learning Objectives
By completing this task, you will:
- Apply different types of CSS selectors appropriately
- Use pseudo-classes for interactive states
- Implement attribute selectors for form styling
- Combine selectors for precise targeting
- Create hover effects and visual feedback
- Build a cohesive design system using selector strategies

## Task Requirements

### 1. Universal and Element Selectors
- Use universal selector (*) to reset margins and padding
- Style body with appropriate font family and background color
- Apply consistent styling to all headings (h1, h2, h3)
- Group selectors for consistent styling across multiple elements

### 2. ID Selectors
- Use ID selector to style #page-header with dark background and white text
- Create a unique style for the main product showcase area
- Implement specific layout for footer content using ID

### 3. Class Selectors
- Style .menu-item for navigation with inline display and padding
- Create .product class for consistent product card styling
- Implement .price class with distinctive styling
- Use .btn class for consistent button appearance

### 4. Multiple Class Combinations
- Style .product.featured with special gold border and background
- Make .product.sold-out appear grayed out with overlay text
- Create .btn.primary and .btn.secondary with different color schemes
- Implement .price.sale with strikethrough original price

### 5. Pseudo-Class Selectors
- Add :hover effects for all interactive elements
- Use :first-child to style the first product differently
- Implement :nth-child for alternating product backgrounds
- Apply :focus styles for keyboard navigation accessibility
- Use :disabled for non-interactive elements

### 6. Pseudo-Element Selectors
- Use ::before or ::after to add decorative elements
- Implement tooltips or badges using pseudo-elements
- Create visual indicators (like "NEW" or "SALE" badges)

### 7. Attribute Selectors
- Style input[type="email"] with specific border and padding
- Use input[required] to add visual indicators for required fields
- Style links differently based on href attributes
- Implement data-* attribute styling for custom behaviors

### 8. Descendant and Child Selectors
- Use descendant selectors (.product h3) for nested styling
- Implement child selectors (.nav > li) for direct children only
- Style nested lists differently from top-level lists
- Apply specific styles to elements within certain containers

### 9. Sibling Selectors
- Use adjacent sibling selector (+) for elements immediately following others
- Implement general sibling selector (~) for related elements
- Style form labels that come before inputs

### 10. Interactive States and Feedback
- Create smooth hover transitions for all interactive elements
- Implement active states for buttons and links
- Add visual feedback for form validation states
- Use transform effects on hover for enhanced interactivity

## Bonus Challenges
- Implement complex selector combinations for precise targeting
- Create a "sold out" overlay using ::after pseudo-element
- Use :not() selector to exclude certain elements from styling
- Implement CSS-only dropdown menus using :hover
- Create zebra-striping for tables using :nth-child
- Add focus-visible for modern focus management

## Files to Work With
- **`task.html`** - E-commerce product page structure
- **`task_solution.css`** - Your CSS implementation using various selectors

## HTML Structure Overview
The HTML includes:
- Header with navigation menu
- Product grid with various product states (featured, sold-out, sale)
- Newsletter signup form with different input types
- Footer with links and contact information
- Elements with various classes, IDs, and data attributes

## Success Criteria
Your completed task should demonstrate:
- ✅ Proper use of all major selector types
- ✅ Appropriate selector specificity and organization
- ✅ Interactive hover and focus states
- ✅ Accessible form styling with clear visual feedback
- ✅ Consistent design system using class-based architecture
- ✅ Clean, maintainable CSS with good selector choices

## Selector Priority and Best Practices
1. **Element selectors**: For global styling and resets
2. **Class selectors**: For reusable component styling
3. **ID selectors**: For unique, one-off elements (use sparingly)
4. **Pseudo-classes**: For interactive states and structural styling
5. **Attribute selectors**: For form inputs and conditional styling
6. **Combinators**: For contextual styling and relationships

## Common Mistakes to Avoid
- Over-using ID selectors (creates high specificity)
- Creating overly complex selector chains
- Not providing hover states for interactive elements
- Forgetting focus states for keyboard accessibility
- Using !important instead of proper selector specificity
- Not testing selector performance on large pages

## Testing Requirements
After completing your CSS:
1. ✅ Test all hover effects work as expected
2. ✅ Verify keyboard navigation with Tab key
3. ✅ Check that form styling provides clear feedback
4. ✅ Ensure product cards display correctly in all states
5. ✅ Validate that the design works without JavaScript
6. ✅ Test selector specificity doesn't cause conflicts

## Accessibility Considerations
- Ensure sufficient color contrast for all text
- Provide clear focus indicators for keyboard users
- Make sure interactive elements have appropriate sizing
- Use semantic HTML with CSS for visual styling
- Test with screen readers if possible

## Time Estimate
- **Beginner**: 4-5 hours
- **With experience**: 2-3 hours

## Learning Resources
- [MDN CSS Selectors Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Specificity Calculator](https://specificity.keegan.st/)
- [Can I Use - CSS Selectors](https://caniuse.com/?search=css%20selectors)

Remember: CSS selectors are the foundation of all styling. Master them well, and you'll be able to target any element precisely while maintaining clean, maintainable code!