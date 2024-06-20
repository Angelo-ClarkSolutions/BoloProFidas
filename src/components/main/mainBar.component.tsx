import React from "react";
import "./mainBar.component.css";

const MainBar: React.FC = () => {
  return (
    <div className="mainBarDiv">
      <ul className="mainBar">
        <li className="mainBarItem">Home</li>
        <li className="mainBarItem">Quem Somos</li>
        <li className="mainBarItem">Produtos</li>
        <li className="mainBarItem">Contato</li>
      </ul>
    </div>
  );
};

export default MainBar;
