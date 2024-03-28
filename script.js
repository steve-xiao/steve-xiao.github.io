document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const content = document.querySelector('#content');
  
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            loadPageContent(event.target.dataset.page);
            setActiveLink(event);
        });
    });
  
    function setActiveLink(event) {
        navLinks.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        event.target.classList.add('active');
    }
  
    async function loadPageContent(page) {
        content.style.opacity = '0';
        const response = await fetch(`${page}.html`);
        const html = await response.text();
        setTimeout(() => {
            content.innerHTML = html;
            content.style.opacity = '1';
        }, 500);
    }
  
    loadPageContent('resume');
  });