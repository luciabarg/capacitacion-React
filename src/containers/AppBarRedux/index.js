import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputSearch from "../../components/InputSearch";
import ViewAgendaIcon from "@material-ui/icons/ViewAgendaOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Settings from "@material-ui/icons/Settings";
import logoImg from "../../assets/logo.png";
import Refresh from "@material-ui/icons/RefreshOutlined";
import Button from "@material-ui/core/Button";
import { changeInputSearch } from "../../appredux/actions";
import { getSearchValue } from "../../appredux/selectors";

const useStyles = makeStyles(theme => ({
  //App styles
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    //flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: theme.mixins.toolbar
}));

const CustomAppBar = props => {
  const classes = useStyles(); //de material UI

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={props.onMenuClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={logoImg} alt="logo" style={{ width: 40 }} />
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <InputSearch
            value={props.searchValue}
            changeValue={evt => props.changeInputSearch(evt.target.value)}
          />
          <IconButton color="inherit">
            <Refresh />
          </IconButton>
          <IconButton color="inherit">
            <ViewAgendaIcon />
          </IconButton>
          <IconButton color="inherit">
            <Settings />
          </IconButton>
          <Button color="inherit"> Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

CustomAppBar.propTypes = {
  title: PropTypes.string,
  onMenuClick: PropTypes.func
};

CustomAppBar.defaultProps = {
  onMenuClick: () => {}
};

const mapStateToProps = state => {
  return {
    searchValue: getSearchValue(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeInputSearch
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomAppBar);
