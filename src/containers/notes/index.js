import React, { Fragment, useEffect } from "react";
import InputNote from "../../components/InputNote";
import ImgGridList from "../../components/ImgGridList";
import CircularProgress from "@material-ui/core/CircularProgress";
import GridDraggable, { Section } from "grid-draggable";
import { makeStyles } from "@material-ui/core/styles";
import {
  addNote,
  deleteNote,
  postNote,
  postNoteAxios,
  fetchNotes,
  deleteNoteAxios
} from "../../appredux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getNotes,
  getSearchValue,
  getFilteredNotes,
  isLoading
} from "../../appredux/selectors";

const useStyles = makeStyles(theme => ({
  //App styles
  noteContainer: {
    margin: 7
  },
  circularProgress: {
    textAlign: "center",
    margin: "15px"
  }
}));

const NotesContainer = props => {
  const classes = useStyles(); //de material UI
  useEffect(() => {
    props.fetchNotes();
  }, []);
  /*
  Solo con Clases

  componentDidMount >> luego del 1° render.
  componentWillUpdate(nextProps, nextState) >> cada vez que cambia el state o las props. Antes del nuevo render
  componentWillReceiveProps >> cada vez que cambian las props. Antes del render
  componentDidUpdate >> cada vez que cambia el state o las props. DESPUES del render
  componentWillUnmount >> cuando react esta por sacar el component
  */
  //
  // componentWillUpdate(nextProps, nextState) {
  //   nextProps.name === this.props.name {
  //
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   prevProps.name === this.props.name {
  //
  //   }
  // }

  console.log(">>render", props.notes);

  return (
    <Fragment>
      <InputNote
        onAcceptButtonClick={value =>
          props.postNoteAxios(value.title, value.note)
        }
      />
      {props.isLoading ? (
        <div className={classes.circularProgress}>
          <CircularProgress />
        </div>
      ) : null}
      <div className={classes.noteContainer}>
        <GridDraggable lg={4} md={3} xs={6}>
          {props.notes.map((note, index) => (
            <Section key={index}>
              <ImgGridList
                key={index}
                title={note.title}
                note={note.note}
                delete={() => props.deleteNoteAxios(note.id)}
              />
            </Section>
          ))}
        </GridDraggable>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    notes: getFilteredNotes(state),
    isLoading: isLoading(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNote,
      deleteNote,
      postNote,
      postNoteAxios,
      fetchNotes,
      deleteNoteAxios
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesContainer);
