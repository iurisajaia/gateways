import { useRef } from "react";

import { useDetectOutsideClick } from "../../utils/useDetectOutsideClick";

import "./Dropdown.css";

const Dropdown = ({ title, options, activeItem, setActiveItem }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const handleChangeActiveItem = (item) => {
    setActiveItem(item);
    setIsActive(false);
  };

  return (
    <div className="dd-wrapper">
      <div
        className={`dd-header ${isActive && "without-bottom-radius"}`}
        onClick={() => setIsActive(!isActive)}
      >
        <h3>{activeItem || title}</h3>
        {isActive ? (
          <div className="dd-arrow arrow-up"></div>
        ) : (
          <div className="dd-arrow arrow-down"></div>
        )}
      </div>
      <div
        className={`dd-body ${isActive ? "active" : "inactive"}`}
        ref={dropdownRef}
      >
        <div
          className="dd-option"
          onClick={() => handleChangeActiveItem(title)}
        >
          {title}
        </div>
        {options.map((option, i) => (
          <div
            className="dd-option"
            key={i}
            onClick={() => handleChangeActiveItem(option?.name)}
          >
            {option?.name}
          </div>
        ))}
      </div>
    </div>

    // <div className="menu-container">
    //   <button onClick={() => setIsActive(!isActive)} className="menu-trigger">
    //     <span>User</span>
    //     <img
    //       src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
    //       alt="User avatar"
    //     />
    //   </button>
    //   <nav
    //     ref={dropdownRef}
    //     className={`menu ${isActive ? "active" : "inactive"}`}
    //   >
    //     <ul>
    //       <li>
    //         <a href="/messages">Messages</a>
    //       </li>
    //       <li>
    //         <a href="/trips">Trips</a>
    //       </li>
    //       <li>
    //         <a href="/saved">Saved</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default Dropdown;
