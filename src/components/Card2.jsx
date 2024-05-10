import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import PropTypes from "prop-types";

function Card2(props) {
  return (
    <div className="  sm:max-w-[230px] md:max-w-[300px] rounded-lg bg-white shadow-sm border-2 h-fit">
      <img src={props.contentImgURL} alt="" className="" />
      <div className="p-4">
        <a href="#" className="no-underline">
          <span className="text-[1.125rem] leading-7 font-semibold text-[#111827]">
            {props.contentTitle}
          </span>
        </a>
        <p className="mt-2 text-[0.875rem] leading-5 text-[#6B7280]">
          {props.contentText}
        </p>
        {props.link && (
          <a
            className="inline-flex items-center gap-1 mt-4 text-white bg-[#2563EB] px-2 py-1 rounded-md text-[0.875rem] leading-5 font-medium transition-transform duration-300"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            לפרטים נוספים{" "}
            <span aria-hidden="true">
              <IoIosArrowRoundBack />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

Card2.propTypes = {
  contentTitle: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
  contentImgURL: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Card2;
