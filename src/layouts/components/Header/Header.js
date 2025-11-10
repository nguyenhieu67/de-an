import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
import config from "~/config";
import Search from "../Search";
import Navbar from "../Navbar";

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx("wrapper")}>
            <header className={cx("header", "container")}>
                <Link to={config.routes.home} className={cx("logo")}>
                    <Image
                        className={cx("logo-img")}
                        src="https://nguyenhieu67.github.io/Graduation-project/assets/images/logo.png"
                        alt="logo"
                    />
                    <span className={cx("logo-title")}>ノスタルジア</span>
                </Link>

                <Search />
                <Navbar />
            </header>
        </div>
    );
}

export default Header;
