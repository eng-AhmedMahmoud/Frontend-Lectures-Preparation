// Non-critical JavaScript that can be loaded after page render
document.addEventListener('DOMContentLoaded', function () {
  console.log('Non-critical JavaScript loaded');

  // Add interaction to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function () {
      console.log('Card clicked:', this.querySelector('h2').textContent);
    });
  });

  // Add footer element
  const container = document.querySelector('.container');
  if (container) {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <p>© ${new Date().getFullYear()} Performance Optimization Demo</p>
      <a href="#" class="btn">Learn More</a>
    `;
    document.body.appendChild(footer);
  }
});