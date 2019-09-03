import React from "react";
import PropTypes from "prop-types";

const HolaMundo = props => {
  return (
    <div>
      {props.showSaludo ? <h1> {props.saludo}</h1> : null}
      <p> Mi primer componente en React</p>
    </div>
  );
};

HolaMundo.propTypes = {
  saludo: PropTypes.string,
  showSaludo: PropTypes.bool
};

export default HolaMundo;
