import {Link} from "react-router-dom";

import {MenuItems} from "../../utils/menu";

import "./Sidebar.css";


const Sidebar = () => {
    return (
        <aside>
            {MenuItems.map((item , i) => (
                <div className="menu-item" key={i}>
                    <Link to={item.route}>
                        <img src={item.icon} alt={item.route}/>
                    </Link>
                </div>
            ))}
        </aside>
    );
}

export default Sidebar;