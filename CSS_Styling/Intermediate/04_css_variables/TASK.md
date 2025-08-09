# CSS Variables (Custom Properties) - Practice Task

## Overview
Master CSS variables by building a comprehensive theming system and design token library. You'll create maintainable, scalable stylesheets using CSS custom properties for colors, typography, spacing, and responsive design.

## Learning Objectives
By completing this task, you will:
- Define and use CSS variables effectively
- Create maintainable design systems with custom properties
- Implement dynamic theming capabilities
- Use variables in calculations and fallback scenarios
- Master variable scoping and inheritance
- Build responsive designs using CSS variables
- Integrate CSS variables with JavaScript for dynamic updates

## Task Requirements

### 1. Design Token System
- Create a comprehensive set of CSS variables for:
  - **Colors**: Primary, secondary, accent, neutral palette
  - **Typography**: Font families, sizes, weights, line heights
  - **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl)
  - **Shadows**: Light, medium, heavy shadow variations
  - **Border radii**: Different radius sizes for components
  - **Transitions**: Standard timing and easing functions

### 2. Color Theming System
- Implement a multi-theme system:
  - **Light theme**: Standard light color scheme
  - **Dark theme**: Dark color scheme with proper contrast
  - **High contrast theme**: Accessibility-focused theme
  - **Custom brand themes**: Multiple brand color variations
- Use CSS variable scoping to switch between themes
- Ensure all themes maintain proper accessibility standards

### 3. Responsive Design with Variables
- Create responsive variables that change at different breakpoints:
  - Font sizes that scale appropriately
  - Spacing that adapts to screen size
  - Component dimensions that respond to viewport
  - Grid systems using variable-based columns
- Use media queries to modify variable values

### 4. Component Theming
- Build themed components using CSS variables:
  - **Cards**: Background, border, shadow theming
  - **Buttons**: Multiple button variants using variables
  - **Forms**: Input styling with theme-aware colors
  - **Navigation**: Themed navigation with hover states
- Ensure components work across all theme variations

### 5. Dynamic Variable Updates
- Implement JavaScript-controlled variable updates:
  - Color picker that updates theme colors in real-time
  - Size controls that modify component dimensions
  - Typography controls for font size and spacing
  - Theme switcher with smooth transitions
- Use `document.documentElement.style.setProperty()` for updates

### 6. Fallback and Error Handling
- Implement proper fallback values for all variables:
  - Graceful degradation when variables are undefined
  - Browser compatibility considerations
  - Progressive enhancement strategies
- Test fallback behavior thoroughly

### 7. Variable Calculations
- Use CSS variables in calc() functions:
  - Dynamic sizing based on variable values
  - Proportional spacing systems
  - Responsive typography scaling
  - Complex layout calculations using variables
- Create mathematical relationships between design tokens

### 8. Scoping and Inheritance
- Demonstrate variable scoping at different levels:
  - Global variables defined on :root
  - Component-level variable overrides
  - Context-specific variable modifications
  - Inheritance patterns and cascade behavior
- Create logical scoping hierarchies

### 9. Performance Optimization
- Optimize CSS variable usage for performance:
  - Minimize variable recomputation
  - Efficient variable naming conventions
  - Reduce CSS file size through variable reuse
  - Test performance impact of variable updates

### 10. Documentation and Maintenance
- Create clear documentation for the variable system:
  - Variable naming conventions
  - Usage guidelines and examples
  - Theme implementation instructions
  - Maintenance and update procedures

## Bonus Challenges
- Implement CSS variable-based animations
- Create a variable inspector tool for debugging
- Build a design system documentation site
- Implement server-side theme preferences
- Create CSS variable polyfills for older browsers
- Build a theme generator tool using CSS variables

## Files to Work With
- **`task.html`** - Complete website with various components to theme
- **`task_solution.css`** - Your CSS variables implementation
- **`theme-switcher.js`** - JavaScript for dynamic theme switching

## HTML Structure Overview
The HTML includes:
- Header with theme switcher controls
- Card components in various layouts
- Form elements with themed inputs
- Navigation components
- Typography showcase
- Interactive controls for variable manipulation
- Dashboard-style layout components

## Success Criteria
Your completed task should demonstrate:
- ✅ Comprehensive design token system using CSS variables
- ✅ Multiple themes that work seamlessly across components
- ✅ Responsive behavior using variable-based breakpoints
- ✅ Dynamic theme switching with JavaScript integration
- ✅ Proper fallback handling for browser compatibility
- ✅ Efficient variable scoping and inheritance
- ✅ Professional documentation and naming conventions
- ✅ Performance-optimized variable usage

## CSS Variables Best Practices

### Naming Conventions
```css
/* Semantic naming */
--color-primary: #3498db;
--color-text-body: #333333;
--spacing-component-padding: 1rem;

/* Avoid presentational names */
--blue: #3498db; /* ❌ */
--big-text: 24px; /* ❌ */
```

### Variable Organization
```css
:root {
  /* Colors */
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  
  /* Typography */
  --font-size-body: 16px;
  --font-weight-normal: 400;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
}
```

### Scoping Strategy
```css
/* Global variables */
:root { --global-color: blue; }

/* Component variables */
.card { --card-background: white; }

/* State variables */
.card:hover { --card-background: #f5f5f5; }
```

## Theme Implementation Patterns
1. **Single Property Themes** - One variable controls multiple properties
2. **Cascading Themes** - Variables that build on each other
3. **Context-Aware Themes** - Variables that change based on context
4. **User-Controlled Themes** - Variables modified by user preferences

## Common Mistakes to Avoid
- Using variables for one-off values
- Creating too many variables without clear purpose
- Not providing fallback values
- Ignoring performance implications of variable updates
- Poor naming conventions that don't scale
- Not testing theme combinations thoroughly

## Testing Requirements
After completing your CSS:
1. ✅ Test all themes across different components
2. ✅ Verify fallback behavior in older browsers
3. ✅ Check accessibility of all theme combinations
4. ✅ Test dynamic updates performance
5. ✅ Validate responsive behavior with variables
6. ✅ Ensure proper variable inheritance

## Browser Support Considerations
- CSS Custom Properties are supported in all modern browsers
- Provide fallbacks for Internet Explorer if needed
- Use PostCSS plugins for backward compatibility
- Test across browser implementations

## Time Estimate
- **Beginner**: 6-8 hours
- **With experience**: 4-5 hours

## Learning Resources
- [MDN CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS-Tricks Custom Properties Guide](https://css-tricks.com/a-complete-guide-to-custom-properties/)
- [Smashing Magazine CSS Variables](https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/)

Remember: CSS variables are powerful tools for creating maintainable, scalable design systems. Focus on semantic naming, logical organization, and creating systems that grow with your project's needs!