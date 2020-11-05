import React from "react";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";

export default function Contact() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } w-screen h-screen`}
    >
      <ContactForm />
    </div>
  );
}
