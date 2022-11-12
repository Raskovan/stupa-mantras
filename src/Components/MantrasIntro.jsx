import React from "react";
import "../styles/MantrasIntro.css";

const MantrasIntro = () => {
  // const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const currentYear = () => {
    const today = new Date();
    return today.getFullYear();
  };
  return (
    <div className="intro-container">
      <p className="intro_title">Stupa of Complete Victory at NRC</p>
      {/* <img
        src={require(`../assets/${
          darkMode ? 'mp_logo_white.png' : 'mp_logo_black.png'
        }`)}
        alt="Manhattan Project Logo"
        className="intro_image"
      /> */}
      <p className="intro_text">
        Whether you do a formal Guru Yoga session or are doing mantras while
        walking in the park...if you are dedicating them to{" "}
        <a href="https://www.diamondway.org/nrc/" target="_new">
          the Stupa of Complete Victory at NRC
        </a>
        , make that wish and simply count them and make a record of it. Then
        input the number of mantras in the form below. We wish to keep this
        project ongoing throughout {currentYear()} and see how soon we can
        accomplish <b>11,111,111 Karmapa Chennos</b>. Primarily we wish to build
        up Karmapa&apos;s powerfield and establish the finest conditions for the
        realization of the first Diamond Way Buddhism stupa in North America.
      </p>
    </div>
  );
};

export default MantrasIntro;
