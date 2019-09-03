import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/SearchOutlined";

function InputSearch(props) {
  return (
    <div
      style={{
        flex: 1,
        padding: "0px 100px 0px 50px "
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#f1f3f4",
          borderRadius: 5
        }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          fullWidth={true}
          placeholder="Buscar.."
          value={props.value}
          onChange={props.changeValue}
        />
      </div>
    </div>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string,
  changeValue: PropTypes.func
};

export default InputSearch;
