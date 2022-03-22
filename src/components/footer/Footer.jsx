import {Link} from "react-router-dom";

import "./Footer.css";

const Footer = () => {
    return (
        <ul className="footer-links">
            <li>
                <Link to="/">
                    Terms&Conditions |
                </Link>
            </li>
            <li>
                <Link to="/">
                    Privacy Policy
                </Link>
            </li>
        </ul>
    );
};

export default Footer;
