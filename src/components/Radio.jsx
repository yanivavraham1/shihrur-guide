import React from "react";
import PropTypes from "prop-types";
function Radio(props) {
  return (
    <label>
      <input type="radio" name={props.name} className="" />
      <div className="bg-slate-500 p-5 w-fit">{props.content}</div>
    </label>
  );
}
Radio.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Radio;
