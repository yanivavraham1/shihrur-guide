import React from "react";
import logo from "../assets/Designer.png";

function Navbar() {
  return (
    <div className="bg-[#173505] md:flex">
      <img
        src={logo}
        alt=""
        className="logo m-auto md:m-0 md:mr-3 md:ml-auto"
        width="150px"
      />
      <ul className="flex justify-around text-gray-100 text-sm md:justify-normal md:items-center py-2">
        <li className="item px-3 hover:text-[#ffffff] focus:text-[#ffffff] md:mx-5 md:py-2">
          <a href="#moneyView">פקדון & מענק</a>
        </li>
        <li className="item px-3hover:text-[#ffffff] focus:text-[#ffffff]  md:mx-5 md:py-2">
          <a href="#benefitsPage">זכויות</a>
        </li>
        <li className="item px-3 hover:text-[#ffffff] focus:text-[#ffffff]  md:mx-5 md:py-2">
          <a href="#newbiePage">המשוחרר הטרי</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
