// Interacciones básicas de la landing.

// 1) Menú responsive: muestra/oculta la navegación en móvil.
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const abierto = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(abierto));
  });
}

// 2) Año dinámico en el footer.
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
