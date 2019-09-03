import dotProp from "dot-prop-immutable";

const initialState = {
  notes: [],
  searchValue: "",
  isLoading: false
};

export default (state = initialState, action) => {
  const { type } = action;

  if (type === "INIT_NOTES") {
    state = dotProp.set(state, "notes", action.notes);
  }

  if (type === "ADD_NOTE") {
    state = dotProp.set(state, "notes", [
      { id: action.id, title: action.title, note: action.note },
      ...state.notes
    ]);
  }
  if (type === "DELETE_NOTE") {
    state = dotProp.set(
      state,
      "notes",
      state.notes.filter(note => note.id !== action.id)
    );
  }

  if (type === "CHANGE_SEARCH_VALUE") {
    state = dotProp.set(state, "searchValue", action.value);
  }

  if (type === "LOADING_NOTE") {
    state = dotProp.set(state, "isLoading", !state.isLoading);
  }

  return state;
};
