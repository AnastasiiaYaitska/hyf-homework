import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <header>
      <h1>{title}</h1>
      <p>
        You have used {seconds} seconds on this <br /> website{" "}
      </p>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
