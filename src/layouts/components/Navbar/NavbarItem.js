import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

function NavbarItem({ to, children }) {
    return (
        <li className={cx("navbar-item")}>
            <NavLink
                className={(nav) => cx("navbar-link", { active: nav.isActive })}
                to={to}
            >
                {children}
            </NavLink>
        </li>
    );
}

NavbarItem.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default NavbarItem;
