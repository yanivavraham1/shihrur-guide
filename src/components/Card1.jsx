import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import PropTypes from "prop-types";

function Card1(props) {
  const [shown, setShown] = useState(false);
  const showContent = () => {
    if (shown == true) {
      setShown(false);
    } else {
      setShown(true);
    }
  };
  return (
    <div className="bg-gray-50 p-5 w-full border-b-2">
      <div className="flex items-center cursor-pointer" onClick={showContent}>
        <h1 className="font-bold ml-2">{props.contentTitle}</h1>
        <IoIosArrowBack />
      </div>
      <div className=" ">{shown && <p>{props.contentText}</p>}</div>
    </div>
  );
}

Card1.propTypes = {
  contentTitle: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
};
export default Card1;
