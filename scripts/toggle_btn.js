// toggle-buttons.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('button.toggle');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', function () {
        const img = this.querySelector('img');
        if (!img || !img.src) return;
  
        const src = img.src;
  
        if (src.includes('_off.svg')) {
          img.src = src.replace('_off.svg', '_on.svg');
        } else if (src.includes('_on.svg')) {
          img.src = src.replace('_on.svg', '_off.svg');
        }
      });
    });
  });