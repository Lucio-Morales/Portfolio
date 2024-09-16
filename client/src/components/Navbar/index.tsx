import React from 'react';
import styled from 'styled-components';

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Nav = styled.nav`
  position: fixed;
  bottom: 20px; /* Ubicación en la parte baja de la pantalla */
  left: 50%;
  transform: translateX(-50%); /* Centrado horizontal */
  background-color: #333;
  padding: 12px 24px;
  border-radius: 40px; /* Bordes redondeados */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;

  @media (max-width: 768px) {
    width: auto; /* Ajustar el ancho según el contenido */
    max-width: 90%; /* Limitar el ancho máximo */
    margin: 0 auto; /* Centrar horizontalmente */
    padding: 10px 20px;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 16px; /* Espacio entre los botones */
  list-style: none;
  margin: 0;
  padding: 0;

  /* Estilos responsivos */
  @media (max-width: 768px) {
    gap: 12px; /* Disminuir espacio entre botones en móviles */
  }
`;

const NavItem = styled.li``;

const NavButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555; /* Color de fondo al pasar el mouse */
  }

  &:focus {
    outline: none; /* Quitar el borde predeterminado al hacer clic */
  }

  /* Estilos responsivos */
  @media (max-width: 768px) {
    font-size: 14px; /* Reducir tamaño de texto en móviles */
    padding: 6px 12px; /* Reducir padding para botones en móviles */
  }
`;

const Navbar: React.FC = () => {
  // Función para manejar el scroll hacia una sección específica
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavList>
        {sections.map((section) => (
          <NavItem key={section.id}>
            <NavButton onClick={() => handleScroll(section.id)}>
              {section.name}
            </NavButton>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Navbar;
