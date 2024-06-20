import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia: React.FC = () => {
  return (
    <div className="socialMediaContainer">
      <div className="socialMediaLogo">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div className="socialMediaLogo">
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <div className="socialMediaLogo">
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
};

export default SocialMedia;
