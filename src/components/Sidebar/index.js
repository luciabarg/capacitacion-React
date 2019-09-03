import React, { Fragment } from "react"; // tiene que estar siempre!
import PropTypes from "prop-types";
import NavLink from "../NavLink/";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
// import { red } from "@material-ui/core/colors";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  //Drawer styles
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: props =>
      props.open ? drawerWidth + theme.spacing(3) : theme.spacing(3),
    transition: "0.2s"
  }
}));

const Sidebar = props => {
  const classes = useStyles(props); //de material UI

  return (
    <Fragment>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper
        }}
        open={props.open}
      >
        <div className={classes.toolbar} />
        <List>
          {props.routes.map((route, index) =>
            renderNavLink(route, index, props)
          )}
        </List>
      </Drawer>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <div>{props.children}</div>
      </div>
    </Fragment>
  );
};

const renderNavLink = (route, index, props) => {
  return (
    <NavLink
      key={index}
      icon={route.icon}
      label={route.label}
      onClick={() => props.history.push(route.path)}
    />
  );
};

Sidebar.defaultProps = {
  routes: []
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.node,
      path: PropTypes.string
    })
  ),
  open: PropTypes.bool
};

export default Sidebar;
