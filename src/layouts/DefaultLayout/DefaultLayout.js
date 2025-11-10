import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <main className={cx("container")}>{children}</main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
