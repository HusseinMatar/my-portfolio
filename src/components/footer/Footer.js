import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "footer-text footer-text-dark" : "footer-text"}>
          {emoji("Made with ❤️ by Hussein")}
        </p>
      </div>
    </Fade>
  );
}
