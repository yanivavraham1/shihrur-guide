import React from "react";
import PropTypes from "prop-types";

function NumInput(props) {
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10); // Parse the input value to an integer
    props.onChange(value); // Call the onChange function passed from the parent component
  };

  return (
    <div className="lg:bg-neutral-100 p-4 flex flex-col justify-center items-center lg:border-4 text-center">
      <h1>מספר חודשי שירות כ{props.serviceType}</h1>

      <input
        maxLength={2}
        onChange={handleChange} // Call handleChange when the input value changes
        defaultValue={0}
        type="number"
        name=""
        id=""
        className="w-10 h-10 text-center border-2 mt-3"
      />
    </div>
  );
}

NumInput.propTypes = {
  serviceType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // Define onChange as a required function prop
};

export default NumInput;
