import classNames from "classnames/bind";
import config from "~/config";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx("navbar")}>
            <ul className={cx("navbar-list")}>
                <NavbarItem to={config.routes.home}>Home</NavbarItem>
                <NavbarItem to={config.routes.about}>About</NavbarItem>
                <NavbarItem to={config.routes.location}>Location</NavbarItem>
                <NavbarItem to={config.routes.blog}>Blog</NavbarItem>
                <NavbarItem to={config.routes.contact}>Contact</NavbarItem>
            </ul>
        </nav>
    );
}

export default Navbar;
