import React from "react";
import "./supbar.component.css";

const SupBar: React.FC = () => {
  return (
    <div className="supBar">
      <div className="language">Português BR</div>
      <ul className="supBarList">
        <li className="supBarItem">Notícias</li>
        <li className="supBarItem">Publicações</li>
        <li className="supBarItem">Trabalhe Conosco</li>
      </ul>
    </div>
  );
};

export default SupBar;
