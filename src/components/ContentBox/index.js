import React from "react"; // tiene que estar siempre!
import PropTypes from "prop-types";
import "./styles.scss";
import classNames from "classnames";

const ContentBox = props => {
  const classes = classNames({
    "box-div": true
  });

  return (
    <div className={classes}>
      {props.contentboxTitle} {props.contentboxText}
    </div>
  );
};

ContentBox.propTypes = {
  contentboxTitle: PropTypes.string,
  contentboxText: PropTypes.string
};

export default ContentBox;
