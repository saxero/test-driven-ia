import React from 'react';
import './Footer.css';

function Footer() {
  // Array de elementos del menú para facilitar mantenimiento y escalabilidad
  const menuItems = [
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contact' },
    { label: 'Privacidad', href: '#privacy' },
    { label: 'Términos de Uso', href: '#terms' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navegación del footer con etiqueta semántica nav y aria-label para accesibilidad */}
        <nav className="footer-menu" aria-label="Menú del footer">
          <ul>
            {/* Mapeo dinámico de items del menú para renderizar cada enlace */}
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sección de contenido con texto de derechos de autor */}
        <div className="footer-content">
          <p>© 2026 Viajes Odisea IA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;