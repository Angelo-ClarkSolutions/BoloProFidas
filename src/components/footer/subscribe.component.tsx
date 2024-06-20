import React from "react";
import "./subscribe.component.css";

const Subscribe: React.FC = () => {
  return (
    <div className="subscribeDiv">
      <h1>Receba novidades por e-mail</h1>
      <form className="subscribeForm">
        <input
          type="text"
          className="subscriptionInput"
          id="subscriptionInput-name"
          placeholder="Nome"
        />
        <input
          type="text"
          className="subscriptionInput"
          id="subscriptionInput-email"
          placeholder="E-mail"
        />
        <div className="subscriptionButton">Receber Novidades</div>
      </form>
    </div>
  );
};

export default Subscribe;
