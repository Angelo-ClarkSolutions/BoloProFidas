import React, { useState } from "react";
import "./hovermenu.component.css"; // Import your CSS file for styling

const HoverMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="hover-menu">
      <ul className="mainBar">
        <li className="mainBarItem">Home</li>
        <li className="mainBarItem">Quem Somos</li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mainBarItem"
        >
          Produtos
          {isHovered && (
            <ul className="topic-list">
              <li className="subtopic">Bolo</li>
              <li className="subtopic">Canolli</li>
              <li className="subtopic">Sonho</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mainBarItem"
        >
          Contatos
          {isHovered && (
            <ul className="topic-list">
              <li className="subtopic">E-mail</li>
              <li className="subtopic">Telefone</li>
              <li className="subtopic">WhatsApp</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default HoverMenu;
