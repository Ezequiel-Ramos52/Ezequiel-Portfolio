function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    mobileNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileNav').classList.remove('active');
        document.querySelector('.menu-toggle').classList.remove('active');
    });
});

document.querySelectorAll('.work-item').forEach(item => {
    const header = item.querySelector('h3');
    const details = item.querySelector('.work-details');
  
    header.addEventListener('click', () => {
      details.classList.toggle('hidden');
    });
  });
