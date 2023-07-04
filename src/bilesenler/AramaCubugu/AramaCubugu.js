// MUÜ için bu dosyayı değiştirmenize gerek yok
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./AramaCubugu.css";


const AramaCubugu = (props) => {
  const { searchGitsin } = props;
  const [term, setTerm] = useState('');

  const changeHandler = (e) => {
    const value = e.target.value;
    setTerm(value);
    searchGitsin(value);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          value={term}
          onChange={changeHandler}
          placeholder="Arama"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};


export default AramaCubugu;
