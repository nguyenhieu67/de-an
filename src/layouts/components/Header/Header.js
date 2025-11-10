import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
import config from "~/config";
import Search from "../Search";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("header")}>
            <Link to={config.routes.home} className={cx("wrapper")}>
                <Image
                    className={cx("logo")}
                    src="https://nguyenhieu67.github.io/Graduation-project/assets/images/logo.png"
                    alt="logo"
                />
                <span className={cx("logo-title")}>ノスタルジア</span>
            </Link>

            <Search />
        </header>
    );
}

export default Header;
