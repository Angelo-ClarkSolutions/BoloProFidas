import React from "react";
import "./footer.component.css";
import Subscribe from "./subscribe.component";
import TopicList from "./topicList.component";
import FooterBottom from "./footerBottom.component";
import bg from "../../bg-footer.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="spacing"></div>
      <Subscribe />
      <div className="spacing"></div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <TopicList />
        <div className="spacing"></div>
        <FooterBottom />
        <div className="spacing">
          <p id="copyright">
            © 2024 Cake Solutions. All rights reserved. Criação de sites:
            Angelindo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
