import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: 500
  }
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle2" gutterBottom>
        {" "}
        {props.title}{" "}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {" "}
        {props.note}{" "}
      </Typography>

      <IconButton onClick={props.delete} color="inherit">
        <Delete />
      </IconButton>
    </Paper>
  );
}

ComplexGrid.propTypes = {
  title: PropTypes.string,
  note: PropTypes.string
};

ComplexGrid.defaultProps = {
  delete: () => {}
};
