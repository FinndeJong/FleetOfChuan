import React, { useState } from "react";
import { MdOutlineTranslate } from "react-icons/md";
import "./Header.css";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  function closeOpenMenus(e) {
    if (Object.values(e.target.classList).includes("dropdownItem")) {
      return;
    } else if (Object.values(e.target.classList).includes("translate")) {
      setDropdown(true);
      return;
    } else {
      setDropdown(false);
    }
  }

  window.addEventListener("mousedown", closeOpenMenus);

  return (
    <div className="headerContainer">
      <div className="headerLogo">
        Fleet of <span className="chuanColor">Chuán</span>
      </div>
      <nav className="headerNav">
        <a className="yellowHover" href="/">
          Activity
        </a>
        <a className="yellowHover" href="/">
          Ships
        </a>
        <a className="yellowHover" href="/">
          Location
        </a>
        <MdOutlineTranslate className="translate yellowHover" />
      </nav>
      {dropdown && (
        <div className="translateDropdown">
          <div className="dropdownItem yellowHover">Nederlands</div>
          <div className="dropdownItem yellowHover">English</div>
        </div>
      )}
    </div>
  );
}
