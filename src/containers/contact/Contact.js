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
  const { title, subtitle, number, email_address } = contactInfo;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{title}</h1>
            <p className={`${isDark ? "dark-mode" : "subTitle"} contact-subtitle`}>
              {subtitle}
              <br />
              {/* Move address JSX here instead of storing it in config */}
              📍 Turin, Italy{" "}
              <img
                src="https://flagcdn.com/w40/it.png"
                alt="Italy flag"
                style={{
                  width: "25px",
                  verticalAlign: "middle",
                  marginLeft: "4px",
                }}
              />
            </p>

            <div className={`${isDark ? "dark-mode" : ""} contact-text-div`}>
              {number && (
                <>
                  <a className="contact-detail" href={`tel:${number}`}>
                    {number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              {email_address && (
                <>
                  <a className="contact-detail-email" href={`mailto:${email_address}`}>
                    {email_address}
                  </a>
                  <br />
                  <br />
                </>
              )}
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
      </div>
    </Fade>
  );
}