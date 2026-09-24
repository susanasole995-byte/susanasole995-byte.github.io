// ===== MENÚ EN MÓVIL =====
const botonMenu = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');

// Abre o cierra el menú al pulsar el botón ☰
botonMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
});

// Cierra el menú al pulsar cualquier enlace
menu.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('abierto');
    botonMenu.setAttribute('aria-expanded', false);
  });
});

// ===== AÑO ACTUAL EN EL PIE =====
document.getElementById('anio').textContent = new Date().getFullYear();
