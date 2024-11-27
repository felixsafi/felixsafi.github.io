const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const placeholder = document.getElementById('header-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;

                const menuToggle = document.getElementById('menu-toggle');
                const mobileMenu = document.getElementById('mobile-menu');
                if (menuToggle && mobileMenu) {
                    menuToggle.addEventListener('click', () => {
                        mobileMenu.classList.toggle('hidden');
                    });
                }
            }
        })
        .catch(error => console.error('Error loading header:', error));
});

fetch('footer.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('footer-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));
