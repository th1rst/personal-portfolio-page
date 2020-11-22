import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import Cookies from "js-cookie";
import CookieConsent from "react-cookie-consent";

export default function Contact() {
  const { theme } = React.useContext(ThemeContext);
  const [hasGivenConsent, setHasGivenConsent] = useState(false);
  const [showConsentAgain, setShowConsentAgain] = useState(false);
  const cookie = Cookies.get("consentcookie");

  const checkForConsent = () => (cookie ? setHasGivenConsent(true) : null);

  useEffect(() => {
    checkForConsent();
  });

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } w-screen h-screen`}
    >
      {hasGivenConsent ? (
        <ContactForm />
      ) : (
        <div className="text-white text-xl self-center px-8 md:px-40">
          <p className="pt-12">
            <Text tid="contactFormCookieText1" />
          </p>
          <p className="pt-12">
            <Text tid="contactFormCookieText2" />{" "}
            <a
              className="cursor-pointer underline text-blue-400"
              href="mailto:code@kochannek.com"
            >
              code@kochannek.com
            </a>
          </p>
          <p className="pt-12 text-center">
            <Text tid="contactFormCookieText3" />{" "}
            <span
              className="cursor-pointer underline text-blue-400"
              onClick={() => setShowConsentAgain(true)}
            >
              <Text tid="contactFormCookieText4" />
            </span>
          </p>
        </div>
      )}
      {showConsentAgain ? (
        <CookieConsent
          location="bottom"
          buttonText={<Text tid="cookieAccept" />}
          cookieName="consentcookie"
          onAccept={() => setHasGivenConsent(true)}
          style={{ background: "#070707", borderTop: "2px solid gray" }}
          buttonStyle={{ fontSize: "16px" }}
          expires={150}
        >
          <Text tid="cookieText1" />{" "}
          <Link className="ml-2 text-sm underline" to="/ImprintPrivacyPolicy">
            <Text tid="cookieText2" />
          </Link>
        </CookieConsent>
      ) : null}
    </div>
  );
}
