import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  // Evalúa que el componente despliegue el texto de derechos de autor
  it('debe desplegar el texto de derechos de autor', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2026 Viajes Odisea IA. Todos los derechos reservados./i);
    expect(copyrightText).toBeInTheDocument();
  });

  // Evalúa que el componente despliegue todos los enlaces del menú
  it('debe desplegar todos los enlaces del menú del footer', () => {
    render(<Footer />);
    const aboutLink = screen.getByRole('link', { name: /sobre nosotros/i });
    const servicesLink = screen.getByRole('link', { name: /servicios/i });
    const contactLink = screen.getByRole('link', { name: /contacto/i });
    const privacyLink = screen.getByRole('link', { name: /privacidad/i });
    const termsLink = screen.getByRole('link', { name: /términos de uso/i });

    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
  });

  // Evalúa que los enlaces tengan los atributos href correctos
  it('debe tener los atributos href correctos en los enlaces', () => {
    render(<Footer />);
    const aboutLink = screen.getByRole('link', { name: /sobre nosotros/i });
    const contactLink = screen.getByRole('link', { name: /contacto/i });

    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  // Evalúa que el footer tenga la estructura correcta
  it('debe renderizar dentro de una etiqueta footer semántica', () => {
    const { container } = render(<Footer />);
    const footerElement = container.querySelector('footer');
    expect(footerElement).toBeInTheDocument();
  });

  // Evalúa que el footer tenga un menú con atributo aria-label
  it('debe tener un menú accesible con aria-label', () => {
    render(<Footer />);
    const navElement = screen.getByRole('navigation', { name: /menú del footer/i });
    expect(navElement).toBeInTheDocument();
  });
});