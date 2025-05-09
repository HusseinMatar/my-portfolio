import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="contact-wrapper">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">Contact</h1>
            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>
            <div className={isDark ? "dark-mode contact-text-div" : "contact-text-div"}>
              <p className="contact-detail">📞 {contactInfo.number}</p>
              <p className="contact-detail-email">📧 {contactInfo.email_address}</p>
              <br />
              <SocialMedia />
            </div>
          </div>

          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>
        </div>
        <div  id="contact" style={{ height: "120px" }}></div> {/* This spacer pushes view down */}
      </section>
    </Fade>
  );
}
