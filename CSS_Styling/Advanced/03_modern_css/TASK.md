# Modern CSS Features - Practice Task

## Overview
Master cutting-edge CSS features by building a comprehensive showcase that demonstrates the latest capabilities of modern CSS. You'll implement container queries, CSS nesting, the :has() selector, logical properties, cascade layers, and other advanced features that represent the future of CSS development.

## Learning Objectives
By completing this task, you will:
- Implement container queries for component-based responsive design
- Use native CSS nesting for cleaner, more maintainable code
- Master the :has() parent selector for advanced styling logic
- Apply CSS logical properties for international compatibility
- Organize CSS with cascade layers for predictable styling
- Utilize modern CSS functions and color spaces
- Create future-proof, progressive CSS architectures

## Task Requirements

### 1. Container Queries Implementation
- Build components that respond to their container size, not viewport:
  - **Card components** that adapt layout based on container width
  - **Navigation menus** that change orientation in different containers
  - **Data visualizations** that scale based on available space
  - **Media objects** that reflow content at container breakpoints
- Use `container-type` and `@container` rules effectively
- Demonstrate advantages over traditional media queries

### 2. CSS Nesting Architecture
- Implement native CSS nesting throughout your stylesheet:
  - **Component-based nesting** for logical code organization
  - **Pseudo-class nesting** for hover, focus, and active states
  - **Media query nesting** within component blocks
  - **Proper nesting depth** (avoid excessive nesting levels)
- Create maintainable, readable nested CSS structures
- Compare with traditional flat CSS approaches

### 3. Advanced :has() Selector Usage
- Create sophisticated styling logic using the :has() selector:
  - **Form validation** - Style form groups based on input validity
  - **Content-aware layouts** - Adapt layouts based on content presence
  - **Interactive states** - Style parents based on child interactions
  - **Dynamic theming** - Change themes based on descendant elements
- Implement complex selector combinations with :has()
- Ensure fallback behavior for unsupported browsers

### 4. CSS Logical Properties System
- Build layouts using logical properties for international support:
  - **Text direction adaptation** - Layouts that work in RTL languages
  - **Block and inline dimensions** - Use logical sizing properties
  - **Logical spacing** - Margins and padding that adapt to writing mode
  - **Border and positioning** - Logical border and position properties
- Create components that work across different writing modes
- Demonstrate the advantages over physical properties

### 5. Cascade Layers Organization
- Implement a systematic CSS architecture using @layer:
  - **Reset layer** - Normalize styles at lowest priority
  - **Base layer** - Fundamental element styles
  - **Components layer** - Reusable component styles
  - **Utilities layer** - High-priority utility classes
- Organize styles for predictable cascade behavior
- Solve specificity conflicts using layer ordering

### 6. Modern CSS Functions
- Utilize cutting-edge CSS functions throughout your design:
  - **clamp()** - Fluid typography and spacing
  - **min() and max()** - Responsive sizing without media queries
  - **round()** - Mathematical calculations (where supported)
  - **sin(), cos(), tan()** - Trigonometric functions for animations
- Create dynamic, mathematical relationships in your CSS
- Build responsive designs using function-based approaches

### 7. Advanced Color Spaces
- Implement modern color functions and spaces:
  - **oklch()** - Perceptually uniform color space
  - **lab()** - Device-independent color space
  - **color-mix()** - Dynamic color mixing
  - **relative colors** - Modify existing colors dynamically
- Create sophisticated color systems using modern color science
- Ensure graceful fallbacks for older browsers

### 8. CSS Subgrid Implementation
- Use CSS subgrid for complex layout alignment:
  - **Card grids** with aligned content across rows
  - **Form layouts** with consistent field alignment
  - **Table-like structures** without semantic tables
  - **Complex magazine layouts** with precise alignment
- Understand when subgrid provides advantages over regular grid

### 9. Progressive Enhancement Strategy
- Build a progressive enhancement approach:
  - **Feature detection** using @supports queries
  - **Graceful fallbacks** for unsupported features
  - **Enhanced experiences** for capable browsers
  - **Performance considerations** for modern CSS features
- Ensure compatibility across browser landscape

### 10. Performance and Optimization
- Optimize modern CSS for performance:
  - **Efficient container queries** that don't cause layout thrashing
  - **Minimal nesting depth** for faster CSS parsing
  - **Strategic layer organization** for optimal cascade performance
  - **Critical CSS** considerations with modern features

## Bonus Challenges
- Implement CSS anchor positioning for tooltips and popovers
- Create scroll-driven animations using modern CSS
- Build a design system using all modern CSS features
- Implement view transitions API integration
- Create responsive animations using modern CSS functions
- Build a CSS-only state management system using :has()

## Files to Work With
- **`task.html`** - Comprehensive showcase HTML structure
- **`task_solution.css`** - Your modern CSS implementation

## HTML Structure Overview
The HTML includes:
- Component containers for container query demonstrations
- Form elements for :has() selector testing
- Multi-directional content for logical properties
- Nested component structures for CSS nesting
- Color demonstration areas
- Interactive elements for advanced selectors

## Success Criteria
Your completed task should demonstrate:
- ✅ Effective use of container queries for component responsiveness
- ✅ Clean, maintainable CSS nesting architecture
- ✅ Advanced :has() selector implementations
- ✅ International-ready logical properties usage
- ✅ Well-organized cascade layers system
- ✅ Modern CSS functions for dynamic styling
- ✅ Progressive enhancement with graceful fallbacks
- ✅ Performance-optimized modern CSS code

## Key Modern CSS Features to Master

### Container Queries
```css
.card {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card-content {
    display: flex;
  }
}
```

### CSS Nesting
```css
.component {
  background: white;
  
  & .title {
    color: blue;
    
    &:hover {
      color: darkblue;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
}
```

### :has() Selector
```css
.form-group:has(input:invalid) {
  border-color: red;
}

.card:has(.featured-badge) {
  border: 2px solid gold;
}
```

### Logical Properties
```css
.text-block {
  margin-block: 1rem;
  margin-inline: 2rem;
  padding-block-start: 0.5rem;
  border-inline-start: 2px solid blue;
}
```

### Cascade Layers
```css
@layer reset, base, components, utilities;

@layer base {
  h1 { font-size: 2rem; }
}

@layer components {
  .card { background: white; }
}
```

## Browser Support Considerations
- Container queries: Modern browsers (2022+)
- CSS nesting: Modern browsers (2023+)
- :has() selector: Safari 15.4+, Chrome 105+, Firefox 103+
- Logical properties: Excellent modern support
- Cascade layers: Chrome 99+, Firefox 97+, Safari 15.4+

## Testing Requirements
After completing your CSS:
1. ✅ Test container queries in different container sizes
2. ✅ Verify CSS nesting compiles and works correctly
3. ✅ Check :has() selector behavior across supported browsers
4. ✅ Test logical properties in RTL writing modes
5. ✅ Validate cascade layer order and specificity
6. ✅ Ensure progressive enhancement works properly

## Performance Considerations
- Container queries can be expensive - use judiciously
- Deep nesting can impact CSS parsing performance
- :has() selector can be costly - optimize selectors carefully
- Layer organization affects cascade calculation speed

## Time Estimate
- **Beginner**: 10-12 hours
- **With experience**: 6-8 hours

## Learning Resources
- [MDN Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [CSS Nesting Module](https://www.w3.org/TR/css-nesting-1/)
- [CSS :has() Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [CSS Cascade Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

Remember: Modern CSS features represent the future of web styling. While browser support may be limited initially, understanding and implementing these features prepares you for the next generation of web development!