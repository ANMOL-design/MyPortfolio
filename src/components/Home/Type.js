import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Passionate Programmer",
          "MERN Stack Developer",
          "Python Enthusiast",
          "React Native Developer",
          "Grand Finalist of SIH 2k22"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
