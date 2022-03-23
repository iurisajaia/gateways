import { Link } from "react-router-dom";

import { PROJECTS } from "../../constants/routes";

import { getInitialLetters } from "../../utils/helpers";

import LogoIcon from "../../assets/icons/logo.svg";
import MenuIcon from "../../assets/icons/menu.svg";

import "./Header.css";

const Header = ({ user }) => {
  return (
    <header className="flex-between">
      <div className="flex-between">
        <Link to={PROJECTS}>
          <img src={LogoIcon} alt="Gateway" title="Gateway" />
        </Link>
        <img src={MenuIcon} alt="BurgerMenu" title="BurgerMenu" id="menuIcon" />
      </div>
      <div className="flex-between">
        <div className="user-initials flex-center">
          <h3>{getInitialLetters(user?.firstName, user?.lastName)}</h3>
        </div>
        <h3 className="user-name">
          {user?.firstName} {user?.lastName}
        </h3>
      </div>
    </header>
  );
};

export default Header;
