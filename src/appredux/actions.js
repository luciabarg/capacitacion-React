import axios from "axios";

const url = "http://localhost:9000/notes";

function init(notes) {
  return {
    type: "INIT_NOTES",
    notes
  };
}

export function addNote(id, title, note) {
  return {
    type: "ADD_NOTE",
    id,
    title,
    note
  };
}

export function deleteNote(id) {
  return {
    type: "DELETE_NOTE",
    id
  };
}

export function changeInputSearch(value) {
  return {
    type: "CHANGE_SEARCH_VALUE",
    value
  };
}

export function postNote(title, note) {
  const data = {
    title,
    note
  };

  return dispath => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(response => {
        console.log(">>response2", response.note);
        dispath(addNote(response.title, response.note));
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };
}

export function fetchNotes() {
  console.log(">> se esta por hacer el fetch");

  return dispatch => {
    dispatch(isLoading());

    axios
      .get(url)
      .then(res => {
        console.log(">> respuesta del servicio");
        dispatch(init(res.data));
        dispatch(isLoading());
      })
      .catch(err => {
        console.log(">>ERROR", err);
        dispatch(isLoading());
      });
  };
}

export function postNoteAxios(title, note) {
  return dispatch => {
    dispatch(isLoading());
    axios
      .post(url, { title, note })
      .then(res => {
        console.log(">>res", res);
        dispatch(addNote(res.data.id, res.data.title, res.data.note));
        dispatch(isLoading());
      })
      .catch(error => {
        console.log(">>ERROR", error);
        dispatch(isLoading());
      });
  };
}

export function deleteNoteAxios(id) {
  return dispatch => {
    dispatch(isLoading());
    axios
      .delete(`${url}/${id}`)
      .then(res => {
        dispatch(deleteNote(id));
        dispatch(isLoading());
      })
      .catch(error => {
        console.log(">>Error", error);
        dispatch(isLoading());
      });
  };
}

export function isLoading() {
  return {
    type: "LOADING_NOTE"
  };
}
