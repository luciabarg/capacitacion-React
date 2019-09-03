import { createSelector } from "reselect";
import uniq from "lodash/uniq";

export const getNotes = state => state.notes;
export const getSearchValue = state => state.searchValue;
export const isLoading = state => state.isLoading;

export const getFilteredNotes = createSelector(
  getNotes,
  getSearchValue,
  (notes, searchValue) => {
    if (searchValue === "") {
      return notes;
    }

    const filterByTitle = notes.filter(note =>
      _filterByRegex(note, "title", searchValue)
    );
    const filterByNote = notes.filter(note =>
      _filterByRegex(note, "note", searchValue)
    );

    return uniq([...filterByTitle, ...filterByNote]);
  }
);

function _filterByRegex(data, searchKey, filter) {
  const regex = new RegExp(filter, "i");

  return regex.test(data[searchKey]);
}
