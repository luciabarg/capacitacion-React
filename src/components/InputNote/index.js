import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { notStrictEqual } from "assert";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1)
  }
}));

function InputNote(props) {
  const classes = useStyles();
  const [isOpen, changeIsOpen] = useState(false);
  const [titleValue, changeTitleValue] = useState("");
  const [noteValue, changeNoteValue] = useState("");
  const [loading, changeLoading] = useState(false);

  const onCancel = () => {
    changeTitleValue("");
    changeNoteValue("");
    changeIsOpen(false);
  };
  const onAccept = () => {
    if (props.onAcceptButtonClick) {
      props.onAcceptButtonClick({
        title: titleValue,
        note: noteValue
      });
    }
    changeTitleValue("");
    changeNoteValue("");
    changeIsOpen(false);
  };

  const saveValueOnDatabase = (value, onComplete, onError) => {
    changeLoading(true);
    changeNoteValue(value);

    if (onError) {
      onError();
    }

    setTimeout(() => {
      changeLoading(false);

      if (onComplete) {
        onComplete();
      }
    }, 2500);
  };

  const getOnChangeInputValue = (inputName, callback) => {
    return evt => {
      const newValue = evt.target.value;
      const oldValue = inputName === "title" ? titleValue : noteValue;

      if (callback) {
        callback(oldValue, newValue);
      }

      if (inputName === "title") {
        changeTitleValue(newValue);
      }
      if (inputName === "note") {
        changeNoteValue(newValue);
      }
    };

    // if (inputName === 'title') {
    //     return (evt) => {
    //         changeTitleValue(evt.target.value)
    //     }

    // }

    // if (inputName === 'note') {
    //     return (evt) => changeNoteValue(evt.target.value)
    // }
  };

  const onValueChanged = (oldValue, newValue) => {
    console.log(`El valor ${oldValue} fue cambiado por ${newValue}`);
  };

  const onValueChanged2 = oldValue => {
    console.log(`Old value: ${oldValue}`);
  };

  const onSaveValueOnDatabaseComplete = () => {
    console.log("Valor guardado");
  };

  return (
    <Paper
      elevation={5}
      className={classes.paper}
      onFocus={() => changeIsOpen(true)}
    >
      {isOpen ? (
        <InputBase
          fullWidth={true}
          placeholder="Título"
          value={titleValue}
          onChange={getOnChangeInputValue("title", onValueChanged)}
        />
      ) : null}
      <InputBase
        fullWidth={true}
        placeholder="Crear nota.."
        value={noteValue}
        onChange={getOnChangeInputValue("note", onValueChanged)}
      />
      {isOpen ? (
        <div>
          <Button onClick={onCancel}>Cerrar</Button>
          <Button onClick={onAccept}>Aceptar</Button>
        </div>
      ) : null}
    </Paper>
  );
}

InputNote.propTypes = {
  onAcceptButtonClick: PropTypes.func
};

export default InputNote;
