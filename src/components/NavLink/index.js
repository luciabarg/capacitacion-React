import React from "react"; // tiene que estar siempre!
import PropTypes from "prop-types";
import "./styles.scss";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import classNames from "classnames";

//BEM : BlockElementModifier

const NavLink = props => {
  const classes = classNames({
    "nav-link": true,
    "nav-link__active": props.active
  });

  return (
    <ListItem button onClick={props.onClick}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.label} />
    </ListItem>
  );
};

NavLink.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavLink;
