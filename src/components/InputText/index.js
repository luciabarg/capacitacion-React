import React from "react"; // tiene que estar siempre!
import PropTypes from "prop-types";

class InputText extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.label}</p>
        <input
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.onTextChange}
        />
      </div>
    );
  }

  onTextChange = event => {
    console.log("onTextChange", event.target.value);
    const value = event.target.value;

    if (this.props.onInputChange) {
      this.props.onInputChange(value);
    }
  };
}

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func
};

export default InputText;
